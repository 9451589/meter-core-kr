// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type BossKillData = {
  isDead: boolean;
  npcId: number;
};
export function read(reader: Read) {
  const data = {} as BossKillData;
  data.npcId = reader.u32();
  data.isDead = reader.bool();
  return data;
}
