// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneMemberLoadStatusNotify = {
  firstPCEnterTick: bigint;
  completeMembers: bigint[];
  zoneInstId: bigint;
  zoneId: number;
  loadComplete: boolean;
  zoneLevel: number;
  totalMembers: bigint[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneMemberLoadStatusNotify;
  data.loadComplete = reader.bool();
  data.firstPCEnterTick = reader.u64();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.zoneLevel = reader.u8();
  data.zoneInstId = reader.u64();
  data.zoneId = reader.u32();
  return data;
}
export const name = "PKTZoneMemberLoadStatusNotify";
export const opcode = 0;
