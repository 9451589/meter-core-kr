// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectDurationNotify = {
  effectInstanceId: number;
  targetId: bigint;
  expirationTick: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectDurationNotify;
  reader.skip(1);
  data.targetId = reader.u64();
  reader.skip(2);
  data.effectInstanceId = reader.u32();
  data.expirationTick = reader.u64();
  reader.skip(1);
  return data;
}
export const name = "PKTStatusEffectDurationNotify";
export const opcode = 0;
