// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as SkillOptionData from "../../common/SkillOptionData";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillStartNotify = {
  sourceId: bigint;
  aiStateId?: number;
  aimTargetPosition: Vector3F.Vector3F;
  skillId: number;
  curPosition: Vector3F.Vector3F;
  newPosition: Vector3F.Vector3F;
  pitchRotation?: Angle.Angle;
  skillLevel: number;
  curDirectionYaw: Angle.Angle;
  skillOptionData: SkillOptionData.SkillOptionData;
  newDirectionYaw: Angle.Angle;
  unk1_m?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillStartNotify;
  data.skillOptionData = SkillOptionData.read(reader);
  data.aimTargetPosition = Vector3F.read(reader);
  if (reader.bool()) data.pitchRotation = Angle.read(reader);
  data.skillId = reader.u32();
  if (reader.bool()) data.unk1_m = reader.u32();
  if (reader.bool()) data.aiStateId = reader.u32();
  data.sourceId = reader.u64();
  data.newDirectionYaw = Angle.read(reader);
  data.curPosition = Vector3F.read(reader);
  data.curDirectionYaw = Angle.read(reader);
  data.newPosition = Vector3F.read(reader);
  data.skillLevel = reader.u8();
  return data;
}
export const name = "PKTSkillStartNotify";
export const opcode = 0;
