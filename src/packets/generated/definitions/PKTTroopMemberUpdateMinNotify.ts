// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTTroopMemberUpdateMinNotify = {
  unk0_m: number;
  position: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  characterId: bigint;
  maxHp: bigint;
  curHp: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTroopMemberUpdateMinNotify;
  data.maxHp = ReadNBytesInt64.read(reader);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.characterId = reader.u64();
  data.unk0_m = reader.u32();
  data.curHp = ReadNBytesInt64.read(reader);
  data.position = reader.u64();
  return data;
}
export const name = "PKTTroopMemberUpdateMinNotify";
export const opcode = 0;
