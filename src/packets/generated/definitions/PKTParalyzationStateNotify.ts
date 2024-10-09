// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  decreasePoint: number;
  enable: boolean;
  paralyzationPoint: number;
  noHitCheckTime: number;
  hitCheckTime: number;
  paralyzationMaxPoint: number;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.enable = reader.bool();
  data.paralyzationPoint = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  reader.skip(2);
  data.noHitCheckTime = reader.u32();
  data.hitCheckTime = reader.u32();
  data.decreasePoint = reader.u32();
  reader.skip(1);
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 0;
