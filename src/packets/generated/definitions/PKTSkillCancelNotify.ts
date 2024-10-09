// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
export type PKTSkillCancelNotify = {
  newPosition: Vector3F.Vector3F;
  skillId: number;
  cancelReason: number;
  caster: bigint;
  newDirectionYaw: Angle.Angle;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTSkillCancelNotify;
  reader.skip(2);
  data.skillId = reader.u32();
  data.cancelReason = reader.u8();
  data.newPosition = Vector3F.read(reader);
  data.newDirectionYaw = Angle.read(reader);
  data.caster = reader.u64();
  return data;
}
export const name = "PKTSkillCancelNotify";
export const opcode = 0;
