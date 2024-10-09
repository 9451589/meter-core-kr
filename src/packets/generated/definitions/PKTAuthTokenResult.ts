// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTAuthTokenResult = {
  packetResultCode: number;
  unk1_m: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTAuthTokenResult;
  data.unk1_m = reader.bytes(reader.u32(), 688);
  data.packetResultCode = reader.u32();
  return data;
}
export const name = "PKTAuthTokenResult";
export const opcode = 0;
