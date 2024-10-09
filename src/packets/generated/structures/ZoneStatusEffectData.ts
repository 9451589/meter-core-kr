// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type ZoneStatusEffectData = {
  target: number;
  id: number;
  instanceId: number;
  stackCount: number;
};
export function read(reader: Read) {
  const data = {} as ZoneStatusEffectData;
  data.stackCount = reader.u8();
  data.target = reader.u8();
  data.id = reader.u32();
  reader.skip(4);
  data.instanceId = reader.u32();
  return data;
}
