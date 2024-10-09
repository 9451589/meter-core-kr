var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name116 in all) __defProp(target, name116, { get: all[name116], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/logger/logger.ts
var logger_exports = {};
__export(logger_exports, {
  LiveLogger: () => LiveLogger,
  Logger: () => Logger,
  ReplayLogger: () => ReplayLogger,
});
module.exports = __toCommonJS(logger_exports);
var import_tiny_typed_emitter2 = require("tiny-typed-emitter");

// src/packets/stream.ts
var Read = class {
  /** Buffer */
  b;
  /** Offset */
  o;
  constructor(buf) {
    this.b = buf;
    this.o = 0;
  }
  skip(length = 0) {
    this.o += length;
  }
  bool() {
    return this.u8() === 1;
  }
  u8() {
    return this.b.readUint8(this.o++);
  }
  i8() {
    return this.b.readInt8(this.o++);
  }
  u16() {
    const value = this.b.readUint16LE(this.o);
    this.o += 2;
    return value;
  }
  i16() {
    const value = this.b.readInt16LE(this.o);
    this.o += 2;
    return value;
  }
  u32() {
    const value = this.b.readUint32LE(this.o);
    this.o += 4;
    return value;
  }
  i32() {
    const value = this.b.readInt32LE(this.o);
    this.o += 4;
    return value;
  }
  f32() {
    const value = this.b.readFloatLE(this.o);
    this.o += 4;
    return value;
  }
  u64() {
    const value = this.b.readBigUint64LE(this.o);
    this.o += 8;
    return value;
  }
  i64() {
    const value = this.b.readBigInt64LE(this.o);
    this.o += 8;
    return value;
  }
  string(maxLength) {
    let length = this.u16();
    if (length <= maxLength) {
      length = length * 2;
      const value = this.b.toString("utf16le", this.o, this.o + length);
      this.o += length;
      return value;
    }
    return "";
  }
  bytes(length = 0, maxLength, multiplier) {
    if (maxLength && length > maxLength) return Buffer.alloc(0);
    if (multiplier) length = length * multiplier;
    const value = Buffer.from(this.b.subarray(this.o, this.o + length));
    this.o += length;
    return value;
  }
  array(length, callbackfn, maxLength) {
    if (maxLength && length > maxLength) return [];
    return new Array(length).fill(void 0).map(callbackfn);
  }
};
var Write = class {
  /** Buffer */
  b;
  /** Offset */
  o;
  constructor(max = 65535) {
    this.b = Buffer.allocUnsafe(max);
    this.o = 0;
  }
  get value() {
    return this.b.subarray(0, this.o);
  }
  skip(length = 0) {
    this.o += length;
  }
  bool(value = false) {
    this.u8(value ? 1 : 0);
    return value;
  }
  u8(value = 0) {
    this.b.writeUInt8(value, this.o++);
  }
  i8(value = 0) {
    this.b.writeInt8(value, this.o++);
  }
  u16(value = 0) {
    this.o = this.b.writeUInt16LE(value, this.o);
  }
  i16(value = 0) {
    this.o = this.b.writeInt16LE(value, this.o);
  }
  u32(value = 0) {
    this.o = this.b.writeUInt32LE(value, this.o);
  }
  i32(value = 0) {
    this.o = this.b.writeInt32LE(value, this.o);
  }
  f32(value = 0) {
    this.o = this.b.writeFloatLE(value, this.o);
  }
  u64(value = 0n) {
    this.o = this.b.writeBigUInt64LE(BigInt(value), this.o);
  }
  i64(value = 0n) {
    this.o = this.b.writeBigInt64LE(BigInt(value), this.o);
  }
  string(value = "", maxLength = 0) {
    this.u16(value.length);
    if (value.length <= maxLength) this.o += this.b.write(value, this.o, "utf16le");
  }
  /**
   * @param opts.length Used when Buffer should be fixed length -> no header
   * @param opts.maxLen Used when Buffer has a max number of chunk -> chunk count is written as header
   * @param opts.lenType Required if maxLen, Used to specify header size possible values: ["u8", "u16", "u32"]
   * @param opts.multiplier Default: 1, Used to specify chunk size, Buffer size should be a multiple of multiplier, defaults to 1
   * @param opts If empty, fallback to opts.length = Buffer.length
   */
  bytes(value = Buffer.alloc(0), opts = {}) {
    if (opts.maxLen) {
      const chunkSize = opts.multiplier ?? 1;
      if (value.length % chunkSize)
        throw new Error(
          `Error writing bytes, chunkSize should be a multiple of intut value size, got ${value.length}%${chunkSize}`
        );
      const count = value.length / chunkSize;
      if (count > opts.maxLen)
        throw new Error(`Error writing bytes, input value size exceeded maxLen, got ${count} > ${opts.maxLen}`);
      if (!opts.lenType)
        throw new Error(`Error writing bytes, invalid lenType when writing chunks, got ${opts.lenType}`);
      this[opts.lenType](count);
    } else if (opts.length && value.length !== opts.length) {
      throw new Error(
        `Error writing bytes, input value size doesn't match opts.length, ${value.length} !== ${opts.lenType}`
      );
    }
    this.o += value.copy(this.b, this.o);
  }
  /**
   *
   * @param opts.maxLen Max size of array, size is set to 0 if overflow
   * @param opts.lenTypeUsed to specify header size possible values: ["u8", "u16", "u32"]
   */
  array(value = [], opts, callbackfn) {
    if (value === void 0 || value.length > opts.maxLen) {
      this[opts.lenType](0);
      return;
    }
    this[opts.lenType](value.length);
    value.forEach(callbackfn);
  }
};

// src/packets/generated/structures/AbilityData.ts
function read(reader) {
  const data = {};
  data.id = reader.u32();
  data.points = reader.u16();
  data.level = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTAbilityChangeNotify.ts
function read2(buf) {
  const reader = new Read(buf);
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  return data;
}
var name = "PKTAbilityChangeNotify";
var opcode = 0;

// src/packets/generated/structures/ActiveAbility.ts
function read3(reader) {
  const data = {};
  data.level = reader.u32();
  data.featureType = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTActiveAbilityNotify.ts
function read4(buf) {
  const reader = new Read(buf);
  const data = {};
  data.activeAbilityList = reader.array(reader.u16(), () => read3(reader), 60);
  data.objectId = reader.u64();
  return data;
}
var name2 = "PKTActiveAbilityNotify";
var opcode2 = 38681;

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
function read5(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const c = {};
      c.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      c.skillId = reader.u32();
      return c;
    },
    200
  );
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  return data;
}
var name3 = "PKTAddonSkillFeatureChangeNotify";
var opcode3 = 45920;

// src/packets/generated/definitions/PKTAuthTokenResult.ts
function read6(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk1_m = reader.bytes(reader.u32(), 688);
  data.packetResultCode = reader.u32();
  return data;
}
var name4 = "PKTAuthTokenResult";
var opcode4 = 51792;

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
function read7(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.paralyzationPoint = reader.u32();
  data.objectId = reader.u64();
  reader.skip(1);
  data.type = reader.u8();
  data.paralyzationMaxPoint = reader.u32();
  return data;
}
var name5 = "PKTBlockSkillStateNotify";
var opcode5 = 15593;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
function read8(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.type = reader.u32();
  data.targetId = reader.u64();
  data.sourceId = reader.u64();
  reader.skip(1);
  return data;
}
var name6 = "PKTCounterAttackNotify";
var opcode6 = 41920;

// src/packets/generated/definitions/PKTDeathNotify.ts
function read9(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool()) data.deathType = reader.u8();
  if (reader.bool()) data.damageAttr = reader.u8();
  data.durabilityDecrement = reader.u8();
  data.effectId = reader.u32();
  data.directionYaw = reader.u16();
  data.unk0_m = reader.u64();
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  if (reader.bool()) data.abnormalStatusType = reader.u8();
  data.unk2_m = reader.u32();
  return data;
}
var name7 = "PKTDeathNotify";
var opcode7 = 22594;

// src/packets/common/LostArkDateTime.ts
var daysInMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function IsLeapYear(y) {
  return !(y % 4 || (!(y % 100) && y % 400));
}
function isValidDate(year, month, day) {
  if (year > 99) {
    if (year < 1752 || (year == 1752 && (month < 9 || (month == 9 && day << 14)))) {
      return false;
    }
  } else {
    year += 1900;
  }
  return (
    day > 0 /* 
  month > 0 &&*/ &&
    month <= 12 &&
    (day <= daysInMonths[month] || (day == 29 && month == 2 && IsLeapYear(year)))
  );
}
function bigintToDate(value) {
  let LODWORD = Number(value & 0xffffffffn);
  let HIDWORD = Number((value >> 32n) & 0xffffffffn);
  let year = LODWORD & 4095;
  let month = (LODWORD & 65535) >> 12;
  let day = (LODWORD >> 16) & 31;
  if (isValidDate(year, month, day)) {
  } else {
    year = month = day = 0;
  }
  let h = (LODWORD >> 21) & 31;
  let m = (LODWORD >> 26) & 63;
  let s = HIDWORD & 63;
  let ms = (HIDWORD >> 6) & 16383;
  if (h < 24 && m < 60 && s < 60 && ms < 1e3) {
  } else {
    h = 24;
    m = s = ms = 0;
  }
  return new Date(Date.UTC(year <= 99 ? year + 1900 : year, month - 1, day, h, m, s, ms));
}
function dateToBigint(date) {
  let result = 0n;
  result |= BigInt(date.getUTCMilliseconds()) << 38n;
  result |= BigInt(date.getUTCSeconds()) << 32n;
  result |= BigInt(date.getUTCMinutes()) << 26n;
  result |= BigInt(date.getUTCHours()) << 21n;
  result |= BigInt(date.getUTCDate()) << 16n;
  result |= BigInt(date.getUTCMonth() + 1) << 12n;
  result |= BigInt(date.getUTCFullYear() < 2e3 ? date.getUTCFullYear() - 1900 : date.getUTCFullYear());
  return result;
}
function read10(reader, version2 = 0) {
  const s = reader.u16();
  if ((s & 4095) < 2079) {
    reader.o -= 2;
    return bigintToDate(reader.i64());
  } else {
    return bigintToDate((BigInt(s) & 0xfffn) | 0x11000n);
  }
}
function write(writer, date = bigintToDate(0x1181fn)) {
  if (date.getUTCFullYear() >= 2079) {
    writer.u16(Number(dateToBigint(date) & 0xffffn));
  } else writer.i64(dateToBigint(date));
}

// src/packets/generated/structures/EquipItemData.ts
function read11(reader) {
  const data = {};
  data.expireTime = read10(reader);
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  if (reader.bool()) data.unk7_0 = reader.u8();
  data.slot = reader.u16();
  data.unk5 = reader.u8();
  data.id = reader.u32();
  data.level = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTEquipChangeNotify.ts
function read12(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool()) data.unk3_0 = reader.u64();
  data.unk1 = reader.u32();
  data.unk4 = reader.u32();
  data.objectId = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => read11(reader), 33);
  return data;
}
var name8 = "PKTEquipChangeNotify";
var opcode8 = 38541;

// src/packets/generated/definitions/PKTEquipLifeToolChangeNotify.ts
function read13(buf) {
  const reader = new Read(buf);
  const data = {};
  data.equipLifeToolDataList = reader.array(reader.u16(), () => read11(reader), 9);
  data.objectId = reader.u64();
  return data;
}
var name9 = "PKTEquipLifeToolChangeNotify";
var opcode9 = 41417;

// src/packets/generated/definitions/PKTIdentityStanceChangeNotify.ts
function read14(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.objectId = reader.u64();
  data.stance = reader.u8();
  return data;
}
var name10 = "PKTIdentityStanceChangeNotify";
var opcode10 = 2147;

// src/packets/generated/definitions/PKTInitAbility.ts
function read15(buf) {
  const reader = new Read(buf);
  const data = {};
  data.struct_139 = reader.bytes(reader.u16(), 353, 48);
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  return data;
}
var name11 = "PKTInitAbility";
var opcode11 = 34099;

// src/packets/generated/definitions/PKTInitEnv.ts
function read16(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk7 = reader.u64();
  data.playerId = reader.u64();
  data.lostArkDateTime = read10(reader);
  data.struct_31 = reader.array(
    reader.u16(),
    () => {
      const i = {};
      i.struct_609 = reader.string(128);
      i.versionString = reader.string(64);
      i.struct_592 = reader.string(32);
      return i;
    },
    64
  );
  data.unk5 = reader.u32();
  data.struct_609 = reader.string(128);
  data.unk1 = reader.u8();
  data.unk3 = reader.u32();
  return data;
}
var name12 = "PKTInitEnv";
var opcode12 = 35140;

// src/packets/generated/structures/StatusEffectData.ts
function read17(reader) {
  const data = {};
  data.sourceId = reader.u64();
  data.statusEffectId = reader.u32();
  data.stackCount = reader.u8();
  data.totalTime = reader.f32();
  data.struct_454 = reader.bytes(reader.u16(), 8, 7);
  if (reader.bool()) data.value = reader.bytes(16);
  if (reader.bool()) data.unk5_0 = reader.u64();
  data.effectInstanceId = reader.u32();
  data.skillLevel = reader.u8();
  data.endTick = reader.u64();
  data.occurTime = read10(reader);
  data.unk0 = reader.u32();
  return data;
}

// src/packets/common/ReadNBytesInt64.ts
function bytesToInt64(value) {
  if (value.length === 0) return 0n;
  if (value.length > 8) throw new Error("Value is too large");
  const buf = Buffer.alloc(8);
  value.copy(buf);
  return buf.readBigInt64LE();
}
function read18(reader, version2 = 0) {
  const flag = reader.u8();
  const bytes = reader.bytes((flag >> 1) & 7);
  const result = (bytesToInt64(bytes) << 4n) | BigInt(flag >> 4);
  return (flag & 1) === 0 ? result : -result;
}
function write2(writer, value = 0n) {
  const tempBuf = Buffer.alloc(8);
  const negative = value < 0n;
  tempBuf.writeBigInt64LE((negative ? -value : value) >> 4n);
  let size = 0;
  for (const [i, byte] of tempBuf.entries()) {
    if (byte != 0) size = i + 1;
  }
  if (size > 7) throw new Error("Value is too large");
  writer.u8((Number((negative ? -value : value) & 0xfn) << 4) | ((size & 7) << 1) | (negative ? 1 : 0));
  writer.bytes(tempBuf.subarray(0, size), { length: size });
}

