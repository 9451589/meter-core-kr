// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as NpcData from "../structures/NpcData";
export type PKTNewNpcSummon = {
  npcData: NpcData.NpcData;
  publishReason: number;
  ownerId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTNewNpcSummon;
  data.npcData = NpcData.read(reader);
  reader.skip(23);
  data.ownerId = reader.u64();
  reader.skip(12);
  data.publishReason = reader.u8();
  return data;
}
export const name = "PKTNewNpcSummon";
export const opcode = 0;
