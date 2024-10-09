// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTTriggerBossBattleStatus = {
  unk2_m: boolean;
  triggerId: number;
  step: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTriggerBossBattleStatus;
  data.triggerId = reader.u32();
  reader.skip(1);
  data.step = reader.u32();
  data.unk2_m = reader.bool();
  return data;
}
export const name = "PKTTriggerBossBattleStatus";
export const opcode = 0;
