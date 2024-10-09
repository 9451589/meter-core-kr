// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  targetId: bigint;
  curHp: bigint;
  maxHp: bigint;
  damageAttr?: number;
  modifier: number;
  unk3_m: number;
  damage: bigint;
  damageType: number;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.curHp = ReadNBytesInt64.read(reader);
  data.modifier = reader.u8();
  data.damage = ReadNBytesInt64.read(reader);
  data.unk3_m = reader.u16();
  if (reader.bool()) data.damageAttr = reader.u8();
  data.targetId = reader.u64();
  data.damageType = reader.u8();
  data.maxHp = ReadNBytesInt64.read(reader);
  return data;
}
