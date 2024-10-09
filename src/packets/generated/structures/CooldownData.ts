// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type CooldownData = {
  cd1: number;
  cd2: number;
  unk3_0?: number;
  unk5_0?: Buffer;
  skillId: number;
};
export function read(reader: Read) {
  const data = {} as CooldownData;
  data.cd1 = reader.f32();
  if (reader.bool()) data.unk5_0 = reader.bytes(9);
  data.cd2 = reader.f32();
  if (reader.bool()) data.unk3_0 = reader.u32();
  data.skillId = reader.u32();
  return data;
}
