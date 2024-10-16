// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type EquipItemData = {
  itemTint: Buffer;
  slot: number;
  id: number;
  level: number;
  expireTime: LostArkDateTime.LostArkDateTime;
  unk5: number;
  unk7_0?: number;
};
export function read(reader: Read) {
  const data = {} as EquipItemData;
  if (reader.bool()) data.unk7_0 = reader.u8();
  data.expireTime = LostArkDateTime.read(reader);
  data.slot = reader.u16();
  data.id = reader.u32();
  data.unk5 = reader.u8();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.level = reader.u16();
  return data;
}