// src/packets/generated/structures/PeriodUpdateStatData.ts
function read19(reader) {
  const data = {};
  data.unk6 = reader.u8();
  data.unk4 = reader.u64();
  data.unk1 = reader.u16();
  data.unk3 = read18(reader);
  data.unk2 = reader.u8();
  data.unk5 = read18(reader);
  data.unk0 = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTInitPC.ts
function read20(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk26 = reader.u8();
  data.struct_342 = reader.array(reader.u16(), () => reader.u16(), 7);
  data.unk0 = reader.u8();
  data.unk13 = reader.u32();
  data.unk7 = reader.u8();
  data.unk2 = reader.u8();
  data.struct_108 = reader.bytes(reader.u16(), 69);
  data.unk17 = reader.u32();
  data.unk35 = reader.u8();
  data.unk33 = reader.u8();
  data.unk5 = reader.u64();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const l = {};
      l.value = read18(reader);
      l.statType = reader.u8();
      return l;
    },
    153
  );
  data.unk8 = reader.u8();
  data.unk20 = reader.u8();
  data.unk19 = reader.u64();
  data.unk11 = reader.bytes(120);
  data.unk22 = reader.u16();
  data.unk27 = reader.u32();
  data.unk51 = reader.u64();
  data.unk47 = reader.u16();
  data.unk45 = reader.bytes(25);
  data.unk34 = reader.u8();
  data.unk30 = reader.u32();
  data.unk9 = reader.u8();
  data.unk56 = reader.u32();
  data.unk23 = reader.bytes(35);
  data.unk14 = reader.u32();
  data.unk25 = reader.u8();
  data.unk58 = reader.u8();
  data.characterId = reader.u64();
  data.struct_348 = reader.bytes(reader.u16(), 104, 30);
  data.unk36 = reader.u8();
  data.unk54 = reader.u8();
  data.playerId = reader.u64();
  data.unk37 = reader.u64();
  data.unk57 = reader.u8();
  data.classId = reader.u16();
  data.unk29 = reader.u32();
  data.level = reader.u16();
  if (reader.bool()) data.unk4_0 = reader.u32();
  data.unk32 = reader.u32();
  data.unk21 = reader.u64();
  data.struct_227 = reader.bytes(reader.u16(), 3, 17);
  data.unk31 = reader.u8();
  data.unk1 = reader.u16();
  data.gearLevel = reader.f32();
  data.unk49 = reader.u32();
  data.unk55 = reader.u64();
  data.unk39 = reader.u8();
  data.unk53 = reader.u16();
  data.unk40 = reader.u32();
  data.unk38 = reader.u32();
  data.name = reader.string(20);
  data.unk50 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read17(reader), 80);
  data.unk52 = reader.u8();
  data.unk43 = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => read19(reader), 5);
  return data;
}
var name13 = "PKTInitPC";
var opcode13 = 46620;

// src/packets/generated/structures/Struct_147.ts
function read21(reader) {
  const data = {};
  const unk0 = reader.u16();
  if (unk0 === 1) data.unk1_0 = reader.bytes(9);
  return data;
}

// src/packets/generated/structures/Struct_674.ts
function read22(reader) {
  const data = {};
  data.unk5 = reader.u8();
  data.unk4 = reader.u32();
  data.struct_147 = read21(reader);
  data.unk3 = reader.u8();
  data.struct_148 = reader.bytes(reader.u16(), 3, 9);
  data.unk6 = reader.u8();
  data.unk0 = reader.u8();
  data.unk7 = reader.u32();
  return data;
}

// src/packets/generated/structures/Struct_681.ts
function read23(reader) {
  const data = {};
  data.unk3 = reader.u32();
  data.struct_302 = reader.bytes(reader.u16(), 10, 18);
  data.struct_262 = reader.bytes(reader.u16(), 2, 9);
  data.struct_238 = reader.array(reader.u16(), () => read22(reader), 3);
  data.struct_149 = reader.bytes(reader.u16(), 10, 9);
  data.unk6 = reader.u8();
  data.unk9 = reader.u32();
  data.struct_403 = reader.bytes(reader.u16(), 2, 10);
  data.unk5 = reader.u64();
  data.unk10 = reader.u32();
  data.unk8 = reader.u32();
  data.unk11 = reader.u32();
  data.unk12 = reader.u32();
  data.unk13 = reader.u16();
  return data;
}

// src/packets/generated/structures/Struct_626.ts
function read24(reader) {
  const data = {};
  data.unk1 = reader.u32();
  data.unk0 = reader.u8();
  data.unk3 = reader.u32();
  data.unk4 = reader.u8();
  data.struct_151 = reader.bytes(reader.u16(), 2, 5);
  return data;
}

// src/packets/generated/structures/Struct_768.ts
function read25(reader) {
  const data = {};
  data.unk5 = reader.u8();
  data.struct_102 = reader.bytes(reader.u32(), 51);
  data.unk4 = reader.u16();
  data.unk3 = reader.u16();
  data.unk0 = reader.u8();
  data.unk7 = reader.u16();
  data.unk6 = reader.u8();
  data.unk1 = reader.bytes(3);
  return data;
}

// src/packets/generated/structures/Struct_809.ts
function read26(reader) {
  const data = {};
  data.unk2 = reader.bytes(reader.u16(), 7);
  data.unk4 = reader.bytes(reader.u16(), 7);
  data.unk3 = reader.u8();
  if (reader.bool()) data.struct_768 = read25(reader);
  return data;
}

// src/packets/generated/structures/Struct_680.ts
function read27(reader) {
  const data = {};
  data.unk3 = reader.u32();
  data.unk11 = reader.u8();
  data.unk15 = reader.u32();
  data.unk12 = reader.u32();
  data.unk17 = reader.u32();
  data.struct_448 = reader.bytes(reader.u16(), 3, 10);
  data.struct_241 = reader.bytes(reader.u16(), 10, 29);
  if (reader.bool()) data.struct_809 = read26(reader);
  if (reader.bool()) data.unk2_0 = reader.bytes(9);
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  if (reader.bool()) {
    data.unk1_0 = reader.u32();
    data.unk1_2 = reader.u32();
    data.struct_195 = reader.bytes(reader.u16(), 5, 30);
  }
  if (reader.bool()) data.struct_626 = read24(reader);
  data.unk19 = reader.u32();
  data.struct_236 = reader.bytes(reader.u16(), 3, 7);
  data.unk8 = reader.u32();
  data.struct_274 = reader.bytes(reader.u16(), 3, 21);
  if (reader.bool()) data.struct_233 = reader.bytes(reader.u16(), 2, 32);
  return data;
}

// src/packets/generated/structures/BossKillData.ts
function read28(reader) {
  const data = {};
  data.npcId = reader.u32();
  data.isDead = reader.bool();
  return data;
}

// src/packets/generated/structures/Struct_624.ts
function read29(reader) {
  const data = {};
  data.unk2 = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => read28(reader), 3);
  data.unk4 = reader.u8();
  data.unk1 = reader.u32();
  data.struct_1 = reader.array(
    reader.u16(),
    () => {
      const p = {};
      p.unk1_0_1 = reader.u32();
      p.struct_542 = reader.bytes(reader.u16(), 10);
      return p;
    },
    3
  );
  return data;
}

// src/packets/generated/structures/Struct_673.ts
function read30(reader) {
  const data = {};
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.struct_236 = reader.bytes(reader.u16(), 3, 7);
  data.struct_23 = reader.array(
    reader.u16(),
    () => {
      const q = {};
      q.unk1_0_1 = reader.u16();
      q.struct_235 = reader.string(2);
      q.unk1_0_2 = reader.u8();
      return q;
    },
    20
  );
  data.struct_237 = reader.bytes(reader.u16(), 5, 7);
  data.unk4 = reader.u8();
  return data;
}

// src/packets/generated/structures/Struct_577.ts
function read31(reader) {
  const data = {};
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_681 = read23(reader);
  if (unk0 === 2) {
    data.struct_136 = reader.bytes(reader.u16(), 3, 6);
    data.unk2_2 = reader.u8();
    data.struct_2 = reader.array(
      reader.u16(),
      () => {
        const m = {};
        m.unk1_0_2 = reader.u8();
        m.unk1_0_3 = reader.u8();
        m.struct_542 = reader.bytes(reader.u16(), 10);
        m.unk1_0_1 = reader.u32();
        return m;
      },
      3
    );
  }
  if (unk0 === 3) data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_1 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_2 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_0 = reader.u32();
  }
  if (unk0 === 5) data.struct_680 = read27(reader);
  if (unk0 === 6) data.struct_624 = read29(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_673 = read30(reader);
  if (unk0 === 9) data.unk9_0 = reader.u8();
  return data;
}

// src/packets/generated/structures/ItemData.ts
function read32(reader) {
  const data = {};
  const count = reader.u32();
  if (count > 0) {
    data.serialNumber = reader.u64();
    data.id = reader.u32();
    data.level = reader.u16();
    data.slot = reader.u16();
    data.durability = reader.u32();
    data.unk1_6_m = reader.u32();
    data.flag = reader.u32();
    data.expireTime = read10(reader);
    data.lockUpdateTime = read10(reader);
    if (reader.bool()) data.unk1_10_0 = reader.bytes(9);
    data.unk1_11 = reader.u8();
    data.unk1_12 = reader.u8();
    data.unk1_13 = reader.u32();
    data.struct_577 = read31(reader);
    data.unk1_15 = reader.u32();
  }
  return data;
}

// src/packets/generated/definitions/PKTInitItem.ts
function read33(buf) {
  const reader = new Read(buf);
  const data = {};
  data.storageType = reader.u8();
  data.itemDataList = reader.array(reader.u16(), () => read32(reader), 80);
  return data;
}
var name14 = "PKTInitItem";
var opcode14 = 11304;

// src/packets/generated/structures/CooldownData.ts
function read34(reader) {
  const data = {};
  data.cd1 = reader.f32();
  if (reader.bool()) data.unk5_0 = reader.bytes(9);
  data.cd2 = reader.f32();
  if (reader.bool()) data.unk3_0 = reader.u32();
  data.skillId = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTInitLocal.ts
function read35(buf) {
  const reader = new Read(buf);
  const data = {};
  data.cooldownDataList = reader.array(reader.u16(), () => read34(reader), 300);
  data.struct_139 = reader.bytes(reader.u16(), 353, 48);
  data.statusEffectDatas = reader.array(reader.u16(), () => read17(reader), 80);
  data.unk11 = reader.u64();
  data.struct_227 = reader.bytes(reader.u16(), 3, 17);
  data.unk2 = reader.u8();
  data.unk6 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const s = {};
      s.value = read18(reader);
      s.statType = reader.u8();
      return s;
    },
    153
  );
  data.struct_348 = reader.bytes(reader.u16(), 104, 30);
  if (reader.bool()) data.unk9_0 = reader.u32();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  data.unk5 = reader.u64();
  data.unk14 = reader.u8();
  data.unk1 = reader.u32();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const v = {};
      v.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      v.skillId = reader.u32();
      return v;
    },
    200
  );
  return data;
}
var name15 = "PKTInitLocal";
var opcode15 = 25961;

// src/packets/generated/definitions/PKTMigrationExecute.ts
function read36(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u32();
  data.account_CharacterId1 = reader.u64();
  data.serverAddr = reader.string(256);
  data.account_CharacterId2 = reader.u64();
  return data;
}
var name16 = "PKTMigrationExecute";
var opcode16 = 26822;

// src/packets/generated/structures/Struct_752.ts
function read37(reader) {
  const data = {};
  data.unk2 = reader.u8();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.equipItemDataList = reader.array(reader.u16(), () => read11(reader), 33);
  data.unk1 = reader.u64();
  data.unk8 = reader.u64();
  data.unk9 = reader.u16();
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.lostArkString = reader.string(20);
  data.unk6 = reader.u8();
  return data;
}

// src/packets/common/Angle.ts
function read38(reader, version2 = 0) {
  return (reader.u16() * (2 * Math.PI)) / 65536;
}
function write3(writer, data = 0) {
  writer.u16(Math.round((data * 65536) / (2 * Math.PI)) % 65536);
}

// src/packets/common/Vector3F.ts
function i21(n) {
  if (n >> 20 === 1) return -(((~n >>> 0) + 1) & 2097151);
  return n;
}
function read39(reader, version2 = 0) {
  let b = reader.u64();
  return {
    x: i21(Number(b & 0x1fffffn)),
    y: i21(Number((b >> 21n) & 0x1fffffn)),
    z: i21(Number((b >> 42n) & 0x1fffffn)),
  };
}
function write4(writer, data = { x: 0, y: 0, z: 0 }) {
  writer.u64(
    BigInt((Math.round(data.x ?? 0) >>> 0) & 2097151) |
      (BigInt((Math.round(data.y ?? 0) >>> 0) & 2097151) << 21n) |
      (BigInt((Math.round(data.z ?? 0) >>> 0) & 2097151) << 42n)
  );
}

// src/packets/generated/structures/NpcData.ts
function read40(reader) {
  const data = {};
  if (reader.bool()) data.unk8_0 = reader.u8();
  data.unk20 = reader.u8();
  if (reader.bool()) data.unk29_0 = reader.u16();
  data.position = read39(reader);
  if (reader.bool()) data.unk15_0 = reader.u8();
  if (reader.bool()) data.unk10_0 = reader.u8();
  if (reader.bool()) data.unk27_0 = reader.u32();
  data.directionYaw = read38(reader);
  if (reader.bool()) data.unk3_0 = reader.u8();
  if (reader.bool()) data.unk33_0 = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => read19(reader), 5);
  data.objectId = reader.u64();
  data.unk4 = reader.u8();
  if (reader.bool()) data.unk42_0 = reader.u8();
  data.unk22 = reader.u8();
  data.unk21 = reader.u8();
  data.typeId = reader.u32();
  if (reader.bool()) data.transitIndex = reader.u32();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.unk19_0 = reader.u32();
  if (reader.bool()) data.struct_752 = read37(reader);
  data.unk36 = reader.u8();
  if (reader.bool()) data.unk45_0 = reader.u64();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const F = {};
      F.value = read18(reader);
      F.statType = reader.u8();
      return F;
    },
    153
  );
  data.unk37 = reader.u8();
  if (reader.bool()) {
    data.struct_50 = reader.array(
      reader.u16(),
      () => {
        const E = {};
        E.unk1_0_1 = read18(reader);
        E.unk1_0_2 = read18(reader);
        E.unk1_0_0 = reader.u8();
        E.unk1_0_3 = read18(reader);
        return E;
      },
      16
    );
  }
  if (reader.bool()) data.struct_343 = reader.bytes(reader.u16(), 11, 9);
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.unk31_0 = reader.u32();
  if (reader.bool()) data.unk47_0 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read17(reader), 80);
  if (reader.bool()) data.unk35_0 = reader.u32();
  data.level = reader.u16();
  if (reader.bool()) data.struct_275 = reader.bytes(reader.u16(), 12, 12);
  return data;
}

