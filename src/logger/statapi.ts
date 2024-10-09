import { createHash } from "crypto";
import { EntityTracker, EntityType, Player } from "./entityTracker";
import axios from "axios";
import { LiveLogger } from "./logger";
import { LogEvent } from "./logEvent";
import { logId } from "../packets/log/logIds";
import { logMapping } from "../packets/log/logMapping";
import { LogStreamEvent } from "../packets/log/LogStreamEvent";
import { APP_StatApi } from "../packets/log/types";
import { ApiStatType, CharacterExportInfo } from "../packets/common/api";
import type { PCInspectResult } from "../packets/log/types";

export class StatApi {
  static baseUrl = "";
  #logger?: LiveLogger;
  #entityTracker: EntityTracker;
  #clientId: string;

  ip?: string;
  zoneSyncStatus = ZoneSyncStatus.INVALID;
  cache = new Map<string, PlayerStatCache>();

  constructor(entityTracker: EntityTracker, clientId: string, logger: LiveLogger | undefined) {
    if (logger) this.#logger = logger;
    this.#entityTracker = entityTracker;
    this.#clientId = clientId;
  }
  syncData() {
    const playerList: Player[] = [];
    //someone exit battle workshop -> we're in a raid: query stats api
    this.#entityTracker.entities.forEach((e) => {
      if (e.entityType === EntityType.Player) {
        playerList.push(e as Player);
      }
    });
    //console.log(playerList.reduce((s, c) => `${s}${c.name}, `, ""));
    this.getPlayersData(playerList);
  }
  getPlayersData(playerList: Player[], retries = 0) {
    if (retries > 24) {
      playerList.forEach((p) => {
        const cache = this.cache.get(p.name);
        // Set players as invalid, we don't want to query again players that didn't get their gear updated for at least 2mn
        //TODO: make the retry count per-player, and reset their retry count on gear change, as this safety will trigger is someone keeps changing his gear for 2mn
        if (cache && cache.status === PlayerStatCacheStatus.PENDING) cache.status = PlayerStatCacheStatus.INVALID;
        else if (!cache) {
          this.cache.set(p.name, {
            hash: "",
            status: PlayerStatCacheStatus.INVALID,
            info: {
              name: p.name,
              stats: [],
              elixirs: [],
              gems: [],
            },
          });
        }
      });
      return;
    }
    if (!this.isCurrentZoneValid()) {
      //Current zone is (became) invalid
      playerList.forEach((p) => {
        const cache = this.cache.get(p.name);
        //current queries are removed from pending to prevent them from being locked in that state, but we keep valid & invalid states
        if (cache && cache.status === PlayerStatCacheStatus.PENDING) this.cache.delete(p.name);
      });
      return;
    }
    if (!this.#logger) return; // Do not fetch data during replays
    if (!this.ip) return;
    const playerQuery: Record<string, string> = {};
    playerList.forEach((p) => {
      const hash = this.getHash(p);
      let playerCache = this.cache.get(p.name);
      if (!hash) {
        //Clear cache, so that the character doesn't stay stuck on Pending
        if (playerCache && playerCache.status === PlayerStatCacheStatus.PENDING) this.cache.delete(p.name);
        return; //We ignore players for which we don't have items/characterId
      }
      //TODO: localplayer hash will return undefined when we started after character switch -> get stats locally
      if (playerCache) {
        if (playerCache.status === PlayerStatCacheStatus.INVALID) return; //Never retry again for invalid cache entries
        if (retries === 0 && playerCache.status === PlayerStatCacheStatus.PENDING) return;
        if (playerCache.status === PlayerStatCacheStatus.VALID && playerCache.hash === hash) return;
      }
      // Prepare cache entry
      if (!playerCache) {
        playerCache = {
          hash: hash,
          status: PlayerStatCacheStatus.PENDING,
          info: {
            name: p.name,
            stats: [],
            elixirs: [],
            gems: [],
          },
        };
      } else {
        playerCache.hash = hash;
        playerCache.status = PlayerStatCacheStatus.PENDING;
      }
      this.cache.set(p.name, playerCache);

      //Append query
      playerQuery[p.name] = hash;
    });
    if (Object.keys(playerQuery).length === 0) return;
    axios
      .get(`${StatApi.baseUrl}/req2`, { params: { ip: this.ip, ci: this.#clientId, ...playerQuery } /*, timeout: ??*/ })
      .then((res) => {
        if (res.status !== 200) return;
        if (this.#logger) {
          try {
            const json: CharacterExportInfo[] = res.data;

            const logMap = logMapping.get(logId.APP_StatApi);
            if (logMap) {
              const [logName, readLog, writeLog] = logMap;
              const parsed: APP_StatApi = { players: json }; //TODO: sanitize before
              //Get missing data (We might want to do that processing on the backend ?)
              playerList = playerList.filter((p) => !json.find((c) => c.name === p.name));
              if (playerList.length > 0)
                //Re-query 3s later with fresh data
                setTimeout(() => {
                  //Get fresh data
                  playerList = playerList
                    .map((p) => {
                      return this.#entityTracker.getEntityByName(p.name);
                    })
                    .filter((p) => p !== undefined && p.entityType === EntityType.Player) as Player[];
                  this.getPlayersData(playerList, retries + 1); //It'll retry for 2mn, if it's still not up to date, consider the player to invalid (max 12 tries per player)
                }, 10000);
              if (parsed.players.length > 0) {
                const logEvent = new LogEvent(parsed, logId.APP_StatApi, writeLog);
                // Dispatch LogEvent
                this.#logger.emit(logName as keyof LogStreamEvent, logEvent);
                this.#logger.emit("*", logName, logEvent as unknown as LogEvent<Object>);
                // Dispatch serialized event
                this.#logger.appendLog(logEvent);
              }
            }
          } catch (e) {
            //console.error(e);
            setTimeout(() => {
              //Get fresh data
              playerList = playerList
                .map((p) => {
                  return this.#entityTracker.getEntityByName(p.name);
                })
                .filter((p) => p !== undefined && p.entityType === EntityType.Player) as Player[];
              this.getPlayersData(playerList, retries + 5); //if the server returns an error, do less retries
            }, 10000);
          }
        }
      })
      .catch((e) => {
        //console.error(e);
        setTimeout(() => {
          //Get fresh data
          playerList = playerList
            .map((p) => {
              return this.#entityTracker.getEntityByName(p.name);
            })
            .filter((p) => p !== undefined && p.entityType === EntityType.Player) as Player[];
          this.getPlayersData(playerList, retries + 5); //if the server returns an error, do less retries
        }, 10000);
      });
    //TODO: error handling
  }
  getHash(p: Player): string | undefined {
    if (/*!p.items.lifeToolList || */ !p.items.equipList || p.characterId === 0n || !p.class || p.name === "You")
      return;

    /*
    const lifeToolData = new Array(6).fill(0);
    p.items.lifeToolList?.forEach((lifeTool) => {
      lifeToolData[lifeTool.slot] = lifeTool.id;
    });
    */
    const equipData = new Array(32).fill(0);
    p.items.equipList?.forEach((equip) => {
      equipData[equip.slot] = equip.id;
    });
    const data = `${p.name}${p.class}${p.characterId}${equipData.join("")}`;
    return createHash("md5").update(data).digest("hex");
  }
  updatePlayerStats(players: CharacterExportInfo[]) {
    players.forEach((p) => {
      //console.log("Updated base stats: ", p);
      const playerCache = this.cache.get(p.name);
      if (playerCache) {
        // Update cache values
        playerCache.info = p;
        playerCache.status = PlayerStatCacheStatus.VALID;
      } else {
        this.cache.set(p.name, {
          hash: "", //We're in replay, hash isn't used
          status: PlayerStatCacheStatus.VALID,
          info: p,
        });
      }
    });
  }
  updatePlayerStats2(name: string, statPairList: { statType: number; value: bigint }[]) {
    const c = {} as CharacterExportInfo;
    c.name = name;
    c.stats = this.toStatAPIstats(statPairList);
    c.elixirs = [];
    c.gems = [];
    //console.log(c);

    let playerCache = this.cache.get(name);
    // inspected before leaving battle workshop, cache hasn't been created yet
    if (!playerCache) {
      playerCache = {
        hash: "",
        status: PlayerStatCacheStatus.VALID,
        info: c,
      };
    } else {
      playerCache.info = c;
      playerCache.status = PlayerStatCacheStatus.VALID;
    }
    this.cache.set(c.name, playerCache);
  }
  toStatAPIstats(statpair: { statType: number; value: bigint }[]) {
    let apiStats = [] as { id: ApiStatType; value: number }[];
    // statpair.forEach((e) => console.log(`${e.statType} | ${e.value}`));

    const intStrDex = Number(statpair.find((e) => e.statType === 47)?.value);
    const wepPwr = Number(statpair.find((e) => e.statType === 151)?.value);
    const atkPwr = Math.sqrt((intStrDex * wepPwr) / 6);

    const crit = Number(statpair.find((e) => e.statType === 15)?.value);
    const spec = Number(statpair.find((e) => e.statType === 16)?.value);
    const skilldmg = Number(statpair.find((e) => e.statType === 50)?.value) - 10000;

    apiStats.push({ id: ApiStatType.CRIT, value: crit });
    apiStats.push({ id: ApiStatType.SPEC, value: spec });
    apiStats.push({ id: ApiStatType.ATKPOWER, value: atkPwr });
    apiStats.push({ id: ApiStatType.SKILLDMG, value: skilldmg });

    return apiStats;
  }

  updateLocalPlayerCache(name: string) {
    if (this.#entityTracker.localPlayer.name === "You") {
      let playerCache = this.cache.get("You");
      if (playerCache) {
        playerCache.info.name = name;
        playerCache.status = PlayerStatCacheStatus.VALID;
        this.cache.delete("You");
        this.cache.set(name, playerCache);
      }
    }
  }

  getStats(name: string) {
    if (!this.isCurrentZoneValid()) return;
    const c = this.cache.get(name);
    if (c && c.status === PlayerStatCacheStatus.VALID) return c.info.stats;
    return;
  }

  isCurrentZoneValid() {
    return (
      this.zoneSyncStatus !== ZoneSyncStatus.INVALID &&
      (this.zoneSyncStatus & (ZoneSyncStatus.ZONE_INVALID | ZoneSyncStatus.RAID_INVALID)) === 0
    );
  }
  //TODO add a way to reset ?
}

export type PlayerStatCache = {
  hash: string;
  status: PlayerStatCacheStatus;
  info: CharacterExportInfo;
};
export enum PlayerStatCacheStatus {
  INVALID,
  PENDING,
  VALID,
}

export enum ZoneSyncStatus {
  INVALID = 0,
  ZONE_INVALID = 1 << 1,
  ZONE_VALID = 1 << 2,
  RAID_INVALID = 1 << 3,
  RAID_VALID = 1 << 4,
}
