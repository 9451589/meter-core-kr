import type { Read, Write } from "../../stream";
import type { PKTSkillCooldownNotify } from "../../generated/types";
export type SkillCooldownNotify = {
  skillId: number;
  cd1: number;
  cd2: number;
};
export function read(reader: Read, version: number) {
  const data = {} as SkillCooldownNotify;
  data.skillId = reader.u32();
  data.cd1 = reader.f32();
  data.cd2 = reader.f32();
}
export function write(writer: Write, data: SkillCooldownNotify | PKTSkillCooldownNotify) {
  writer.u32(data.skillId);
  writer.f32(data.cd1);
  writer.f32(data.cd2);
}
export const name = "SkillCooldownNotify";
