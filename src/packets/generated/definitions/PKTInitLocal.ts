// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as CooldownData from "../structures/CooldownData";
import * as AbilityData from "../structures/AbilityData";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTInitLocal = {
  statPair: { statType: number; value: bigint }[];
  unk1: number;
  unk2: number;
  addonFeatureIdList: Buffer;
  struct_227: Buffer;
  unk5: bigint;
  unk6: number;
  cooldownDataList: CooldownData.CooldownData[];
  unk9_0?: number;
  abilityDataList: AbilityData.AbilityData[];
  unk11: bigint;
  struct_348: Buffer;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk14: number;
  struct_139: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.cooldownDataList = reader.array(reader.u16(), () => CooldownData.read(reader), 300);
  data.struct_139 = reader.bytes(reader.u16(), 353, 48);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk11 = reader.u64();
  data.struct_227 = reader.bytes(reader.u16(), 3, 17);
  data.unk2 = reader.u8();
  data.unk6 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const s = {} as { statType: number; value: bigint };
      s.value = ReadNBytesInt64.read(reader);
      s.statType = reader.u8();
      return s;
    },
    153
  );
  data.struct_348 = reader.bytes(reader.u16(), 104, 30);
  if (reader.bool()) data.unk9_0 = reader.u32();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.unk5 = reader.u64();
  data.unk14 = reader.u8();
  data.unk1 = reader.u32();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const v = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      v.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      v.skillId = reader.u32();
      return v;
    },
    200
  );
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 0;