// src/packets/generated/definitions/PKTNewNpc.ts
function read41(buf) {
  const reader = new Read(buf);
  const data = {};
  data.npcStruct = read40(reader);
  if (reader.bool()) data.unk2_0 = reader.u8();
  data.unk0 = reader.u8();
  if (reader.bool()) {
    data.unk1_0 = reader.string(20);
    data.unk1_1 = reader.string(20);
  }
  if (reader.bool()) data.unk5_0 = reader.u64();
  return data;
}
var name17 = "PKTNewNpc";
var opcode17 = 58350;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
function read42(buf) {
  const reader = new Read(buf);
  const data = {};
  data.npcData = read40(reader);
  reader.skip(23);
  data.ownerId = reader.u64();
  reader.skip(12);
  data.publishReason = reader.u8();
  return data;
}
var name18 = "PKTNewNpcSummon";
var opcode18 = 14022;

// src/packets/generated/structures/PCStruct.ts
function read43(reader) {
  const data = {};
  data.heading = read38(reader);
  data.equipItemDataList = reader.array(reader.u16(), () => read11(reader), 33);
  data.secondHonorTitleId = reader.u16();
  data.unk41 = reader.u32();
  data.level = reader.u16();
  data.characterId = reader.u64();
  data.unk0_m = reader.bytes(5);
  data.worldId = reader.u8();
  data.petId = reader.u32();
  data.unk5_m = reader.u32();
  data.guildName = reader.string(20);
  data.rvRLevel = reader.u16();
  data.guildId = reader.u64();
  data.unk32_m = reader.u8();
  data.classId = reader.u16();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => read19(reader), 5);
  data.unk25_m = reader.u8();
  data.unk17_m = reader.u8();
  data.avatarHide = reader.u8();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.unk29_m = reader.u8();
  data.avgItemLevel = reader.f32();
  data.addonFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 200);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const P = {};
      P.value = read18(reader);
      P.statType = reader.u8();
      return P;
    },
    153
  );
  data.identityData = reader.bytes(25);
  data.unk45_m = reader.u32();
  data.unk46 = reader.u32();
  data.position = read39(reader);
  data.unk1_m = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read17(reader), 80);
  data.name = reader.string(20);
  data.unk4_m = reader.u32();
  data.unk0 = reader.u64();
  data.firstHonorTitleId = reader.u16();
  data.maxItemLevel = reader.f32();
  data.playerId = reader.u64();
  data.unk23_m = reader.u8();
  data.unk44 = reader.u8();
  data.unk32 = reader.u8();
  data.unk42 = reader.u8();
  data.unk15 = reader.u64();
  data.unk21 = reader.u32();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const M = {};
      M.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      M.skillId = reader.u32();
      return M;
    },
    200
  );
  data.unk2_m = reader.u8();
  data.unk7_m = reader.u32();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => read11(reader), 9);
  return data;
}

