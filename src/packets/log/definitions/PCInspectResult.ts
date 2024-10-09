// Auto Generated, do not edit.
import { Read, Write } from "../../stream";
import type { PKTPCInspectResult } from "../../generated/types";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PCInspectResult = {
  name: string;
  statPairList: { statType: number; value: bigint }[];
};

export function read(reader: Read, version: number) {
  const data = {} as PCInspectResult;
  data.name = reader.string(20);
  data.statPairList = reader.array(
    reader.u16(),
    () => {
      const z = {} as { statType: number; value: bigint };
      z.statType = reader.u8();
      z.value = ReadNBytesInt64.read(reader, version);
      return z;
    },
    153
  );
  return data;
}

export function write(writer: Write, data: PCInspectResult | PKTPCInspectResult) {
  writer.string(data.name, 20);
  writer.array(data.statPairList, { maxLen: 153, lenType: "u16" }, (obj: { statType: number; value: bigint }) => {
    writer.u8(obj.statType);
    ReadNBytesInt64.write(writer, obj.value);
  });
}

export const name = "PCInspectResult";
