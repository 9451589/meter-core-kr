// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_626 from "../structures/Struct_626";
import * as Struct_809 from "../structures/Struct_809";
export type Struct_680 = {
  struct_241: Buffer;
  unk2_0?: Buffer;
  unk3: number;
  struct_236: Buffer;
  unk1_0?: number;
  unk1_1?: number;
  struct_195?: Buffer;
  struct_196?: Buffer;
  unk1_2?: number;
  unk1_3?: number;
  struct_626?: Struct_626.Struct_626;
  unk8: number;
  struct_233?: Buffer;
  unk11: number;
  unk12: number;
  struct_809?: Struct_809.Struct_809;
  unk15: number;
  struct_448: Buffer;
  unk17: number;
  struct_274: Buffer;
  unk19: number;
  itemTint: Buffer;
  unk4_0: Buffer;
  unk4_1: number;
  unk5: number;
};
export function read(reader: Read) {
  const data = {} as Struct_680;
  data.unk3 = reader.u32();
  data.struct_448 = reader.bytes(reader.u16(), 3, 10);
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.unk1_2 = reader.u32();
    data.unk1_3 = reader.u32();
    data.struct_195 = reader.bytes(reader.u16(), 5, 30);
    data.struct_196 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_1 = reader.u8();
  }
  data.unk15 = reader.u32();
  data.unk12 = reader.u32();
  if (reader.bool()) data.struct_809 = Struct_809.read(reader);
  data.unk17 = reader.u32();
  data.unk19 = reader.u32();
  if (reader.bool()) data.struct_626 = Struct_626.read(reader);
  data.struct_274 = reader.bytes(reader.u16(), 3, 21);
  if (reader.bool()) data.struct_233 = reader.bytes(reader.u16(), 2, 32);
  data.unk8 = reader.u32();
  if (reader.bool() /*unk4*/) { 
    data.unk4_0 = reader.bytes(reader.u16(), 10, 30);
    data.unk4_1 = reader.u8();
  }
  data.unk11 = reader.u8();
  data.unk5 = reader.u8();
  data.struct_241 = reader.bytes(reader.u16(), 10, 29);
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  if (reader.bool()) data.unk2_0 = reader.bytes(9);
  data.struct_236 = reader.bytes(reader.u16(), 3, 7);
  return data;
}