// src/packets/generated/structures/TrackMoveInfo.ts
function read44(reader) {
  const data = {};
  if (reader.bool()) data.unk4_0 = reader.bytes(12);
  data.unk0 = reader.u32();
  data.unk1 = reader.bytes(12);
  data.unk2 = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTNewPC.ts
function read45(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0_m = reader.u8();
  if (reader.bool()) {
    data.struct_63 = reader.array(
      reader.u16(),
      () => {
        const R = {};
        R.itemTint = reader.bytes(reader.u16(), 5, 14);
        R.unk1_0_2 = reader.u64();
        R.unk1_0_0 = reader.u32();
        return R;
      },
      5
    );
  }
  if (reader.bool()) data.unk5_0_m = reader.bytes(20);
  if (reader.bool()) data.unk4_0_m = reader.bytes(12);
  if (reader.bool()) data.unk3_0_m = reader.u32();
  data.pcStruct = read43(reader);
  if (reader.bool()) {
    data.unk1_0 = reader.u64();
    data.unk1_2 = reader.u32();
    data.itemTint = reader.bytes(reader.u16(), 5, 14);
  }
  data.unk2_m = reader.u8();
  if (reader.bool()) data.trackMoveInfo = read44(reader);
  return data;
}
var name19 = "PKTNewPC";
var opcode19 = 30338;

// src/packets/common/TripodLevel.ts
function read46(reader, version2 = 0) {
  return {
    first: reader.u16(),
    second: reader.u16(),
    third: reader.u16(),
  };
}
function write5(writer, data) {
  writer.u16(data.first);
  writer.u16(data.second);
  writer.u16(data.third);
}

// src/packets/common/TripodIndex.ts
function read47(reader, version2 = 0) {
  return {
    first: reader.u8(),
    second: reader.u8(),
    third: reader.u8(),
  };
}
function write6(writer, data) {
  writer.u8(data.first);
  writer.u8(data.second);
  writer.u8(data.third);
}

// src/packets/generated/structures/ProjectileInfo.ts
function read48(reader) {
  const data = {};
  data.tripodLevel = read46(reader);
  data.tripodIndex = read47(reader);
  data.unk15 = reader.u64();
  data.targetObjectId = reader.u64();
  data.unk0 = reader.u32();
  data.skillId = reader.u32();
  data.unk17 = reader.u64();
  if (reader.bool()) data.unk21_0 = reader.u64();
  if (reader.bool()) data.unk12_0 = reader.u32();
  data.skillLevel = reader.u8();
  data.chainSkillEffect = reader.u32();
  data.unk7 = reader.u8();
  data.projectileId = reader.u64();
  data.unk9 = reader.u16();
  if (reader.bool()) data.struct_343 = reader.bytes(reader.u16(), 11, 9);
  data.unk8 = reader.u8();
  data.unk18 = reader.u32();
  data.skillEffect = reader.u32();
  data.unk23 = reader.u32();
  data.ownerId = reader.u64();
  data.unk14 = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTNewProjectile.ts
function read49(buf) {
  const reader = new Read(buf);
  const data = {};
  data.projectileInfo = read48(reader);
  return data;
}
var name20 = "PKTNewProjectile";
var opcode20 = 39562;

// src/packets/generated/structures/TrapData.ts
function read50(reader) {
  const data = {};
  data.unk9 = reader.u16();
  data.ownerId = reader.u64();
  data.unk5 = reader.u32();
  data.position = read39(reader);
  data.unk1 = reader.u8();
  data.unk6 = reader.u8();
  if (reader.bool()) data.struct_343 = reader.bytes(reader.u16(), 11, 9);
  data.objectId = reader.u64();
  data.unk8 = reader.u8();
  data.skillEffect = reader.u32();
  data.skillId = reader.u32();
  data.unk4 = reader.u32();
  data.unk11 = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTNewTrap.ts
function read51(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u8();
  data.trapData = read50(reader);
  data.unk2 = reader.u8();
  return data;
}
var name21 = "PKTNewTrap";
var opcode21 = 53484;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
function read52(buf) {
  const reader = new Read(buf);
  const data = {};
  data.enable = reader.bool();
  data.paralyzationPoint = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  reader.skip(2);
  data.noHitCheckTime = reader.u32();
  data.hitCheckTime = reader.u32();
  data.decreasePoint = reader.u32();
  reader.skip(1);
  data.objectId = reader.u64();
  return data;
}
var name22 = "PKTParalyzationStateNotify";
var opcode22 = 18911;

// src/packets/generated/structures/PartyMemberData.ts
function read53(reader) {
  const data = {};
  data.maxHp = read18(reader);
  data.unk8 = reader.u8();
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.transitIndex = reader.u32();
  data.partyMemberNumber = reader.u8();
  data.classId = reader.u16();
  data.gearLevel = reader.f32();
  data.unk15 = reader.u8();
  data.auths = reader.u8();
  data.unk19 = reader.u16();
  data.zoneId = reader.u32();
  data.characterId = reader.u64();
  data.curHp = read18(reader);
  data.name = reader.string(20);
  data.zoneInstId = reader.u64();
  data.position = read39(reader);
  data.characterLevel = reader.u16();
  data.unk17 = reader.u8();
  data.worldId = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTPartyInfo.ts
function read54(buf) {
  const reader = new Read(buf);
  const data = {};
  data.partyLootType = reader.u8();
  data.lootGrade = reader.u32();
  data.memberDatas = reader.array(reader.u16(), () => read53(reader), 40);
  data.partyInstanceId = reader.u32();
  data.raidInstanceId = reader.u32();
  data.partyType = reader.u8();
  return data;
}
var name23 = "PKTPartyInfo";
var opcode23 = 28486;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
function read55(buf) {
  const reader = new Read(buf);
  const data = {};
  data.name = reader.string(20);
  data.partyLeaveType = reader.u8();
  data.partyInstanceId = reader.u32();
  return data;
}
var name24 = "PKTPartyLeaveResult";
var opcode24 = 31653;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
function read56(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.unk0_m = reader.u8();
  data.objectId = reader.u64();
  return data;
}
var name25 = "PKTPartyPassiveStatusEffectAddNotify";
var opcode25 = 27053;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
function read57(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.objectId = reader.u64();
  return data;
}
var name26 = "PKTPartyPassiveStatusEffectRemoveNotify";
var opcode26 = 56809;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
function read58(buf) {
  const reader = new Read(buf);
  const data = {};
  data.characterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read17(reader), 80);
  data.playerIdOnRefresh = reader.u64();
  data.unk0 = reader.u64();
  data.unk4 = reader.u8();
  return data;
}
var name27 = "PKTPartyStatusEffectAddNotify";
var opcode27 = 57309;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
function read59(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk1 = reader.u64();
  data.characterId = reader.u64();
  data.reason = reader.u8();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  return data;
}
var name28 = "PKTPartyStatusEffectRemoveNotify";
var opcode28 = 40739;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
function read60(buf) {
  const reader = new Read(buf);
  const data = {};
  data.partyInstanceId = reader.u32();
  reader.skip(17);
  data.raidInstanceId = reader.u32();
  reader.skip(9);
  data.characterId = reader.u64();
  reader.skip(1);
  return data;
}
var name29 = "PKTPartyStatusEffectResultNotify";
var opcode29 = 181;

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
function read61(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name30 = "PKTPassiveStatusEffectAddNotify";
var opcode30 = 16509;

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
function read62(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name31 = "PKTPassiveStatusEffectRemoveNotify";
var opcode31 = 27563;

// src/packets/generated/definitions/PKTRaidBegin.ts
function read63(buf) {
  const reader = new Read(buf);
  const data = {};
  data.endTick = reader.u64();
  data.unk1_m = reader.bool();
  data.startTick = reader.u64();
  data.unk4_m = reader.u64();
  data.bossKillDataList = reader.array(reader.u16(), () => read28(reader), 3);
  data.raidId = reader.u32();
  data.unk5_m = reader.u64();
  data.unk11_m = reader.bool();
  data.raidResult = reader.u8();
  data.unk0_m = reader.bool();
  data.braveHeartCount = reader.u8();
  data.totalTime = reader.u64();
  data.unk6_m = reader.u64();
  data.initBraveHeartCount = reader.u8();
  return data;
}
var name32 = "PKTRaidBegin";
var opcode32 = 24124;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
function read64(buf) {
  const reader = new Read(buf);
  const data = {};
  data.typeId = reader.u32();
  reader.skip(1);
  return data;
}
var name33 = "PKTRaidBossKillNotify";
var opcode33 = 59231;

// src/packets/generated/definitions/PKTRaidResult.ts
function read65(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u8();
  data.unk6 = reader.u8();
  data.unk1 = reader.u64();
  data.unk2 = reader.u64();
  data.unk3 = reader.u64();
  data.struct_54 = reader.array(
    reader.u16(),
    () => {
      const _ = {};
      _.unk1_0_1 = read18(reader);
      _.struct_540 = reader.bytes(reader.u16(), 3);
      _.unk1_0_3 = read18(reader);
      _.unk1_0_2 = reader.u32();
      return _;
    },
    3
  );
  data.raidResult = reader.u8();
  data.unk5 = reader.u64();
  return data;
}
var name34 = "PKTRaidResult";
var opcode34 = 859;

// src/packets/generated/structures/UnpublishObject.ts
function read66(reader) {
  const data = {};
  data.objectId = reader.u64();
  data.unpublishReason = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTRemoveObject.ts
function read67(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read66(reader), 200);
  return data;
}
var name35 = "PKTRemoveObject";
var opcode35 = 25208;

// src/packets/generated/definitions/PKTSkillCancelNotify.ts
function read68(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.skillId = reader.u32();
  data.cancelReason = reader.u8();
  data.newPosition = read39(reader);
  data.newDirectionYaw = read38(reader);
  data.caster = reader.u64();
  return data;
}
var name36 = "PKTSkillCancelNotify";
var opcode36 = 47117;

// src/packets/generated/definitions/PKTSkillCastNotify.ts
function read69(buf) {
  const reader = new Read(buf);
  const data = {};
  data.skillLevel = reader.u8();
  data.caster = reader.u64();
  data.skillId = reader.u32();
  reader.skip(1);
  return data;
}
var name37 = "PKTSkillCastNotify";
var opcode37 = 48813;

// src/packets/common/SkillMoveOptionData.ts
function read70(reader, version2 = 0) {
  const data = {};
  const flag = reader.u8();
  if (flag & 1) data.moveTime = reader.u32();
  if (flag & 2) data.standUpTime = reader.u32();
  if (flag & 4) data.downTime = reader.u32();
  if (flag & 8) data.freezeTime = reader.u32();
  if (flag & 16) data.moveHeight = reader.u32();
  if (flag & 32) data.farmostDist = reader.u32();
  if (flag & 64) data.flag40 = reader.bytes(reader.u16(), 6);
  return data;
}
function write7(writer, data) {
  const flag =
    (data.moveTime === void 0 ? 0 : 1 << 0) |
    (data.standUpTime === void 0 ? 0 : 1 << 1) |
    (data.downTime === void 0 ? 0 : 1 << 2) |
    (data.freezeTime === void 0 ? 0 : 1 << 3) |
    (data.moveHeight === void 0 ? 0 : 1 << 4) |
    (data.farmostDist === void 0 ? 0 : 1 << 5) |
    (data.flag40 === void 0 ? 0 : 1 << 6);
  writer.u8(flag);
  if (flag & 1) writer.u32(data.moveTime);
  if (flag & 2) writer.u32(data.standUpTime);
  if (flag & 4) writer.u32(data.downTime);
  if (flag & 8) writer.u32(data.freezeTime);
  if (flag & 16) writer.u32(data.moveHeight);
  if (flag & 32) writer.u32(data.farmostDist);
  if (flag & 64) writer.bytes(data.flag40, { maxLen: 6, lenType: "u16" });
}

// src/packets/generated/structures/SkillDamageEvent.ts
function read71(reader) {
  const data = {};
  data.curHp = read18(reader);
  data.modifier = reader.u8();
  data.damage = read18(reader);
  data.unk3_m = reader.u16();
  if (reader.bool()) data.damageAttr = reader.u8();
  data.targetId = reader.u64();
  data.damageType = reader.u8();
  data.maxHp = read18(reader);
  return data;
}

// src/packets/generated/structures/SkillDamageAbnormalMoveEvent.ts
function read72(reader) {
  const data = {};
  data.unk2_m = reader.u64();
  data.unk1_m = reader.u8();
  data.unk3_m = reader.u16();
  data.skillMoveOptionData = read70(reader);
  data.skillDamageEvent = read71(reader);
  data.position = read39(reader);
  data.unk4_m = reader.u16();
  data.unk8_m = reader.u16();
  data.destination = read39(reader);
  return data;
}

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
function read73(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk2_m = reader.u32();
  data.skillId = reader.u32();
  data.unk1_m = reader.u8();
  data.skillEffectId = reader.u32();
  data.skillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => read72(reader), 50);
  data.sourceId = reader.u64();
  return data;
}
var name38 = "PKTSkillDamageAbnormalMoveNotify";
var opcode38 = 22184;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
function read74(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool()) data.unk5_0 = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => read71(reader), 50);
  if (reader.bool()) data.skillEffectId = reader.u32();
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.skillLevel = reader.u8();
  return data;
}
var name39 = "PKTSkillDamageNotify";
var opcode39 = 42055;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
function read75(buf) {
  const reader = new Read(buf);
  const data = {};
  data.skillId = reader.u32();
  reader.skip(25);
  data.stage = reader.u8();
  data.sourceId = reader.u64();
  reader.skip(14);
  return data;
}
var name40 = "PKTSkillStageNotify";
var opcode40 = 8421;

// src/packets/common/SkillOptionData.ts
function read76(reader, version2 = 0) {
  const data = {};
  const flag = reader.u8();
  if (flag & 1) data.layerIndex = reader.u8();
  if (flag & 2) data.startStageIndex = reader.u8();
  if (flag & 4) data.transitIndex = reader.u32();
  if (flag & 8) data.stageStartTime = reader.u32();
  if (flag & 16) data.farmostDistance = reader.u32();
  if (flag & 32) data.tripodIndex = read47(reader);
  if (flag & 64) data.tripodLevel = read46(reader);
  return data;
}
function write8(writer, data) {
  const flag =
    (data.layerIndex === void 0 ? 0 : 1 << 0) |
    (data.startStageIndex === void 0 ? 0 : 1 << 1) |
    (data.transitIndex === void 0 ? 0 : 1 << 2) |
    (data.stageStartTime === void 0 ? 0 : 1 << 3) |
    (data.farmostDistance === void 0 ? 0 : 1 << 4) |
    (data.tripodIndex === void 0 ? 0 : 1 << 5) |
    (data.tripodLevel === void 0 ? 0 : 1 << 6);
  writer.u8(flag);
  if (flag & 1) writer.u8(data.layerIndex);
  if (flag & 2) writer.u8(data.startStageIndex);
  if (flag & 4) writer.u32(data.transitIndex);
  if (flag & 8) writer.u32(data.stageStartTime);
  if (flag & 16) writer.u32(data.farmostDistance);
  if (flag & 32) write6(writer, data.tripodIndex);
  if (flag & 64) write5(writer, data.tripodLevel);
}

// src/packets/generated/definitions/PKTSkillStartNotify.ts
function read77(buf) {
  const reader = new Read(buf);
  const data = {};
  data.skillOptionData = read76(reader);
  data.aimTargetPosition = read39(reader);
  if (reader.bool()) data.pitchRotation = read38(reader);
  data.skillId = reader.u32();
  if (reader.bool()) data.unk1_m = reader.u32();
  if (reader.bool()) data.aiStateId = reader.u32();
  data.sourceId = reader.u64();
  data.newDirectionYaw = read38(reader);
  data.curPosition = read39(reader);
  data.curDirectionYaw = read38(reader);
  data.newPosition = read39(reader);
  data.skillLevel = reader.u8();
  return data;
}
var name41 = "PKTSkillStartNotify";
var opcode41 = 10219;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
function read78(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0 = reader.u8();
  data.unk4 = reader.array(
    reader.u16(),
    () => {
      const c = {};
      c.value = read18(reader);
      c.statType = reader.u8();
      return c;
    },
    153
  );
  data.objectId = reader.u64();
  if (reader.bool()) data.unk2_0 = reader.u32();
  data.unk5 = reader.array(
    reader.u16(),
    () => {
      const d = {};
      d.value = read18(reader);
      d.statType = reader.u8();
      return d;
    },
    153
  );
  return data;
}
var name42 = "PKTStatChangeOriginNotify";
var opcode42 = 14924;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
function read79(buf) {
  const reader = new Read(buf);
  const data = {};
  data.new = reader.bool();
  data.unk3 = reader.u64();
  data.statusEffectData = read17(reader);
  if (reader.bool()) data.unk2_0 = reader.u64();
  data.objectId = reader.u64();
  return data;
}
var name43 = "PKTStatusEffectAddNotify";
var opcode43 = 45757;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
function read80(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.reason = reader.u8();
  data.objectId = reader.u64();
  return data;
}
var name44 = "PKTStatusEffectRemoveNotify";
var opcode44 = 7384;

// src/packets/generated/definitions/PKTStatusEffectDurationNotify.ts
function read81(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.targetId = reader.u64();
  reader.skip(2);
  data.effectInstanceId = reader.u32();
  data.expirationTick = reader.u64();
  reader.skip(1);
  return data;
}
var name45 = "PKTStatusEffectDurationNotify";
var opcode45 = 2511;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
function read82(buf) {
  const reader = new Read(buf);
  const data = {};
  data.objectId = reader.u64();
  reader.skip(1);
  data.effectInstanceId = reader.u32();
  reader.skip(1);
  data.value = reader.u32();
  reader.skip(4);
  data.characterId = reader.u64();
  reader.skip(1);
  return data;
}
var name46 = "PKTStatusEffectSyncDataNotify";
var opcode46 = 15868;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
function read83(buf) {
  const reader = new Read(buf);
  const data = {};
  data.triggerId = reader.u32();
  reader.skip(1);
  data.step = reader.u32();
  data.unk2_m = reader.bool();
  return data;
}
var name47 = "PKTTriggerBossBattleStatus";
var opcode47 = 49664;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
function read84(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unk0_m = reader.u32();
  data.triggerId = reader.u32();
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.packetResultCode = reader.u32();
  return data;
}
var name48 = "PKTTriggerFinishNotify";
var opcode48 = 18806;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
function read85(buf) {
  const reader = new Read(buf);
  const data = {};
  data.triggerId = reader.u32();
  data.triggerSignalType = reader.u32();
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.sourceId = reader.u64();
  return data;
}
var name49 = "PKTTriggerStartNotify";
var opcode49 = 4096;

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
function read86(buf) {
  const reader = new Read(buf);
  const data = {};
  data.maxHp = read18(reader);
  data.statusEffectDatas = reader.array(reader.u16(), () => read17(reader), 80);
  data.characterId = reader.u64();
  data.unk0_m = reader.u32();
  data.curHp = read18(reader);
  data.position = reader.u64();
  return data;
}
var name50 = "PKTTroopMemberUpdateMinNotify";
var opcode50 = 23734;

// src/packets/generated/definitions/PKTIdentityGaugeChangeNotify.ts
function read87(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.playerId = reader.u64();
  reader.skip(1);
  data.identityGauge1 = reader.u32();
  data.identityGauge2 = reader.u32();
  data.identityGauge3 = reader.u32();
  return data;
}
var name51 = "PKTIdentityGaugeChangeNotify";
var opcode51 = 38350;

// src/packets/generated/definitions/PKTZoneMemberLoadStatusNotify.ts
function read88(buf) {
  const reader = new Read(buf);
  const data = {};
  data.loadComplete = reader.bool();
  data.firstPCEnterTick = reader.u64();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.zoneLevel = reader.u8();
  data.zoneInstId = reader.u64();
  data.zoneId = reader.u32();
  return data;
}
var name52 = "PKTZoneMemberLoadStatusNotify";
var opcode52 = 37722;

// src/packets/generated/definitions/PKTZoneObjectUnpublishNotify.ts
function read89(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.objectId = reader.u64();
  reader.skip(1);
  return data;
}
var name53 = "PKTZoneObjectUnpublishNotify";
var opcode53 = 17030;

// src/packets/generated/structures/ZoneStatusEffectData.ts
function read90(reader) {
  const data = {};
  data.stackCount = reader.u8();
  data.target = reader.u8();
  data.id = reader.u32();
  reader.skip(4);
  data.instanceId = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTZoneStatusEffectAddNotify.ts
function read91(buf) {
  const reader = new Read(buf);
  const data = {};
  data.zoneStatusEffectDataList = reader.array(reader.u16(), () => read90(reader), 4);
  return data;
}
var name54 = "PKTZoneStatusEffectAddNotify";
var opcode54 = 17970;

// src/packets/generated/definitions/PKTZoneStatusEffectRemoveNotify.ts
function read92(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectId = reader.u32();
  reader.skip(1);
  return data;
}
var name55 = "PKTZoneStatusEffectRemoveNotify";
var opcode55 = 34753;

// src/packets/generated/definitions/PKTInstanceZoneEnteredNotify.ts
function read93(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(11);
  data.zoneId = reader.u32();
  return data;
}
var name56 = "PKTInstanceZoneEnteredNotify";
var opcode56 = 16460;

// src/packets/generated/definitions/PKTSkillCooldownNotify.ts
function read94(buf) {
  const reader = new Read(buf);
  const data = {};
  data.cd1 = reader.f32();
  if (reader.bool()) data.unk1 = reader.bytes(9);
  data.cd2 = reader.f32();
  if (reader.bool()) data.unk2 = reader.u32();
  data.skillId = reader.u32();
  data.unk0 = reader.u32();
  data.unk3 = reader.array(reader.u16(), () => reader.u32(), 300);
  return data;
}
var name57 = "PKTSkillCooldownNotify";
var opcode57 = 57389;

// src/packets/generated/definitions/PKTPCInspectResult.ts
function read95(buf) {
  const reader = new Read(buf);
  const data = {};
  data.name = reader.string(20);
  data.classId = reader.u16();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.level = reader.u16();
  data.unk6 = reader.u16();
  data.rosterLevel = reader.u16();
  data.unk14 = reader.u64();
  data.unk38 = reader.string(5);
  data.statPairList = reader.array(
    reader.u16(),
    () => {
      const m = {};
      m.statType = reader.u8();
      m.value = read18(reader);
      return m;
    },
    153
  );
  data.unk5 = reader.u8();
  data.unk7 = reader.u8();
  data.unk9 = reader.u8();
  data.unk4 = reader.u8();
  data.unk20 = reader.u64();
  data.unk23 = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => read32(reader), 33);
  data.equipLifeToolDataList = reader.array(reader.u16(), () => read32(reader), 9);
  data.gems = reader.array(reader.u16(), () => read32(reader), 11);
  data.unk18 = reader.bytes(10);
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  data.struct_115 = reader.bytes(reader.u16(), 27);
  data.struct_114 = reader.bytes(reader.u16(), 27, 4);
  data.unk10 = reader.u16();
  data.unk17 = reader.u16();
  data.unk15 = reader.u64();
  data.guildName = reader.string(20);
  data.struct_900 = reader.bytes(reader.u16(), 5, 9);
  data.gearLevel = reader.f32();
  data.unk3 = reader.f32();
  data.struct_297 = reader.bytes(reader.u16(), 32, 5);
  data.struct_389 = reader.bytes(reader.u16(), 16, 5);
  data.struct_901 = reader.bytes(reader.u16(), 152, 5);
  data.unk2 = reader.bytes(12);
  data.unk21 = reader.u16();
  data.stronghold = reader.string(22);
  data.struct_525 = reader.bytes(reader.u16(), 6, 8);
  data.unk19 = reader.u8();
  data.unk11 = reader.u8();
  data.unk37 = reader.bytes(20);
  data.unk35 = reader.bytes(20);
  data.struct_413 = reader.bytes(reader.u16(), 5, 5);
  data.unk8 = reader.u8();
  data.unk22 = reader.u16();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.struct_487 = reader.bytes(reader.u16(), 30, 7);
  data.struct_197 = reader.bytes(reader.u16(), 11, 13);
  data.unk0 = reader.u32();
  data.unk24 = reader.u16();
  data.unk33 = reader.bytes(24);
  data.unk12 = reader.u8();
  data.serverName = reader.string(256);
  data.unk1 = reader.array(reader.u16(), () => reader.u32(), 6);
  data.unk16 = reader.u8();
  data.struct_518 = reader.bytes(21);
  return data;
}
var name58 = "PKTPCInspectResult";
var opcode58 = 0;

// src/packets/generated/mapping.ts
var mapping = /* @__PURE__ */ new Map([
  [opcode, [name, read2]],
  [opcode2, [name2, read4]],
  [opcode3, [name3, read5]],
  [opcode4, [name4, read6]],
  [opcode5, [name5, read7]],
  [opcode6, [name6, read8]],
  [opcode7, [name7, read9]],
  [opcode8, [name8, read12]],
  [opcode9, [name9, read13]],
  [opcode10, [name10, read14]],
  [opcode11, [name11, read15]],
  [opcode12, [name12, read16]],
  [opcode13, [name13, read20]],
  [opcode14, [name14, read33]],
  [opcode15, [name15, read35]],
  [opcode16, [name16, read36]],
  [opcode17, [name17, read41]],
  [opcode18, [name18, read42]],
  [opcode19, [name19, read45]],
  [opcode20, [name20, read49]],
  [opcode21, [name21, read51]],
  [opcode22, [name22, read52]],
  [opcode23, [name23, read54]],
  [opcode24, [name24, read55]],
  [opcode25, [name25, read56]],
  [opcode26, [name26, read57]],
  [opcode27, [name27, read58]],
  [opcode28, [name28, read59]],
  [opcode29, [name29, read60]],
  [opcode30, [name30, read61]],
  [opcode31, [name31, read62]],
  [opcode32, [name32, read63]],
  [opcode33, [name33, read64]],
  [opcode34, [name34, read65]],
  [opcode35, [name35, read67]],
  [opcode36, [name36, read68]],
  [opcode37, [name37, read69]],
  [opcode38, [name38, read73]],
  [opcode39, [name39, read74]],
  [opcode40, [name40, read75]],
  [opcode41, [name41, read77]],
  [opcode42, [name42, read78]],
  [opcode43, [name43, read79]],
  [opcode44, [name44, read80]],
  [opcode45, [name45, read81]],
  [opcode46, [name46, read82]],
  [opcode47, [name47, read83]],
  [opcode48, [name48, read84]],
  [opcode49, [name49, read85]],
  [opcode50, [name50, read86]],
  [opcode51, [name51, read87]],
  [opcode52, [name52, read88]],
  [opcode53, [name53, read89]],
  [opcode54, [name54, read91]],
  [opcode55, [name55, read92]],
  [opcode56, [name56, read93]],
  [opcode57, [name57, read94]],
  [opcode58, [name58, read95]],
]);

// src/packets/log/codeMapping.ts
var codeMapping = /* @__PURE__ */ new Map([
  [opcode, [0 /* AbilityChangeNotify */]],
  [opcode2, [1 /* ActiveAbilityNotify */]],
  [opcode3, [2 /* AddonSkillFeatureChangeNotify */]],
  [opcode5, [4 /* BlockSkillStateNotify */]],
  [opcode6, [5 /* CounterAttackNotify */]],
  [opcode7, [6 /* DeathNotify */]],
  [opcode11, [7 /* InitAbility */]],
  [opcode12, [8 /* InitEnv */]],
  [opcode13, [9 /* InitPC */]],
  [opcode15, [10 /* InitLocal */]],
  [opcode16, [11 /* MigrationExecute */]],
  [opcode17, [12 /* NewNpc */]],
  [opcode18, [13 /* NewNpcSummon */]],
  [opcode19, [14 /* NewPC */]],
  [opcode20, [15 /* NewProjectile */]],
  [opcode22, [16 /* ParalyzationStateNotify */]],
  [opcode23, [17 /* PartyInfo */]],
  [opcode24, [18 /* PartyLeaveResult */]],
  [opcode25, [19 /* PartyPassiveStatusEffectAddNotify */]],
  [opcode26, [20 /* PartyPassiveStatusEffectRemoveNotify */]],
  [opcode27, [21 /* PartyStatusEffectAddNotify */]],
  [opcode28, [22 /* PartyStatusEffectRemoveNotify */]],
  [opcode29, [23 /* PartyStatusEffectResultNotify */]],
  [opcode30, [24 /* PassiveStatusEffectAddNotify */]],
  [opcode31, [25 /* PassiveStatusEffectRemoveNotify */]],
  [opcode33, [26 /* RaidBossKillNotify */]],
  [opcode34, [27 /* RaidResult */]],
  [opcode35, [28 /* RemoveObject */]],
  [opcode38, [29 /* SkillDamageAbnormalMoveNotify */]],
  [opcode39, [30 /* SkillDamageNotify */]],
  [opcode40, [31 /* SkillStageNotify */]],
  [opcode41, [32 /* SkillStartNotify */]],
  [opcode43, [34 /* StatusEffectAddNotify */]],
  [opcode44, [35 /* StatusEffectRemoveNotify */]],
  [opcode45, [36 /* StatusEffectDurationNotify */]],
  [opcode46, [37 /* StatusEffectSyncDataNotify */]],
  [opcode47, [38 /* TriggerBossBattleStatus */]],
  [opcode48, [39 /* TriggerFinishNotify */]],
  [opcode49, [40 /* TriggerStartNotify */]],
  [opcode50, [41 /* TroopMemberUpdateMinNotify */]],
  [opcode51, [42 /* IdentityGaugeChangeNotify */]],
  [opcode53, [43 /* ZoneObjectUnpublishNotify */]],
  [opcode54, [44 /* ZoneStatusEffectAddNotify */]],
  [opcode55, [45 /* ZoneStatusEffectRemoveNotify */]],
  [opcode37, [46 /* SkillCastNotify */]],
  [opcode10, [47 /* IdentityStanceChangeNotify */]],
  [opcode8, [48 /* EquipChangeNotify */]],
  [opcode9, [49 /* EquipLifeToolChangeNotify */]],
  [opcode14, [50 /* InitItem */]],
  [opcode32, [52 /* RaidBegin */]],
  [opcode52, [51 /* ZoneMemberLoadStatusNotify */]],
  [opcode21, [53 /* NewTrap */]],
  [opcode36, [54 /* SkillCancelNotify */]],
  [opcode56, [55 /* InstanceZoneEnteredNotify */]],
  [opcode57, [56 /* SkillCooldownNotify */]],
  [opcode58, [57 /* PCInspectResult */]],
]);

// src/packets/log/structures/AbilityData.ts
function read96(reader, version2) {
  const data = {};
  data.points = reader.u16();
  data.id = reader.u32();
  data.level = reader.u8();
  return data;
}
function write9(writer, data) {
  writer.u16(data.points);
  writer.u32(data.id);
  writer.u8(data.level);
}

// src/packets/log/definitions/AbilityChangeNotify.ts
function read97(reader, version2) {
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read96(reader, version2), 100);
  return data;
}
function write10(writer, data) {
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write9(writer, obj);
  });
}
var name59 = "AbilityChangeNotify";

