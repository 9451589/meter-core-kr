// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_624 = {
  bossKillDataList: BossKillData.BossKillData[];
  unk1: number;
  unk2: number;
  struct_1: { struct_542: Buffer; unk1_0_1: number }[];
  unk4: number;
  unk5: number;
  unk6: number;
  unk7: number;
  unk8: number;
};
export function read(reader: Read) {
  const data = {} as Struct_624;
  data.unk2 = reader.u8();
  data.unk1 = reader.u32();
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  data.unk6 = reader.u32();
  data.unk7 = reader.u32();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.struct_1 = reader.array(
    reader.u16(),
    () => {
      const p = {} as { struct_542: Buffer; unk1_0_1: number };
      p.unk1_0_1 = reader.u32();
      p.struct_542 = reader.bytes(reader.u16(), 10);
      return p;
    },
    3
  );
  data.unk8 = reader.u16();
  return data;
}
