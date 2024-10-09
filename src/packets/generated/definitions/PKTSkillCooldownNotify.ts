import { Read } from "../../stream";
export type PKTSkillCooldownNotify = {
  skillId: number;
  cd1: number;
  cd2: number;
  unk0: number;
  unk1: Buffer;
  unk2: number;
  unk3: number[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillCooldownNotify;
  data.cd1 = reader.f32();
  if (reader.bool()) data.unk1 = reader.bytes(9);
  data.cd2 = reader.f32();
  if (reader.bool()) data.unk2 = reader.u32();
  data.skillId = reader.u32();
  data.unk0 = reader.u32();
  data.unk3 = reader.array(reader.u16(), () => reader.u32(), 300);
  return data;
}
export const name = "PKTSkillCooldownNotify";
export const opcode = 0;