// src/packets/log/structures/ActiveAbility.ts
function read98(reader, version2) {
  const data = {};
  data.featureType = reader.u16();
  data.level = reader.u32();
  return data;
}
function write11(writer, data) {
  writer.u16(data.featureType);
  writer.u32(data.level);
}

// src/packets/log/definitions/ActiveAbilityNotify.ts
function read99(reader, version2) {
  const data = {};
  data.activeAbilityList = reader.array(reader.u16(), () => read98(reader, version2), 60);
  data.objectId = reader.u64();
  return data;
}
function write12(writer, data) {
  writer.array(data.activeAbilityList, { maxLen: 60, lenType: "u16" }, (obj) => {
    write11(writer, obj);
  });
  writer.u64(data.objectId);
}
var name60 = "ActiveAbilityNotify";

// src/packets/log/definitions/AddonSkillFeatureChangeNotify.ts
function read100(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const c = {};
      c.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      c.skillId = reader.u32();
      return c;
    },
    200
  );
  return data;
}
function write13(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.addonSkillFeatureList, { maxLen: 200, lenType: "u16" }, (obj) => {
    writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2) => {
      writer.u32(obj2);
    });
    writer.u32(obj.skillId);
  });
}
var name61 = "AddonSkillFeatureChangeNotify";

// src/packets/log/definitions/BlockSkillStateNotify.ts
function read101(reader, version2) {
  const data = {};
  data.paralyzationMaxPoint = reader.u32();
  data.type = reader.u8();
  data.objectId = reader.u64();
  data.paralyzationPoint = reader.u32();
  return data;
}
function write14(writer, data) {
  writer.u32(data.paralyzationMaxPoint);
  writer.u8(data.type);
  writer.u64(data.objectId);
  writer.u32(data.paralyzationPoint);
}
var name62 = "BlockSkillStateNotify";

// src/packets/log/definitions/CounterAttackNotify.ts
function read102(reader, version2) {
  const data = {};
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  data.type = reader.u32();
  return data;
}
function write15(writer, data) {
  writer.u64(data.sourceId);
  writer.u64(data.targetId);
  writer.u32(data.type);
}
var name63 = "CounterAttackNotify";

// src/packets/log/definitions/DeathNotify.ts
function read103(reader, version2) {
  const data = {};
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  if (version2 >= 4) {
    data.effectId = reader.u32();
    data.directionYaw = reader.u16();
    data.deathType = reader.u8();
    data.durabilityDecrement = reader.u8();
    data.abnormalStatusType = reader.u8();
    data.damageAttr = reader.u8();
    data.unk0_m = reader.u64();
    data.unk2_m = reader.u32();
  } else {
    data.effectId = 0;
    data.directionYaw = 0;
    data.deathType = 0;
    data.durabilityDecrement = 0;
    data.abnormalStatusType = 0;
    data.damageAttr = 0;
    data.unk0_m = 0n;
    data.unk2_m = 0;
  }
  return data;
}
function write16(writer, data) {
  writer.u64(data.sourceId);
  writer.u64(data.targetId);
  writer.u32(data.effectId);
  writer.u16(data.directionYaw);
  writer.u8(data.deathType ?? 0);
  writer.u8(data.durabilityDecrement);
  writer.u8(data.abnormalStatusType ?? 0);
  writer.u8(data.damageAttr ?? 0);
  writer.u64(data.unk0_m);
  writer.u32(data.unk2_m);
}
var name64 = "DeathNotify";

// src/packets/log/definitions/InitAbility.ts
function read104(reader, version2) {
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read96(reader, version2), 100);
  return data;
}
function write17(writer, data) {
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write9(writer, obj);
  });
}
var name65 = "InitAbility";

// src/packets/log/definitions/InitEnv.ts
function read105(reader, version2) {
  const data = {};
  data.playerId = reader.u64();
  return data;
}
function write18(writer, data) {
  writer.u64(data.playerId);
}
var name66 = "InitEnv";

// src/packets/log/structures/StatusEffectData.ts
function read106(reader, version2) {
  const data = {};
  data.skillLevel = reader.u8();
  data.occurTime = read10(reader, version2);
  data.statusEffectId = reader.u32();
  data.sourceId = reader.u64();
  data.totalTime = reader.f32();
  data.endTick = reader.u64();
  if (reader.bool()) data.value = reader.bytes(16);
  data.effectInstanceId = reader.u32();
  if (version2 >= 1) {
    data.stackCount = reader.u8();
  } else {
    data.stackCount = 1;
  }
  return data;
}
function write19(writer, data) {
  writer.u8(data.skillLevel);
  write(writer, data.occurTime);
  writer.u32(data.statusEffectId);
  writer.u64(data.sourceId);
  writer.f32(data.totalTime);
  writer.u64(data.endTick);
  if (writer.bool(data.value !== void 0)) {
    writer.bytes(data.value, { length: 16 });
  }
  writer.u32(data.effectInstanceId);
  writer.u8(data.stackCount);
}

// src/packets/log/definitions/InitPC.ts
function read107(reader, version2) {
  const data = {};
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const h = {};
      h.StatType = reader.u8();
      h.Value = read18(reader, version2);
      return h;
    },
    152
  );
  data.name = reader.string(20);
  data.level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => read106(reader, version2), 80);
  data.characterId = reader.u64();
  data.gearLevel = reader.f32();
  data.playerId = reader.u64();
  data.classId = reader.u16();
  return data;
}
function write20(writer, data) {
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write2(writer, obj.value);
  });
  writer.string(data.name, 20);
  writer.u16(data.level);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write19(writer, obj);
  });
  writer.u64(data.characterId);
  writer.f32(data.gearLevel);
  writer.u64(data.playerId);
  writer.u16(data.classId);
}
var name67 = "InitPC";

// src/packets/log/definitions/InitLocal.ts
function read108(reader, version2) {
  const data = {};
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const l = {};
      l.statType = reader.u8();
      l.value = read18(reader, version2);
      return l;
    },
    152
  );
  data.statusEffectDatas = reader.array(reader.u16(), () => read106(reader, version2), 80);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const n = {};
      n.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      n.skillId = reader.u32();
      return n;
    },
    200
  );
  data.abilityDataList = reader.array(reader.u16(), () => read96(reader, version2), 100);
  return data;
}
function write21(writer, data) {
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write2(writer, obj.value);
  });
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write19(writer, obj);
  });
  writer.array(data.addonSkillFeatureList, { maxLen: 200, lenType: "u16" }, (obj) => {
    writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2) => {
      writer.u32(obj2);
    });
    writer.u32(obj.skillId);
  });
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write9(writer, obj);
  });
}
var name68 = "InitLocal";

// src/packets/log/definitions/MigrationExecute.ts
function read109(reader, version2) {
  const data = {};
  data.account_CharacterId1 = reader.u64();
  data.serverAddr = reader.string(256);
  data.account_CharacterId2 = reader.u64();
  return data;
}
function write22(writer, data) {
  writer.u64(data.account_CharacterId1);
  writer.string(data.serverAddr, 256);
  writer.u64(data.account_CharacterId2);
}
var name69 = "MigrationExecute";

// src/packets/log/structures/NpcData.ts
function read110(reader, version2) {
  const data = {};
  data.spawnIndex = reader.u32();
  data.objectId = reader.u64();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.position = read39(reader, version2);
  data.statusEffectDatas = reader.array(reader.u16(), () => read106(reader, version2), 80);
  data.directionYaw = read38(reader, version2);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const x = {};
      x.statType = reader.u8();
      x.value = read18(reader, version2);
      return x;
    },
    152
  );
  data.typeId = reader.u32();
  if (version2 >= 1) {
    data.level = reader.u16();
    if (reader.bool()) data.balanceLevel = reader.u16();
  } else {
    data.level = 0;
  }
  return data;
}
function write23(writer, data) {
  writer.u32(data.spawnIndex);
  writer.u64(data.objectId);
  if (writer.bool(data.transitIndex !== void 0)) writer.u32(data.transitIndex);
  write4(writer, data.position);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write19(writer, obj);
  });
  write3(writer, data.directionYaw);
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write2(writer, obj.value);
  });
  writer.u32(data.typeId);
  writer.u16(data.level);
  if (writer.bool(data.balanceLevel !== void 0)) writer.u16(data.balanceLevel);
}

// src/packets/log/definitions/NewNpc.ts
function read111(reader, version2) {
  const data = {};
  data.npcStruct = read110(reader, version2);
  return data;
}
function write24(writer, data) {
  write23(writer, data.npcStruct);
}
var name70 = "NewNpc";

// src/packets/log/definitions/NewNpcSummon.ts
function read112(reader, version2) {
  const data = {};
  data.publishReason = reader.u8();
  data.ownerId = reader.u64();
  data.npcData = read110(reader, version2);
  return data;
}
function write25(writer, data) {
  writer.u8(data.publishReason);
  writer.u64(data.ownerId);
  write23(writer, data.npcData);
}
var name71 = "NewNpcSummon";

