// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTInstanceZoneEnteredNotify = {
  zoneId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInstanceZoneEnteredNotify;
  reader.skip(11);
  data.zoneId = reader.u32();
  return data;
}
export const name = "PKTInstanceZoneEnteredNotify";
export const opcode = 0;