// src/packets/log/structures/EquipItemData.ts
function read113(reader, version2) {
  const data = {};
  data.slot = reader.u16();
  data.level = reader.u16();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.expireTime = read10(reader);
  data.id = reader.u32();
  return data;
}
function write26(writer, data) {
  writer.u16(data.slot);
  writer.u16(data.level);
  writer.bytes(data.itemTint, { maxLen: 5, lenType: "u16", multiplier: 14 });
  write(writer, data.expireTime);
  writer.u32(data.id);
}

// src/packets/log/structures/PCStruct.ts
function read114(reader, version2) {
  const data = {};
  data.maxItemLevel = reader.f32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const z = {};
      z.statType = reader.u8();
      z.value = read18(reader, version2);
      return z;
    },
    152
  );
  data.name = reader.string(20);
  data.heading = read38(reader, version2);
  data.characterId = reader.u64();
  data.playerId = reader.u64();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const C = {};
      C.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      C.skillId = reader.u32();
      return C;
    },
    200
  );
  data.classId = reader.u16();
  data.level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => read106(reader, version2), 80);
  if (version2 >= 1) {
    data.avgItemLevel = reader.f32();
    data.position = read39(reader);
    data.equipItemDataList = reader.array(reader.u16(), () => read113(reader, version2), 32);
    data.equipLifeToolDataList = reader.array(reader.u16(), () => read113(reader, version2), 9);
    data.guildName = reader.string(20);
    if (version2 >= 2) {
      data.guildId = reader.u64();
    } else {
      data.guildId = BigInt(reader.u32());
    }
  } else {
    data.avgItemLevel = data.maxItemLevel;
    data.position = { x: 0, y: 0, z: 0 };
    data.equipItemDataList = [];
    data.equipLifeToolDataList = [];
    data.guildName = "";
    data.guildId = 0n;
  }
  return data;
}
function write27(writer, data) {
  console.log("Writing Pc Struct***********");
  writer.f32(data.maxItemLevel);
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write2(writer, obj.value);
  });
  writer.string(data.name, 20);
  write3(writer, data.heading);
  writer.u64(data.characterId);
  writer.u64(data.playerId);
  writer.array(data.addonSkillFeatureList, { maxLen: 200, lenType: "u16" }, (obj) => {
    writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2) => {
      writer.u32(obj2);
    });
    writer.u32(obj.skillId);
  });
  writer.u16(data.classId);
  writer.u16(data.level);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write19(writer, obj);
  });
  writer.f32(data.avgItemLevel);
  write4(writer, data.position);
  writer.array(data.equipItemDataList, { maxLen: 32, lenType: "u16" }, (obj) => {
    write26(writer, obj);
  });
  writer.array(data.equipLifeToolDataList, { maxLen: 9, lenType: "u16" }, (obj) => {
    write26(writer, obj);
  });
  writer.string(data.guildName, 20);
  writer.u64(data.guildId);
}

// src/packets/log/definitions/NewPC.ts
function read115(reader, version2) {
  const data = {};
  data.pcStruct = read114(reader, version2);
  return data;
}
function write28(writer, data) {
  write27(writer, data.pcStruct);
}
var name72 = "NewPC";

// src/packets/log/structures/ProjectileInfo.ts
function read116(reader, version2) {
  const data = {};
  data.tripodIndex = read47(reader, version2);
  data.chainSkillEffect = reader.u32();
  data.skillEffect = reader.u32();
  data.skillId = reader.u32();
  data.targetObjectId = reader.u64();
  data.ownerId = reader.u64();
  data.skillLevel = reader.u8();
  data.projectileId = reader.u64();
  data.tripodLevel = read46(reader, version2);
  return data;
}
function write29(writer, data) {
  write6(writer, data.tripodIndex);
  writer.u32(data.chainSkillEffect);
  writer.u32(data.skillEffect);
  writer.u32(data.skillId);
  writer.u64(data.targetObjectId);
  writer.u64(data.ownerId);
  writer.u8(data.skillLevel);
  writer.u64(data.projectileId);
  write5(writer, data.tripodLevel);
}

// src/packets/log/definitions/NewProjectile.ts
function read117(reader, version2) {
  const data = {};
  data.projectileInfo = read116(reader, version2);
  return data;
}
function write30(writer, data) {
  write29(writer, data.projectileInfo);
}
var name73 = "NewProjectile";

// src/packets/log/definitions/ParalyzationStateNotify.ts
function read118(reader, version2) {
  const data = {};
  data.enable = reader.bool();
  data.paralyzationPoint = reader.u32();
  data.decreasePoint = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  data.noHitCheckTime = reader.u32();
  data.hitCheckTime = reader.u32();
  data.objectId = reader.u64();
  return data;
}
function write31(writer, data) {
  writer.bool(data.enable);
  writer.u32(data.paralyzationPoint);
  writer.u32(data.decreasePoint);
  writer.u32(data.paralyzationMaxPoint);
  writer.u32(data.noHitCheckTime);
  writer.u32(data.hitCheckTime);
  writer.u64(data.objectId);
}
var name74 = "ParalyzationStateNotify";

// src/packets/log/structures/PartyMemberData.ts
function read119(reader, version2) {
  const data = {};
  data.maxHp = read18(reader, version2);
  data.characterId = reader.u64();
  data.position = read39(reader, version2);
  data.transitIndex = reader.u32();
  data.curHp = read18(reader, version2);
  data.characterLevel = reader.u16();
  data.gearLevel = reader.f32();
  data.zoneId = reader.u32();
  data.partyMemberNumber = reader.u8();
  data.name = reader.string(20);
  data.zoneInstId = reader.u64();
  data.worldId = reader.u8();
  data.classId = reader.u16();
  data.auths = reader.u8();
  return data;
}
function write32(writer, data) {
  write2(writer, data.maxHp);
  writer.u64(data.characterId);
  write4(writer, data.position);
  writer.u32(data.transitIndex);
  write2(writer, data.curHp);
  writer.u16(data.characterLevel);
  writer.f32(data.gearLevel);
  writer.u32(data.zoneId);
  writer.u8(data.partyMemberNumber);
  writer.string(data.name, 20);
  writer.u64(data.zoneInstId);
  writer.u8(data.worldId);
  writer.u16(data.classId);
  writer.u8(data.auths);
}

// src/packets/log/definitions/PartyInfo.ts
function read120(reader, version2) {
  const data = {};
  data.raidInstanceId = reader.u32();
  data.lootGrade = reader.u32();
  data.partyType = reader.u8();
  data.partyInstanceId = reader.u32();
  data.partyLootType = reader.u8();
  data.memberDatas = reader.array(reader.u16(), () => read119(reader, version2), 40);
  return data;
}
function write33(writer, data) {
  writer.u32(data.raidInstanceId);
  writer.u32(data.lootGrade);
  writer.u8(data.partyType);
  writer.u32(data.partyInstanceId);
  writer.u8(data.partyLootType);
  writer.array(data.memberDatas, { maxLen: 40, lenType: "u16" }, (obj) => {
    write32(writer, obj);
  });
}
var name75 = "PartyInfo";

// src/packets/log/definitions/PartyLeaveResult.ts
function read121(reader, version2) {
  const data = {};
  data.partyLeaveType = reader.u8();
  data.partyInstanceId = reader.u32();
  data.name = reader.string(20);
  return data;
}
function write34(writer, data) {
  writer.u8(data.partyLeaveType);
  writer.u32(data.partyInstanceId);
  writer.string(data.name, 20);
}
var name76 = "PartyLeaveResult";

// src/packets/log/definitions/PartyPassiveStatusEffectAddNotify.ts
function read122(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.unk0_m = reader.u8();
  return data;
}
function write35(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
  writer.u8(data.unk0_m);
}
var name77 = "PartyPassiveStatusEffectAddNotify";

// src/packets/log/definitions/PartyPassiveStatusEffectRemoveNotify.ts
function read123(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
function write36(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
}
var name78 = "PartyPassiveStatusEffectRemoveNotify";

// src/packets/log/definitions/PartyStatusEffectAddNotify.ts
function read124(reader, version2) {
  const data = {};
  data.characterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read106(reader, version2), 80);
  data.playerIdOnRefresh = reader.u64();
  return data;
}
function write37(writer, data) {
  writer.u64(data.characterId);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write19(writer, obj);
  });
  writer.u64(data.playerIdOnRefresh);
}
var name79 = "PartyStatusEffectAddNotify";

// src/packets/log/definitions/PartyStatusEffectRemoveNotify.ts
function read125(reader, version2) {
  const data = {};
  data.characterId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.reason = reader.u8();
  return data;
}
function write38(writer, data) {
  writer.u64(data.characterId);
  writer.array(data.statusEffectIds, { maxLen: 80, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
  writer.u8(data.reason);
}
var name80 = "PartyStatusEffectRemoveNotify";

// src/packets/log/definitions/PartyStatusEffectResultNotify.ts
function read126(reader, version2) {
  const data = {};
  data.partyInstanceId = reader.u32();
  data.raidInstanceId = reader.u32();
  data.characterId = reader.u64();
  return data;
}
function write39(writer, data) {
  writer.u32(data.partyInstanceId);
  writer.u32(data.raidInstanceId);
  writer.u64(data.characterId);
}
var name81 = "PartyStatusEffectResultNotify";

// src/packets/log/definitions/PassiveStatusEffectAddNotify.ts
function read127(reader, version2) {
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
function write40(writer, data) {
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
}
var name82 = "PassiveStatusEffectAddNotify";

// src/packets/log/definitions/PassiveStatusEffectRemoveNotify.ts
function read128(reader, version2) {
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
function write41(writer, data) {
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
}
var name83 = "PassiveStatusEffectRemoveNotify";

// src/packets/log/definitions/RaidBossKillNotify.ts
function read129(reader, version2) {
  const data = {};
  if (version2 >= 4) data.typeId = reader.u32();
  else data.typeId = 0;
  return data;
}
function write42(writer, data) {
  writer.u32(data.typeId);
}
var name84 = "RaidBossKillNotify";

// src/packets/log/definitions/RaidResult.ts
function read130(reader, version2) {
  const data = {};
  if (version2 >= 3) {
    data.raidResult = reader.u8();
  } else {
    data.raidResult = 0;
  }
  return data;
}
function write43(writer, data) {
  writer.u8(data.raidResult);
}
var name85 = "RaidResult";

// src/packets/log/structures/UnpublishObject.ts
function read131(reader, version2) {
  const data = {};
  data.unpublishReason = reader.u8();
  data.objectId = reader.u64();
  return data;
}
function write44(writer, data) {
  writer.u8(data.unpublishReason);
  writer.u64(data.objectId);
}

// src/packets/log/definitions/RemoveObject.ts
function read132(reader, version2) {
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read131(reader, version2), 200);
  return data;
}
function write45(writer, data) {
  writer.array(data.unpublishedObjects, { maxLen: 200, lenType: "u16" }, (obj) => {
    write44(writer, obj);
  });
}
var name86 = "RemoveObject";

// src/packets/log/structures/SkillDamageEvent.ts
function read133(reader, version2) {
  const data = {};
  data.modifier = reader.u8();
  data.targetId = reader.u64();
  data.damageType = reader.u8();
  if (reader.bool()) data.damageAttr = reader.u8();
  data.curHp = read18(reader, version2);
  data.unk3_m = reader.u16();
  data.maxHp = read18(reader, version2);
  data.damage = read18(reader, version2);
  return data;
}
function write46(writer, data) {
  writer.u8(data.modifier);
  writer.u64(data.targetId);
  writer.u8(data.damageType);
  if (writer.bool(data.damageAttr !== void 0)) writer.u8(data.damageAttr);
  write2(writer, data.curHp);
  writer.u16(data.unk3_m);
  write2(writer, data.maxHp);
  write2(writer, data.damage);
}

// src/packets/log/structures/SkillDamageAbnormalMoveEvent.ts
function read134(reader, version2) {
  const data = {};
  data.skillMoveOptionData = read70(reader, version2);
  data.destination = read39(reader, version2);
  data.position = read39(reader, version2);
  data.skillDamageEvent = read133(reader, version2);
  return data;
}
function write47(writer, data) {
  write7(writer, data.skillMoveOptionData);
  write4(writer, data.destination);
  write4(writer, data.position);
  write46(writer, data.skillDamageEvent);
}

// src/packets/log/definitions/SkillDamageAbnormalMoveNotify.ts
function read135(reader, version2) {
  const data = {};
  data.skillId = reader.u32();
  data.skillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => read134(reader, version2), 50);
  data.skillEffectId = reader.u32();
  data.sourceId = reader.u64();
  return data;
}
function write48(writer, data) {
  writer.u32(data.skillId);
  writer.array(data.skillDamageAbnormalMoveEvents, { maxLen: 50, lenType: "u16" }, (obj) => {
    write47(writer, obj);
  });
  writer.u32(data.skillEffectId);
  writer.u64(data.sourceId);
}
var name87 = "SkillDamageAbnormalMoveNotify";

// src/packets/log/definitions/SkillDamageNotify.ts
function read136(reader, version2) {
  const data = {};
  data.skillLevel = reader.u8();
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.skillDamageEvents = reader.array(reader.u16(), () => read133(reader, version2), 50);
  data.skillEffectId = reader.u32();
  return data;
}
function write49(writer, data) {
  writer.u8(data.skillLevel);
  writer.u64(data.sourceId);
  writer.u32(data.skillId);
  writer.array(data.skillDamageEvents, { maxLen: 50, lenType: "u16" }, (obj) => {
    write46(writer, obj);
  });
  writer.u32(data.skillEffectId ?? 0);
}
var name88 = "SkillDamageNotify";

// src/packets/log/definitions/SkillStageNotify.ts
function read137(reader, version2) {
  const data = {};
  data.sourceId = reader.u64();
  data.skillId = reader.u32();
  data.stage = reader.u8();
  return data;
}
function write50(writer, data) {
  writer.u64(data.sourceId);
  writer.u32(data.skillId);
  writer.u8(data.stage);
}
var name89 = "SkillStageNotify";

// src/packets/log/definitions/SkillStartNotify.ts
function read138(reader, version2) {
  const data = {};
  data.sourceId = reader.u64();
  data.curDirectionYaw = read38(reader, version2);
  data.newDirectionYaw = read38(reader, version2);
  data.aimTargetPosition = read39(reader, version2);
  if (reader.bool()) data.pitchRotation = read38(reader, version2);
  if (reader.bool()) data.aiStateId = reader.u32();
  data.curPosition = read39(reader, version2);
  if (reader.bool()) data.unk1_m = reader.u32();
  data.skillLevel = reader.u8();
  data.newPosition = read39(reader, version2);
  data.skillId = reader.u32();
  data.skillOptionData = read76(reader, version2);
  return data;
}
function write51(writer, data) {
  writer.u64(data.sourceId);
  write3(writer, data.curDirectionYaw);
  write3(writer, data.newDirectionYaw);
  write4(writer, data.aimTargetPosition);
  if (writer.bool(data.pitchRotation !== void 0)) write3(writer, data.pitchRotation);
  if (writer.bool(data.aiStateId !== void 0)) writer.u32(data.aiStateId);
  write4(writer, data.curPosition);
  if (writer.bool(data.unk1_m !== void 0)) writer.u32(data.unk1_m);
  writer.u8(data.skillLevel);
  write4(writer, data.newPosition);
  writer.u32(data.skillId);
  write8(writer, data.skillOptionData);
}
var name90 = "SkillStartNotify";

// src/packets/log/definitions/StatusEffectAddNotify.ts
function read139(reader, version2) {
  const data = {};
  data.statusEffectData = read106(reader, version2);
  data.objectId = reader.u64();
  data.new = reader.bool();
  return data;
}
function write52(writer, data) {
  write19(writer, data.statusEffectData);
  writer.u64(data.objectId);
  writer.bool(data.new);
}
var name91 = "StatusEffectAddNotify";

// src/packets/log/definitions/StatusEffectRemoveNotify.ts
function read140(reader, version2) {
  const data = {};
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.objectId = reader.u64();
  data.reason = reader.u8();
  return data;
}
function write53(writer, data) {
  writer.array(data.statusEffectIds, { maxLen: 80, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
  writer.u64(data.objectId);
  writer.u8(data.reason);
}
var name92 = "StatusEffectRemoveNotify";

// src/packets/log/definitions/StatusEffectDurationNotify.ts
function read141(reader, version2) {
  const data = {};
  data.effectInstanceId = reader.u32();
  data.targetId = reader.u64();
  data.expirationTick = reader.u64();
  return data;
}
function write54(writer, data) {
  writer.u32(data.effectInstanceId);
  writer.u64(data.targetId);
  writer.u64(data.expirationTick);
}
var name93 = "StatusEffectDurationNotify";

// src/packets/log/definitions/StatusEffectSyncDataNotify.ts
function read142(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.effectInstanceId = reader.u32();
  data.characterId = reader.u64();
  data.value = reader.u32();
  return data;
}
function write55(writer, data) {
  writer.u64(data.objectId);
  writer.u32(data.effectInstanceId);
  writer.u64(data.characterId);
  writer.u32(data.value);
}
var name94 = "StatusEffectSyncDataNotify";

// src/packets/log/definitions/TriggerBossBattleStatus.ts
function read143(reader, version2) {
  const data = {};
  data.step = reader.u32();
  data.unk2_m = reader.bool();
  data.triggerId = reader.u32();
  return data;
}
function write56(writer, data) {
  writer.u32(data.step);
  writer.bool(data.unk2_m);
  writer.u32(data.triggerId);
}
var name95 = "TriggerBossBattleStatus";

// src/packets/log/definitions/TriggerFinishNotify.ts
function read144(reader, version2) {
  const data = {};
  data.packetResultCode = reader.u32();
  data.triggerId = reader.u32();
  data.unk0_m = reader.u32();
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
function write57(writer, data) {
  writer.u32(data.packetResultCode);
  writer.u32(data.triggerId);
  writer.u32(data.unk0_m);
  writer.array(data.involvedPCs, { maxLen: 40, lenType: "u16" }, (obj) => {
    writer.u64(obj);
  });
}
var name96 = "TriggerFinishNotify";

// src/packets/log/definitions/TriggerStartNotify.ts
function read145(reader, version2) {
  const data = {};
  data.triggerId = reader.u32();
  data.triggerSignalType = reader.u32();
  data.sourceId = reader.u64();
  data.involvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
function write58(writer, data) {
  writer.u32(data.triggerId);
  writer.u32(data.triggerSignalType);
  writer.u64(data.sourceId);
  writer.array(data.involvedPCs, { maxLen: 40, lenType: "u16" }, (obj) => {
    writer.u64(obj);
  });
}
var name97 = "TriggerStartNotify";

// src/packets/log/definitions/TroopMemberUpdateMinNotify.ts
function read146(reader, version2) {
  const data = {};
  data.maxHp = read18(reader, version2);
  data.characterId = reader.u64();
  data.unk0_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read106(reader, version2), 80);
  data.position = reader.u64();
  data.curHp = read18(reader, version2);
  return data;
}
function write59(writer, data) {
  write2(writer, data.maxHp);
  writer.u64(data.characterId);
  writer.u32(data.unk0_m);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write19(writer, obj);
  });
  writer.u64(data.position);
  write2(writer, data.curHp);
}
var name98 = "TroopMemberUpdateMinNotify";

// src/packets/log/definitions/IdentityGaugeChangeNotify.ts
function read147(reader, version2) {
  const data = {};
  data.identityGauge1 = reader.u32();
  data.identityGauge2 = reader.u32();
  data.identityGauge3 = reader.u32();
  data.playerId = reader.u64();
  return data;
}
function write60(writer, data) {
  writer.u32(data.identityGauge1);
  writer.u32(data.identityGauge2);
  writer.u32(data.identityGauge3);
  writer.u64(data.playerId);
}
var name99 = "IdentityGaugeChangeNotify";

// src/packets/log/definitions/ZoneObjectUnpublishNotify.ts
function read148(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  return data;
}
function write61(writer, data) {
  writer.u64(data.objectId);
}
var name100 = "ZoneObjectUnpublishNotify";

// src/packets/log/structures/ZoneStatusEffectData.ts
function read149(reader, version2) {
  const data = {};
  data.stackCount = reader.u8();
  data.target = reader.u8();
  data.id = reader.u32();
  return data;
}
function write62(writer, data) {
  writer.u8(data.stackCount);
  writer.u8(data.target);
  writer.u32(data.id);
}

// src/packets/log/definitions/ZoneStatusEffectAddNotify.ts
function read150(reader, version2) {
  const data = {};
  data.zoneStatusEffectDataList = reader.array(reader.u16(), () => read149(reader, version2), 4);
  return data;
}
function write63(writer, data) {
  writer.array(data.zoneStatusEffectDataList, { maxLen: 4, lenType: "u16" }, (obj) => {
    write62(writer, obj);
  });
}
var name101 = "ZoneStatusEffectAddNotify";

// src/packets/log/definitions/ZoneStatusEffectRemoveNotify.ts
function read151(reader, version2) {
  const data = {};
  data.statusEffectId = reader.u32();
  return data;
}
function write64(writer, data) {
  writer.u32(data.statusEffectId);
}
var name102 = "ZoneStatusEffectRemoveNotify";

// src/packets/log/definitions/SkillCastNotify.ts
function read152(reader, version2) {
  const data = {};
  data.skillLevel = reader.u8();
  data.caster = reader.u64();
  data.skillId = reader.u32();
  return data;
}
function write65(writer, data) {
  writer.u8(data.skillLevel);
  writer.u64(data.caster);
  writer.u32(data.skillId);
}
var name103 = "SkillCastNotify";

// src/packets/log/definitions/IdentityStanceChangeNotify.ts
function read153(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.stance = reader.u8();
  return data;
}
function write66(writer, data) {
  writer.u64(data.objectId);
  writer.u8(data.stance);
}
var name104 = "IdentityStanceChangeNotify";

// src/packets/log/definitions/EquipChangeNotify.ts
function read154(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => read113(reader, version2), 32);
  return data;
}
function write67(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.equipItemDataList, { maxLen: 32, lenType: "u16" }, (obj) => {
    write26(writer, obj);
  });
}
var name105 = "EquipChangeNotify";

// src/packets/log/definitions/EquipLifeToolChangeNotify.ts
function read155(reader, version2) {
  const data = {};
  data.objectId = reader.u64();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => read113(reader, version2), 9);
  return data;
}
function write68(writer, data) {
  writer.u64(data.objectId);
  writer.array(data.equipLifeToolDataList, { maxLen: 9, lenType: "u16" }, (obj) => {
    write26(writer, obj);
  });
}
var name106 = "EquipLifeToolChangeNotify";

// src/packets/log/structures/ItemData.ts
function read156(reader, version2) {
  const data = {};
  if (reader.bool()) {
    data.serialNumber = reader.u64();
    data.id = reader.u32();
    data.level = reader.u16();
    data.slot = reader.u16();
    data.durability = reader.u32();
    data.unk1_6_m = reader.u32();
    data.flag = reader.u32();
    data.expireTime = read10(reader);
    data.lockUpdateTime = read10(reader);
  }
  return data;
}
function write69(writer, data) {
  if (writer.bool(data.slot !== void 0)) {
    writer.u64(data.serialNumber);
    writer.u32(data.id);
    writer.u16(data.level);
    writer.u16(data.slot);
    writer.u32(data.durability);
    writer.u32(data.unk1_6_m);
    writer.u32(data.flag);
    write(writer, data.expireTime);
    write(writer, data.lockUpdateTime);
  }
}

// src/packets/log/definitions/InitItem.ts
function read157(reader, version2) {
  const data = {};
  data.itemDataList = reader.array(reader.u16(), () => read156(reader, version2), 80);
  data.storageType = reader.u8();
  return data;
}
function write70(writer, data) {
  writer.array(
    [1 /* equip */, 20 /* account_equip */].includes(data.storageType) ? data.itemDataList : [],
    // We only log StorageType.Equip because we don't want to fill log files with full player inventory & stash
    { maxLen: 80, lenType: "u16" },
    (obj) => {
      write69(writer, obj);
    }
  );
  writer.u8(data.storageType);
}
var name107 = "InitItem";

// src/packets/log/structures/BossKillData.ts
function read158(reader, version2) {
  const data = {};
  data.npcId = reader.u32();
  data.isDead = reader.bool();
  return data;
}
function write71(writer, data) {
  writer.u32(data.npcId);
  writer.bool(data.isDead);
}

// src/packets/log/definitions/RaidBegin.ts
function read159(reader, version2) {
  const data = {};
  data.raidResult = reader.u8();
  data.raidId = reader.u32();
  data.totalTime = reader.u64();
  data.bossKillDataList = reader.array(reader.u16(), () => read158(reader, version2), 3);
  data.endTick = reader.u64();
  data.startTick = reader.u64();
  return data;
}
function write72(writer, data) {
  writer.u8(data.raidResult);
  writer.u32(data.raidId);
  writer.u64(data.totalTime);
  writer.array(data.bossKillDataList, { maxLen: 3, lenType: "u16" }, (obj) => {
    write71(writer, obj);
  });
  writer.u64(data.endTick);
  writer.u64(data.startTick);
}
var name108 = "RaidBegin";

// src/packets/log/definitions/ZoneMemberLoadStatusNotify.ts
function read160(reader, version2) {
  const data = {};
  data.zoneInstId = reader.u64();
  data.zoneId = reader.u32();
  data.loadComplete = reader.bool();
  data.completeMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.totalMembers = reader.array(reader.u16(), () => reader.u64(), 40);
  data.firstPCEnterTick = reader.u64();
  data.zoneLevel = reader.u8();
  return data;
}
function write73(writer, data) {
  writer.u64(data.zoneInstId);
  writer.u32(data.zoneId);
  writer.bool(data.loadComplete);
  writer.array(data.completeMembers, { maxLen: 40, lenType: "u16" }, (obj) => {
    writer.u64(obj);
  });
  writer.array(data.totalMembers, { maxLen: 40, lenType: "u16" }, (obj) => {
    writer.u64(obj);
  });
  writer.u64(data.firstPCEnterTick);
  writer.u8(data.zoneLevel);
}
var name109 = "ZoneMemberLoadStatusNotify";

// src/packets/log/structures/TrapData.ts
function read161(reader, version2) {
  const data = {};
  data.position = read39(reader);
  data.objectId = reader.u64();
  data.ownerId = reader.u64();
  data.skillId = reader.u32();
  data.skillEffect = reader.u32();
  return data;
}
function write74(writer, data) {
  write4(writer, data.position);
  writer.u64(data.objectId);
  writer.u64(data.ownerId);
  writer.u32(data.skillId);
  writer.u32(data.skillEffect);
}

// src/packets/log/definitions/NewTrap.ts
function read162(reader, version2) {
  const data = {};
  data.trapData = read161(reader, version2);
  return data;
}
function write75(writer, data) {
  write74(writer, data.trapData);
}
var name110 = "NewTrap";

// src/packets/log/definitions/SkillCancelNotify.ts
function read163(reader, version2) {
  const data = {};
  data.skillId = reader.u32();
  data.caster = reader.u64();
  data.newDirectionYaw = read38(reader);
  data.cancelReason = reader.u8();
  data.newPosition = read39(reader);
  return data;
}
function write76(writer, data) {
  writer.u32(data.skillId);
  writer.u64(data.caster);
  write3(writer, data.newDirectionYaw);
  writer.u8(data.cancelReason);
  write4(writer, data.newPosition);
}
var name111 = "SkillCancelNotify";

// src/packets/log/definitions/InstanceZoneEnteredNotify.ts
function read164() {}
function write77() {}
var name112 = "InstanceZoneEnteredNotify";

// src/packets/log/definitions/SkillCooldownNotify.ts
function read165(reader, version2) {
  const data = {};
  data.skillId = reader.u32();
  data.cd1 = reader.f32();
  data.cd2 = reader.f32();
}
function write78(writer, data) {
  writer.u32(data.skillId);
  writer.f32(data.cd1);
  writer.f32(data.cd2);
}
var name113 = "SkillCooldownNotify";

// src/packets/log/definitions/PCInspectResult.ts
function read166(reader, version2) {
  const data = {};
  data.name = reader.string(20);
  data.statPairList = reader.array(
    reader.u16(),
    () => {
      const z = {};
      z.statType = reader.u8();
      z.value = read18(reader, version2);
      return z;
    },
    153
  );
  return data;
}
function write79(writer, data) {
  writer.string(data.name, 20);
  writer.array(data.statPairList, { maxLen: 153, lenType: "u16" }, (obj) => {
    writer.u8(obj.statType);
    write2(writer, obj.value);
  });
}
var name114 = "PCInspectResult";

// src/packets/log/app/APP_StatApi.ts
function read167(reader, version2) {
  const data = {};
  data.players = reader.array(
    reader.u8(),
    () => {
      const l = {};
      l.name = reader.string(20);
      l.stats = reader.array(
        reader.u8(),
        () => {
          const i = {};
          i.id = reader.u8();
          i.value = reader.u32();
          return i;
        },
        100
      );
      if (version2 >= 4) {
        l.elixirs = reader.array(
          reader.u8(),
          () => {
            const i = {};
            i.slot = reader.u8();
            i.entries = reader.array(reader.u8(), () => {
              const j = {};
              j.level = reader.u8();
              j.id = reader.u32();
              return j;
            });
            return i;
          },
          32
        );
      }
      if (version2 >= 5) {
        l.gems = reader.array(reader.u8(), () => {
          const i = {};
          i.id = reader.u32();
          i.skillId = reader.u32();
          i.type = reader.u8();
          i.value = reader.u16();
        });
      }
      return l;
    },
    24
  );
  return data;
}
function write80(writer, data) {
  writer.array(data.players, { maxLen: 24, lenType: "u8" }, (obj) => {
    writer.string(obj.name, 20);
    writer.array(obj.stats, { maxLen: 100, lenType: "u8" }, (obj2) => {
      writer.u8(obj2.id);
      writer.u32(obj2.value);
    });
    writer.array(obj.elixirs, { maxLen: 32, lenType: "u8" }, (obj3) => {
      writer.u8(obj3.slot);
      writer.array(obj3.entries, { maxLen: 5, lenType: "u8" }, (obj4) => {
        writer.u8(obj4.level);
        writer.u32(obj4.id);
      });
    });
    writer.array(
      obj.gems,
      { maxLen: 20, lenType: "u8" },
      //20 in case they ever change gems count
      (obj4) => {
        writer.u32(obj4.id);
        writer.u32(obj4.skillId);
        writer.u8(obj4.type);
        writer.u16(obj4.value);
      }
    );
  });
}
var name115 = "APP_StatApi";

// src/packets/log/logMapping.ts
var logMapping = /* @__PURE__ */ new Map([
  [0 /* AbilityChangeNotify */, [name59, read97, write10]],
  [1 /* ActiveAbilityNotify */, [name60, read99, write12]],
  [2 /* AddonSkillFeatureChangeNotify */, [name61, read100, write13]],
  [4 /* BlockSkillStateNotify */, [name62, read101, write14]],
  [5 /* CounterAttackNotify */, [name63, read102, write15]],
  [6 /* DeathNotify */, [name64, read103, write16]],
  [7 /* InitAbility */, [name65, read104, write17]],
  [8 /* InitEnv */, [name66, read105, write18]],
  [9 /* InitPC */, [name67, read107, write20]],
  [10 /* InitLocal */, [name68, read108, write21]],
  [11 /* MigrationExecute */, [name69, read109, write22]],
  [12 /* NewNpc */, [name70, read111, write24]],
  [13 /* NewNpcSummon */, [name71, read112, write25]],
  [14 /* NewPC */, [name72, read115, write28]],
  [15 /* NewProjectile */, [name73, read117, write30]],
  [16 /* ParalyzationStateNotify */, [name74, read118, write31]],
  [17 /* PartyInfo */, [name75, read120, write33]],
  [18 /* PartyLeaveResult */, [name76, read121, write34]],
  [19 /* PartyPassiveStatusEffectAddNotify */, [name77, read122, write35]],
  [20 /* PartyPassiveStatusEffectRemoveNotify */, [name78, read123, write36]],
  [21 /* PartyStatusEffectAddNotify */, [name79, read124, write37]],
  [22 /* PartyStatusEffectRemoveNotify */, [name80, read125, write38]],
  [23 /* PartyStatusEffectResultNotify */, [name81, read126, write39]],
  [24 /* PassiveStatusEffectAddNotify */, [name82, read127, write40]],
  [25 /* PassiveStatusEffectRemoveNotify */, [name83, read128, write41]],
  [26 /* RaidBossKillNotify */, [name84, read129, write42]],
  [27 /* RaidResult */, [name85, read130, write43]],
  [28 /* RemoveObject */, [name86, read132, write45]],
  [29 /* SkillDamageAbnormalMoveNotify */, [name87, read135, write48]],
  [30 /* SkillDamageNotify */, [name88, read136, write49]],
  [31 /* SkillStageNotify */, [name89, read137, write50]],
  [32 /* SkillStartNotify */, [name90, read138, write51]],
  [34 /* StatusEffectAddNotify */, [name91, read139, write52]],
  [35 /* StatusEffectRemoveNotify */, [name92, read140, write53]],
  [36 /* StatusEffectDurationNotify */, [name93, read141, write54]],
  [37 /* StatusEffectSyncDataNotify */, [name94, read142, write55]],
  [38 /* TriggerBossBattleStatus */, [name95, read143, write56]],
  [39 /* TriggerFinishNotify */, [name96, read144, write57]],
  [40 /* TriggerStartNotify */, [name97, read145, write58]],
  [41 /* TroopMemberUpdateMinNotify */, [name98, read146, write59]],
  [42 /* IdentityGaugeChangeNotify */, [name99, read147, write60]],
  [43 /* ZoneObjectUnpublishNotify */, [name100, read148, write61]],
  [44 /* ZoneStatusEffectAddNotify */, [name101, read150, write63]],
  [45 /* ZoneStatusEffectRemoveNotify */, [name102, read151, write64]],
  [46 /* SkillCastNotify */, [name103, read152, write65]],
  [47 /* IdentityStanceChangeNotify */, [name104, read153, write66]],
  [48 /* EquipChangeNotify */, [name105, read154, write67]],
  [49 /* EquipLifeToolChangeNotify */, [name106, read155, write68]],
  [50 /* InitItem */, [name107, read157, write70]],
  [52 /* RaidBegin */, [name108, read159, write72]],
  [51 /* ZoneMemberLoadStatusNotify */, [name109, read160, write73]],
  [53 /* NewTrap */, [name110, read162, write75]],
  [54 /* SkillCancelNotify */, [name111, read163, write76]],
  [55 /* InstanceZoneEnteredNotify */, [name112, read164, write77]],
  [56 /* SkillCooldownNotify */, [name113, read165, write78]],
  [57 /* PCInspectResult */, [name114, read166, write79]],
  [6e4 /* APP_StatApi */, [name115, read167, write80]],
]);

// src/pkt-stream.ts
var import_tiny_typed_emitter = require("tiny-typed-emitter");
var PKT = class {
  #data;
  #opcode;
  #compression;
  #xor;
  #decompressor;
  #read;
  constructor(data, opcode59, compression, xor, decompressor, read168) {
    this.#data = data;
    this.#opcode = 0;
    this.#compression = compression;
    this.#xor = xor;
    this.#decompressor = decompressor;
    this.#read = read168;
  }
  // in case we listen for it more than once
  #cached;
  get parsed() {
    if (!this.#cached) {
      try {
        this.#cached = this.#read(this.#decompressor.decrypt(this.#data, this.#opcode, this.#compression, this.#xor));
      } catch (e) {
        console.error(`[meter-core/pkt-stream] - ${this.#opcode} - ${e}`);
        return void 0;
      }
    }
    return this.#cached;
  }
};

// src/logger/logEvent.ts
var LogEvent = class {
  time;
  #logId;
  #data;
  #read;
  #write;
  constructor(...args) {
    if (args.length === 5) {
      const [data, logId2, time, read168, write81] = args;
      this.#data = data;
      this.time = time;
      this.#logId = logId2;
      this.#read = read168;
      this.#write = write81;
    } else if (args.length === 3) {
      const [pkt, logId2, write81] = args;
      this.#data = Buffer.alloc(0);
      this.time = /* @__PURE__ */ new Date();
      this.#logId = logId2;
      this.#read = () => pkt;
      this.#write = write81;
    } else {
      throw new Error(`[meter-core/logger/parser] - LogEvent<T>: Invalid constructor arguments`);
    }
  }
  // in case we listen for it more than once
  #readCached;
  get parsed() {
    if (!this.#readCached) {
      try {
        this.#readCached = this.#read(new Read(this.#data));
      } catch (e) {
        console.error(`[meter-core/logger/parser] - parsed - ${e}`);
        return void 0;
      }
    }
    return this.#readCached;
  }
  #writeCached;
  get serialized() {
    if (!this.#writeCached) {
      try {
        if (!this.parsed) return void 0;
        const writer = new Write();
        writer.skip(HEADER_FULL_SIZE);
        this.#write(writer, this.parsed);
        const buf = writer.value;
        buf.writeUint16LE(buf.length, HEADER_LEN_OFFSET);
        buf.writeUint16LE(this.#logId, HEADER_ID_OFFSET);
        buf.writeUintLE(+(/* @__PURE__ */ new Date()), HEADER_DATE_OFFSET, HEADER_DATE_SIZE);
        this.#writeCached = writer.value;
      } catch (e) {
        console.error(`[meter-core/logger/parser] - serialized - ${e}`);
        return void 0;
      }
    }
    return this.#writeCached;
  }
};
var HEADER_VERSION_SIZE = 6;
var HEADER_LEN_SIZE = 2;
var HEADER_LEN_OFFSET = 0;
var HEADER_ID_SIZE = 2;
var HEADER_ID_OFFSET = HEADER_LEN_OFFSET + HEADER_LEN_SIZE;
var HEADER_DATE_SIZE = 6;
var HEADER_DATE_OFFSET = HEADER_ID_OFFSET + HEADER_ID_SIZE;
var HEADER_FULL_SIZE = HEADER_LEN_SIZE + HEADER_ID_SIZE + HEADER_DATE_SIZE;

// src/logger/logger.ts
var import_fs = require("fs");

// src/pkt-buffer.ts
var PacketBuffer = class {
  buffer;
  position;
  out;
  constructor() {
    this.buffer = null;
    this.position = 0;
    this.out = [];
  }
  write(data) {
    while (data.length > 0) {
      if (this.buffer) {
        if (this.buffer.length < 2) {
          const old = this.buffer[0];
          const size2 = (data[0] << 8) + old;
          this.buffer = Buffer.alloc(size2);
          this.buffer[0] = old;
          this.position = 1;
        }
        const remaining = Math.min(data.length, this.buffer.length - this.position);
        data.copy(this.buffer, this.position, 0, remaining);
        this.position += remaining;
        if (this.position === this.buffer.length) {
          this.out.push(this.buffer);
          this.buffer = null;
          this.position = 0;
        }
        data = data.subarray(remaining);
        continue;
      }
      if (data.length < 2) {
        this.buffer = Buffer.from(data);
        this.position = data.length;
        break;
      }
      const size = data.readUInt16LE(0);
      if (size === 0) {
        this.buffer = null;
        return;
      }
      if (size > data.length) {
        this.buffer = Buffer.alloc(size);
        data.copy(this.buffer);
        this.position = data.length;
        break;
      }
      this.out.push(data.subarray(0, size));
      data = data.subarray(size);
    }
  }
  read() {
    return this.out.shift();
  }
};

// src/logger/logger.ts
var import_fs2 = require("fs");

// src/packets/log/version.ts
var version = 5;

// src/logger/logger.ts
var Logger = class extends import_tiny_typed_emitter2.TypedEmitter {
  //Only common behaviour is the emitted logStreamEvent
};
var LiveLogger = class extends Logger {
  #decompressor;
  #logWriter;
  writeLogFile = false;
  constructor(stream, decompressor, filepath) {
    super();
    this.#decompressor = decompressor;
    if (filepath) {
      this.#logWriter = (0, import_fs.createWriteStream)(filepath, { highWaterMark: 0 });
    }
    const versionBuffer = Buffer.allocUnsafe(HEADER_VERSION_SIZE);
    versionBuffer.writeUIntLE(version, 0, HEADER_VERSION_SIZE);
    this.#logWriter?.write(versionBuffer);
    stream.on("*", this.handlePkt.bind(this));
  }
  handlePkt(data, opcode59, compression, xor) {
    try {
      const pktMap = mapping.get(opcode59);
      const codeMap = codeMapping.get(opcode59);
      if (pktMap && codeMap) {
        const [logId2] = codeMap;
        const [pktName, readPkt] = pktMap;
        const logMap = logMapping.get(logId2);
        if (logMap) {
          const [logName, readLog, writeLog] = logMap;
          const pkt = new PKT(Buffer.from(data), opcode59, compression, Boolean(xor), this.#decompressor, readPkt);
          const parsed = pkt.parsed;
          if (!parsed) return;
          const logEvent = new LogEvent(parsed, logId2, writeLog);
          this.emit(logName, logEvent);
          this.emit("*", logName, logEvent);
          if (this.writeLogFile || logId2 === 9) this.appendLog(logEvent);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
  appendLog(logEvent) {
    if (this.#logWriter && logEvent.serialized) this.#logWriter.write(logEvent.serialized);
  }
};
var ReplayLogger = class extends Logger {
  readLogByChunk(filepath) {
    const pktBuffer = new PacketBuffer();
    const logReader = (0, import_fs2.createReadStream)(filepath);
    let end = false;
    let ver;
    logReader
      .on("data", (chunk) => {
        if (ver === void 0) {
          ver = this.readVersion(chunk);
          if (ver > version) {
            logReader.destroy();
            return;
          }
          chunk = chunk.subarray(HEADER_VERSION_SIZE);
        }
        pktBuffer.write(chunk);
        let pkt;
        while ((pkt = pktBuffer.read())) {
          this.readLogChunk(pkt, ver);
        }
      })
      .on("end", () => {
        end = true;
        this.emit("fileEnd", "end");
      })
      .on("close", () => {
        if (!end) this.emit("fileEnd", "closed");
      });
  }
  readLogChunk(buf, version2) {
    try {
      if (buf.length < 8) return false;
      const logId2 = buf.readUIntLE(HEADER_ID_OFFSET, HEADER_ID_SIZE);
      const time = new Date(buf.readUintLE(HEADER_DATE_OFFSET, HEADER_DATE_SIZE));
      const data = buf.subarray(HEADER_FULL_SIZE);
      const logMap = logMapping.get(logId2);
      if (logMap) {
        const [logName, readLog, writeLog] = logMap;
        const logEvent = new LogEvent(data, logId2, new Date(time), (reader) => readLog(reader, version2), writeLog);
        this.emit(logName, logEvent);
        this.emit("*", logName, logEvent);
      }
    } catch (e) {
      console.error(e);
    }
  }
  readVersion(b) {
    return b.readUintLE(0, HEADER_VERSION_SIZE);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    LiveLogger,
    Logger,
    ReplayLogger,
  });
//# sourceMappingURL=logger.js.map
