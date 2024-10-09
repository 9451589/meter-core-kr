var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value })
    : (obj[key] = value);
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
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  )
);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// src/test2.ts
var import_fs4 = require("fs");

// src/data.ts
var import_fs = require("fs");
var import_path = require("path");

// src/packets/generated/enums.ts
var addontype = /* @__PURE__ */ ((addontype2) => {
  addontype2[(addontype2["none"] = 0)] = "none";
  addontype2[(addontype2["slot"] = 1)] = "slot";
  addontype2[(addontype2["stat"] = 2)] = "stat";
  addontype2[(addontype2["ability_point"] = 3)] = "ability_point";
  addontype2[(addontype2["combat_effect"] = 4)] = "combat_effect";
  addontype2[(addontype2["skill_damage"] = 5)] = "skill_damage";
  addontype2[(addontype2["skill_critical_ratio"] = 6)] = "skill_critical_ratio";
  addontype2[(addontype2["skill_critical_damage"] = 7)] = "skill_critical_damage";
  addontype2[(addontype2["skill_penetration"] = 8)] = "skill_penetration";
  addontype2[(addontype2["npc_grade_less_damage"] = 9)] = "npc_grade_less_damage";
  addontype2[(addontype2["npc_grade_less_critical_ratio"] = 10)] = "npc_grade_less_critical_ratio";
  addontype2[(addontype2["npc_grade_less_critical_damage"] = 11)] = "npc_grade_less_critical_damage";
  addontype2[(addontype2["npc_grade_less_penetration"] = 12)] = "npc_grade_less_penetration";
  addontype2[(addontype2["npc_grade_greater_damage"] = 13)] = "npc_grade_greater_damage";
  addontype2[(addontype2["npc_grade_greater_critical_ratio"] = 14)] = "npc_grade_greater_critical_ratio";
  addontype2[(addontype2["npc_grade_greater_critical_damage"] = 15)] = "npc_grade_greater_critical_damage";
  addontype2[(addontype2["npc_grade_greater_penetration"] = 16)] = "npc_grade_greater_penetration";
  addontype2[(addontype2["npc_species_damage"] = 17)] = "npc_species_damage";
  addontype2[(addontype2["npc_species_critical_ratio"] = 18)] = "npc_species_critical_ratio";
  addontype2[(addontype2["npc_species_critical_damage"] = 19)] = "npc_species_critical_damage";
  addontype2[(addontype2["npc_species_penetration"] = 20)] = "npc_species_penetration";
  addontype2[(addontype2["npc_attr_damage"] = 21)] = "npc_attr_damage";
  addontype2[(addontype2["npc_attr_critical_ratio"] = 22)] = "npc_attr_critical_ratio";
  addontype2[(addontype2["npc_attr_critical_damage"] = 23)] = "npc_attr_critical_damage";
  addontype2[(addontype2["npc_attr_penetration"] = 24)] = "npc_attr_penetration";
  addontype2[(addontype2["mana_reduction"] = 25)] = "mana_reduction";
  addontype2[(addontype2["skill_mana_reduction"] = 26)] = "skill_mana_reduction";
  addontype2[(addontype2["skill_cooldown_reduction"] = 27)] = "skill_cooldown_reduction";
  addontype2[(addontype2["ability_feature"] = 28)] = "ability_feature";
  addontype2[(addontype2["class_option"] = 29)] = "class_option";
  addontype2[(addontype2["ability_point_passive"] = 30)] = "ability_point_passive";
  addontype2[(addontype2["instrument"] = 31)] = "instrument";
  addontype2[(addontype2["skill_feature"] = 32)] = "skill_feature";
  addontype2[(addontype2["npc_adaptation"] = 33)] = "npc_adaptation";
  addontype2[(addontype2["skill_group_damage"] = 34)] = "skill_group_damage";
  addontype2[(addontype2["skill_group_cooldown_reduction"] = 35)] = "skill_group_cooldown_reduction";
  addontype2[(addontype2["skill_level"] = 36)] = "skill_level";
  addontype2[(addontype2["skill_feature_level"] = 37)] = "skill_feature_level";
  addontype2[(addontype2["life_casting_speed"] = 38)] = "life_casting_speed";
  addontype2[(addontype2["life_casting_tier"] = 39)] = "life_casting_tier";
  addontype2[(addontype2["life_bonus_type_success"] = 40)] = "life_bonus_type_success";
  addontype2[(addontype2["life_bonus_type_extra"] = 41)] = "life_bonus_type_extra";
  addontype2[(addontype2["life_bonus_type_skill_bonus"] = 42)] = "life_bonus_type_skill_bonus";
  addontype2[(addontype2["life_bonus_type_minigame_perfect"] = 43)] = "life_bonus_type_minigame_perfect";
  addontype2[(addontype2["life_durability_bonus"] = 44)] = "life_durability_bonus";
  addontype2[(addontype2["life_mini_game_difficulty"] = 45)] = "life_mini_game_difficulty";
  addontype2[(addontype2["combat_effect_cooldown_reduction"] = 46)] = "combat_effect_cooldown_reduction";
  addontype2[(addontype2["skill_damage_addend"] = 47)] = "skill_damage_addend";
  addontype2[(addontype2["awakening_usable_count_addend"] = 48)] = "awakening_usable_count_addend";
  addontype2[(addontype2["battle_item_heal"] = 49)] = "battle_item_heal";
  addontype2[(addontype2["party_heal"] = 50)] = "party_heal";
  addontype2[(addontype2["party_shield"] = 51)] = "party_shield";
  addontype2[(addontype2["identity_gauge"] = 52)] = "identity_gauge";
  addontype2[(addontype2["attack_power_amplify_addend"] = 53)] = "attack_power_amplify_addend";
  addontype2[(addontype2["attack_power_amplify_multiplier"] = 54)] = "attack_power_amplify_multiplier";
  addontype2[(addontype2["not_in_party_damage"] = 55)] = "not_in_party_damage";
  addontype2[(addontype2["skill_effect_group_set_damage"] = 56)] = "skill_effect_group_set_damage";
  return addontype2;
})(addontype || {});
var combateffectactiontype = /* @__PURE__ */ ((combateffectactiontype2) => {
  combateffectactiontype2[(combateffectactiontype2["none"] = 0)] = "none";
  combateffectactiontype2[(combateffectactiontype2["modify_damage"] = 1)] = "modify_damage";
  combateffectactiontype2[(combateffectactiontype2["modify_final_damage"] = 2)] = "modify_final_damage";
  combateffectactiontype2[(combateffectactiontype2["modify_critical_ratio"] = 3)] = "modify_critical_ratio";
  combateffectactiontype2[(combateffectactiontype2["modify_critical_multiplier"] = 4)] = "modify_critical_multiplier";
  combateffectactiontype2[(combateffectactiontype2["modify_penetration"] = 5)] = "modify_penetration";
  combateffectactiontype2[(combateffectactiontype2["modify_penetration_when_critical"] = 6)] =
    "modify_penetration_when_critical";
  combateffectactiontype2[(combateffectactiontype2["exec_active_effect_when_damage"] = 7)] =
    "exec_active_effect_when_damage";
  combateffectactiontype2[(combateffectactiontype2["exec_active_effect_when_critical"] = 8)] =
    "exec_active_effect_when_critical";
  combateffectactiontype2[(combateffectactiontype2["exec_reactive_effect_when_miss"] = 9)] =
    "exec_reactive_effect_when_miss";
  combateffectactiontype2[(combateffectactiontype2["exec_reactive_effect_when_damage"] = 10)] =
    "exec_reactive_effect_when_damage";
  combateffectactiontype2[(combateffectactiontype2["exec_reactive_effect_when_critical"] = 11)] =
    "exec_reactive_effect_when_critical";
  combateffectactiontype2[(combateffectactiontype2["exec_after_effect"] = 12)] = "exec_after_effect";
  combateffectactiontype2[(combateffectactiontype2["exec_after_skill"] = 13)] = "exec_after_skill";
  combateffectactiontype2[(combateffectactiontype2["apply_heal"] = 14)] = "apply_heal";
  combateffectactiontype2[(combateffectactiontype2["modify_reactive_damage"] = 15)] = "modify_reactive_damage";
  combateffectactiontype2[(combateffectactiontype2["modify_damage_shield_multiplier"] = 16)] =
    "modify_damage_shield_multiplier";
  combateffectactiontype2[(combateffectactiontype2["exec_active_effect_when_kill"] = 17)] =
    "exec_active_effect_when_kill";
  combateffectactiontype2[(combateffectactiontype2["exec_start_skill"] = 18)] = "exec_start_skill";
  combateffectactiontype2[(combateffectactiontype2["modify_penetration_addend"] = 19)] = "modify_penetration_addend";
  combateffectactiontype2[(combateffectactiontype2["modify_penetration_addend_when_critical"] = 20)] =
    "modify_penetration_addend_when_critical";
  combateffectactiontype2[(combateffectactiontype2["modify_reactive_critical_multiplier"] = 21)] =
    "modify_reactive_critical_multiplier";
  combateffectactiontype2[(combateffectactiontype2["modify_damage_when_critical"] = 22)] =
    "modify_damage_when_critical";
  combateffectactiontype2[(combateffectactiontype2["modify_paralyzation_point"] = 23)] = "modify_paralyzation_point";
  combateffectactiontype2[(combateffectactiontype2["exec_when_counter"] = 24)] = "exec_when_counter";
  combateffectactiontype2[(combateffectactiontype2["exec_when_be_killed"] = 25)] = "exec_when_be_killed";
  return combateffectactiontype2;
})(combateffectactiontype || {});
var combateffectactortype = /* @__PURE__ */ ((combateffectactortype2) => {
  combateffectactortype2[(combateffectactortype2["none"] = 0)] = "none";
  combateffectactortype2[(combateffectactortype2["self"] = 1)] = "self";
  combateffectactortype2[(combateffectactortype2["target"] = 2)] = "target";
  combateffectactortype2[(combateffectactortype2["caster"] = 3)] = "caster";
  return combateffectactortype2;
})(combateffectactortype || {});
var combateffectconditiontype = /* @__PURE__ */ ((combateffectconditiontype2) => {
  combateffectconditiontype2[(combateffectconditiontype2["none"] = 0)] = "none";
  combateffectconditiontype2[(combateffectconditiontype2["current_skill"] = 1)] = "current_skill";
  combateffectconditiontype2[(combateffectconditiontype2["hp_less"] = 2)] = "hp_less";
  combateffectconditiontype2[(combateffectconditiontype2["hp_greater"] = 3)] = "hp_greater";
  combateffectconditiontype2[(combateffectconditiontype2["mp_less"] = 4)] = "mp_less";
  combateffectconditiontype2[(combateffectconditiontype2["mp_greater"] = 5)] = "mp_greater";
  combateffectconditiontype2[(combateffectconditiontype2["npc_grade_less"] = 6)] = "npc_grade_less";
  combateffectconditiontype2[(combateffectconditiontype2["npc_grade_greater"] = 7)] = "npc_grade_greater";
  combateffectconditiontype2[(combateffectconditiontype2["npc_grade_equal"] = 8)] = "npc_grade_equal";
  combateffectconditiontype2[(combateffectconditiontype2["npc_species"] = 9)] = "npc_species";
  combateffectconditiontype2[(combateffectconditiontype2["npc_attr"] = 10)] = "npc_attr";
  combateffectconditiontype2[(combateffectconditiontype2["abnormal_move"] = 11)] = "abnormal_move";
  combateffectconditiontype2[(combateffectconditiontype2["abnormal_status"] = 12)] = "abnormal_status";
  combateffectconditiontype2[(combateffectconditiontype2["abnormal_move_immune"] = 13)] = "abnormal_move_immune";
  combateffectconditiontype2[(combateffectconditiontype2["abnormal_status_immune"] = 14)] = "abnormal_status_immune";
  combateffectconditiontype2[(combateffectconditiontype2["abnormal_move_all"] = 15)] = "abnormal_move_all";
  combateffectconditiontype2[(combateffectconditiontype2["pc"] = 16)] = "pc";
  combateffectconditiontype2[(combateffectconditiontype2["skill_effect_id"] = 17)] = "skill_effect_id";
  combateffectconditiontype2[(combateffectconditiontype2["identity_stack_count"] = 18)] = "identity_stack_count";
  combateffectconditiontype2[(combateffectconditiontype2["status_effect_immunetype"] = 19)] =
    "status_effect_immunetype";
  combateffectconditiontype2[(combateffectconditiontype2["abnormal_not_move"] = 20)] = "abnormal_not_move";
  combateffectconditiontype2[(combateffectconditiontype2["target_count"] = 21)] = "target_count";
  combateffectconditiontype2[(combateffectconditiontype2["skill_identity_category"] = 22)] = "skill_identity_category";
  combateffectconditiontype2[(combateffectconditiontype2["identity_element_value"] = 23)] = "identity_element_value";
  combateffectconditiontype2[(combateffectconditiontype2["directional_attack"] = 24)] = "directional_attack";
  combateffectconditiontype2[(combateffectconditiontype2["current_skill_group"] = 25)] = "current_skill_group";
  combateffectconditiontype2[(combateffectconditiontype2["abnormal_move_status_all"] = 26)] =
    "abnormal_move_status_all";
  combateffectconditiontype2[(combateffectconditiontype2["identity_stance"] = 27)] = "identity_stance";
  combateffectconditiontype2[(combateffectconditiontype2["pc_skill"] = 28)] = "pc_skill";
  combateffectconditiontype2[(combateffectconditiontype2["skill_effect_group_set"] = 29)] = "skill_effect_group_set";
  combateffectconditiontype2[(combateffectconditiontype2["npc_id"] = 30)] = "npc_id";
  combateffectconditiontype2[(combateffectconditiontype2["identity_gauge0_value_less"] = 31)] =
    "identity_gauge0_value_less";
  combateffectconditiontype2[(combateffectconditiontype2["pc_without_me"] = 32)] = "pc_without_me";
  combateffectconditiontype2[(combateffectconditiontype2["npc_scaled_level_equal"] = 33)] = "npc_scaled_level_equal";
  combateffectconditiontype2[(combateffectconditiontype2["npc_scaled_level_less"] = 34)] = "npc_scaled_level_less";
  combateffectconditiontype2[(combateffectconditiontype2["npc_scaled_level_greater"] = 35)] =
    "npc_scaled_level_greater";
  combateffectconditiontype2[(combateffectconditiontype2["not_skill_effect_id"] = 36)] = "not_skill_effect_id";
  combateffectconditiontype2[(combateffectconditiontype2["abnormal_move_not_immune"] = 37)] =
    "abnormal_move_not_immune";
  combateffectconditiontype2[(combateffectconditiontype2["apply_target_marking"] = 38)] = "apply_target_marking";
  combateffectconditiontype2[(combateffectconditiontype2["damage_attr"] = 39)] = "damage_attr";
  combateffectconditiontype2[(combateffectconditiontype2["identity_element_value_less"] = 40)] =
    "identity_element_value_less";
  combateffectconditiontype2[(combateffectconditiontype2["command_skill_type"] = 41)] = "command_skill_type";
  return combateffectconditiontype2;
})(combateffectconditiontype || {});
var identitycategory = /* @__PURE__ */ ((identitycategory2) => {
  identitycategory2[(identitycategory2["none"] = 0)] = "none";
  identitycategory2[(identitycategory2["berserker_normal"] = 1)] = "berserker_normal";
  identitycategory2[(identitycategory2["berserker_rush"] = 2)] = "berserker_rush";
  identitycategory2[(identitycategory2["warlord_normal"] = 3)] = "warlord_normal";
  identitycategory2[(identitycategory2["warlord_shield_of_battlefield"] = 4)] = "warlord_shield_of_battlefield";
  identitycategory2[(identitycategory2["destroyer_normal"] = 5)] = "destroyer_normal";
  identitycategory2[(identitycategory2["destroyer_focus"] = 6)] = "destroyer_focus";
  identitycategory2[(identitycategory2["destroyer_release"] = 7)] = "destroyer_release";
  identitycategory2[(identitycategory2["battle_master_normal"] = 8)] = "battle_master_normal";
  identitycategory2[(identitycategory2["battle_master_bubble"] = 9)] = "battle_master_bubble";
  identitycategory2[(identitycategory2["infighter_normal"] = 10)] = "infighter_normal";
  identitycategory2[(identitycategory2["infighter_vigor"] = 11)] = "infighter_vigor";
  identitycategory2[(identitycategory2["infighter_shock"] = 12)] = "infighter_shock";
  identitycategory2[(identitycategory2["forcemaster_normal"] = 13)] = "forcemaster_normal";
  identitycategory2[(identitycategory2["forcemaster_soul"] = 14)] = "forcemaster_soul";
  identitycategory2[(identitycategory2["lance_master_normal"] = 15)] = "lance_master_normal";
  identitycategory2[(identitycategory2["lance_master_wild"] = 16)] = "lance_master_wild";
  identitycategory2[(identitycategory2["lance_master_focus"] = 17)] = "lance_master_focus";
  identitycategory2[(identitycategory2["devil_hunter_normal"] = 18)] = "devil_hunter_normal";
  identitycategory2[(identitycategory2["devil_hunter_pistol"] = 19)] = "devil_hunter_pistol";
  identitycategory2[(identitycategory2["devil_hunter_shotgun"] = 20)] = "devil_hunter_shotgun";
  identitycategory2[(identitycategory2["devil_hunter_rifle"] = 21)] = "devil_hunter_rifle";
  identitycategory2[(identitycategory2["blaster_normal"] = 22)] = "blaster_normal";
  identitycategory2[(identitycategory2["blaster_cannon"] = 23)] = "blaster_cannon";
  identitycategory2[(identitycategory2["hawkeye_normal"] = 24)] = "hawkeye_normal";
  identitycategory2[(identitycategory2["hawkeye_summon"] = 25)] = "hawkeye_summon";
  identitycategory2[(identitycategory2["summoner_normal"] = 26)] = "summoner_normal";
  identitycategory2[(identitycategory2["summoner_ancient"] = 27)] = "summoner_ancient";
  identitycategory2[(identitycategory2["arcana_normal"] = 28)] = "arcana_normal";
  identitycategory2[(identitycategory2["arcana_stack"] = 29)] = "arcana_stack";
  identitycategory2[(identitycategory2["arcana_ruin"] = 30)] = "arcana_ruin";
  identitycategory2[(identitycategory2["arcana_card"] = 31)] = "arcana_card";
  identitycategory2[(identitycategory2["bard_normal"] = 32)] = "bard_normal";
  identitycategory2[(identitycategory2["bard_serenade"] = 33)] = "bard_serenade";
  identitycategory2[(identitycategory2["blade_burst"] = 34)] = "blade_burst";
  identitycategory2[(identitycategory2["holyknight_normal"] = 35)] = "holyknight_normal";
  identitycategory2[(identitycategory2["holyknight_holy"] = 36)] = "holyknight_holy";
  identitycategory2[(identitycategory2["holyknight_retribution"] = 37)] = "holyknight_retribution";
  identitycategory2[(identitycategory2["demonic_normal"] = 38)] = "demonic_normal";
  identitycategory2[(identitycategory2["demonic_capture"] = 39)] = "demonic_capture";
  identitycategory2[(identitycategory2["demonic_demon"] = 40)] = "demonic_demon";
  identitycategory2[(identitycategory2["warlord_lance"] = 41)] = "warlord_lance";
  identitycategory2[(identitycategory2["reaper_normal"] = 42)] = "reaper_normal";
  identitycategory2[(identitycategory2["reaper_dagger"] = 43)] = "reaper_dagger";
  identitycategory2[(identitycategory2["reaper_shadow"] = 44)] = "reaper_shadow";
  identitycategory2[(identitycategory2["reaper_swoop"] = 45)] = "reaper_swoop";
  identitycategory2[(identitycategory2["scouter_scout"] = 46)] = "scouter_scout";
  identitycategory2[(identitycategory2["scouter_drone"] = 47)] = "scouter_drone";
  identitycategory2[(identitycategory2["scouter_hyper_sync"] = 48)] = "scouter_hyper_sync";
  identitycategory2[(identitycategory2["scouter_fusion"] = 49)] = "scouter_fusion";
  identitycategory2[(identitycategory2["blade_normal"] = 50)] = "blade_normal";
  identitycategory2[(identitycategory2["elemental_master_normal"] = 51)] = "elemental_master_normal";
  identitycategory2[(identitycategory2["elemental_master_fire"] = 52)] = "elemental_master_fire";
  identitycategory2[(identitycategory2["elemental_master_electricity"] = 53)] = "elemental_master_electricity";
  identitycategory2[(identitycategory2["elemental_master_ice"] = 54)] = "elemental_master_ice";
  identitycategory2[(identitycategory2["yinyangshi_normal"] = 55)] = "yinyangshi_normal";
  identitycategory2[(identitycategory2["yinyangshi_yin"] = 56)] = "yinyangshi_yin";
  identitycategory2[(identitycategory2["yinyangshi_yang"] = 57)] = "yinyangshi_yang";
  identitycategory2[(identitycategory2["weather_artist_weapon"] = 58)] = "weather_artist_weapon";
  identitycategory2[(identitycategory2["weather_artist_weather"] = 59)] = "weather_artist_weather";
  identitycategory2[(identitycategory2["summoner_summon"] = 60)] = "summoner_summon";
  identitycategory2[(identitycategory2["soul_eater_hollow"] = 61)] = "soul_eater_hollow";
  identitycategory2[(identitycategory2["soul_eater_killer"] = 62)] = "soul_eater_killer";
  identitycategory2[(identitycategory2["soul_eater_death"] = 63)] = "soul_eater_death";
  return identitycategory2;
})(identitycategory || {});
var npcgrade = /* @__PURE__ */ ((npcgrade2) => {
  npcgrade2[(npcgrade2["none"] = 0)] = "none";
  npcgrade2[(npcgrade2["underling"] = 1)] = "underling";
  npcgrade2[(npcgrade2["normal"] = 2)] = "normal";
  npcgrade2[(npcgrade2["elite"] = 3)] = "elite";
  npcgrade2[(npcgrade2["named"] = 4)] = "named";
  npcgrade2[(npcgrade2["seed"] = 5)] = "seed";
  npcgrade2[(npcgrade2["boss"] = 6)] = "boss";
  npcgrade2[(npcgrade2["raid"] = 7)] = "raid";
  npcgrade2[(npcgrade2["lucky"] = 8)] = "lucky";
  npcgrade2[(npcgrade2["epic_raid"] = 9)] = "epic_raid";
  npcgrade2[(npcgrade2["commander"] = 10)] = "commander";
  return npcgrade2;
})(npcgrade || {});
var paramtype = /* @__PURE__ */ ((paramtype3) => {
  paramtype3[(paramtype3["absolute"] = 0)] = "absolute";
  paramtype3[(paramtype3["relative"] = 1)] = "relative";
  return paramtype3;
})(paramtype || {});
var skillfeaturetype = /* @__PURE__ */ ((skillfeaturetype3) => {
  skillfeaturetype3[(skillfeaturetype3["none"] = 0)] = "none";
  skillfeaturetype3[(skillfeaturetype3["enable_notify"] = 1)] = "enable_notify";
  skillfeaturetype3[(skillfeaturetype3["enable_dir_change"] = 2)] = "enable_dir_change";
  skillfeaturetype3[(skillfeaturetype3["change_move_dist"] = 3)] = "change_move_dist";
  skillfeaturetype3[(skillfeaturetype3["change_layer"] = 4)] = "change_layer";
  skillfeaturetype3[(skillfeaturetype3["change_stage_speed"] = 5)] = "change_stage_speed";
  skillfeaturetype3[(skillfeaturetype3["change_stage_collision"] = 6)] = "change_stage_collision";
  skillfeaturetype3[(skillfeaturetype3["change_max_target"] = 7)] = "change_max_target";
  skillfeaturetype3[(skillfeaturetype3["change_area_range"] = 8)] = "change_area_range";
  skillfeaturetype3[(skillfeaturetype3["change_area_angle"] = 9)] = "change_area_angle";
  skillfeaturetype3[(skillfeaturetype3["change_cost"] = 10)] = "change_cost";
  skillfeaturetype3[(skillfeaturetype3["recover_cost"] = 11)] = "recover_cost";
  skillfeaturetype3[(skillfeaturetype3["recover_used_cost"] = 12)] = "recover_used_cost";
  skillfeaturetype3[(skillfeaturetype3["reduce_default_cooldown"] = 13)] = "reduce_default_cooldown";
  skillfeaturetype3[(skillfeaturetype3["reduce_active_cooldown"] = 14)] = "reduce_active_cooldown";
  skillfeaturetype3[(skillfeaturetype3["enable_stage_buff"] = 15)] = "enable_stage_buff";
  skillfeaturetype3[(skillfeaturetype3["add_stage_buff"] = 16)] = "add_stage_buff";
  skillfeaturetype3[(skillfeaturetype3["change_buff_area_range"] = 17)] = "change_buff_area_range";
  skillfeaturetype3[(skillfeaturetype3["change_buff_duration"] = 18)] = "change_buff_duration";
  skillfeaturetype3[(skillfeaturetype3["change_buff_stat"] = 19)] = "change_buff_stat";
  skillfeaturetype3[(skillfeaturetype3["change_buff_stack"] = 20)] = "change_buff_stack";
  skillfeaturetype3[(skillfeaturetype3["change_buff_param"] = 21)] = "change_buff_param";
  skillfeaturetype3[(skillfeaturetype3["change_buff_expired_action"] = 22)] = "change_buff_expired_action";
  skillfeaturetype3[(skillfeaturetype3["change_chain_ratio"] = 23)] = "change_chain_ratio";
  skillfeaturetype3[(skillfeaturetype3["change_abnormal"] = 24)] = "change_abnormal";
  skillfeaturetype3[(skillfeaturetype3["change_abnormal_ratio"] = 25)] = "change_abnormal_ratio";
  skillfeaturetype3[(skillfeaturetype3["change_dam_attr"] = 26)] = "change_dam_attr";
  skillfeaturetype3[(skillfeaturetype3["change_dam_value"] = 27)] = "change_dam_value";
  skillfeaturetype3[(skillfeaturetype3["change_dam_coefficient"] = 28)] = "change_dam_coefficient";
  skillfeaturetype3[(skillfeaturetype3["change_dam_critical"] = 29)] = "change_dam_critical";
  skillfeaturetype3[(skillfeaturetype3["change_dam_critical_rate"] = 30)] = "change_dam_critical_rate";
  skillfeaturetype3[(skillfeaturetype3["change_attack_stage_speed"] = 31)] = "change_attack_stage_speed";
  skillfeaturetype3[(skillfeaturetype3["change_stack_charge_time"] = 32)] = "change_stack_charge_time";
  skillfeaturetype3[(skillfeaturetype3["change_stack_max_count"] = 33)] = "change_stack_max_count";
  skillfeaturetype3[(skillfeaturetype3["change_targeting"] = 34)] = "change_targeting";
  skillfeaturetype3[(skillfeaturetype3["change_min_range"] = 35)] = "change_min_range";
  skillfeaturetype3[(skillfeaturetype3["change_max_range"] = 36)] = "change_max_range";
  skillfeaturetype3[(skillfeaturetype3["change_push_info"] = 37)] = "change_push_info";
  skillfeaturetype3[(skillfeaturetype3["change_parts_attack_attr"] = 38)] = "change_parts_attack_attr";
  skillfeaturetype3[(skillfeaturetype3["change_skill_chain_info"] = 39)] = "change_skill_chain_info";
  skillfeaturetype3[(skillfeaturetype3["change_skill_chain_delay"] = 40)] = "change_skill_chain_delay";
  skillfeaturetype3[(skillfeaturetype3["change_behit_move_info"] = 41)] = "change_behit_move_info";
  skillfeaturetype3[(skillfeaturetype3["add_buff_stat"] = 42)] = "add_buff_stat";
  skillfeaturetype3[(skillfeaturetype3["add_chain_skill_effect"] = 43)] = "add_chain_skill_effect";
  skillfeaturetype3[(skillfeaturetype3["remove_chain_skill_effect"] = 44)] = "remove_chain_skill_effect";
  skillfeaturetype3[(skillfeaturetype3["add_chain_combat_effect"] = 45)] = "add_chain_combat_effect";
  skillfeaturetype3[(skillfeaturetype3["remove_chain_combat_effect"] = 46)] = "remove_chain_combat_effect";
  skillfeaturetype3[(skillfeaturetype3["change_skill_effect_bonus"] = 47)] = "change_skill_effect_bonus";
  skillfeaturetype3[(skillfeaturetype3["change_skill_effect_ai_point"] = 48)] = "change_skill_effect_ai_point";
  skillfeaturetype3[(skillfeaturetype3["change_dam_addend"] = 49)] = "change_dam_addend";
  skillfeaturetype3[(skillfeaturetype3["change_hitted"] = 50)] = "change_hitted";
  skillfeaturetype3[(skillfeaturetype3["change_skill_move_speed"] = 51)] = "change_skill_move_speed";
  skillfeaturetype3[(skillfeaturetype3["add_skill_buff"] = 52)] = "add_skill_buff";
  skillfeaturetype3[(skillfeaturetype3["change_skill_bonus"] = 53)] = "change_skill_bonus";
  skillfeaturetype3[(skillfeaturetype3["change_skill_normal_info"] = 54)] = "change_skill_normal_info";
  skillfeaturetype3[(skillfeaturetype3["change_skill_invisibility"] = 55)] = "change_skill_invisibility";
  skillfeaturetype3[(skillfeaturetype3["change_skill_constraint"] = 56)] = "change_skill_constraint";
  skillfeaturetype3[(skillfeaturetype3["change_skill_book_type"] = 57)] = "change_skill_book_type";
  skillfeaturetype3[(skillfeaturetype3["change_projection_skill_effect_id"] = 58)] =
    "change_projection_skill_effect_id";
  skillfeaturetype3[(skillfeaturetype3["change_push_pvp_info"] = 59)] = "change_push_pvp_info";
  skillfeaturetype3[(skillfeaturetype3["change_forced_critical"] = 60)] = "change_forced_critical";
  skillfeaturetype3[(skillfeaturetype3["change_instance_skill_effect_info"] = 61)] =
    "change_instance_skill_effect_info";
  skillfeaturetype3[(skillfeaturetype3["change_skill_start_stage"] = 62)] = "change_skill_start_stage";
  skillfeaturetype3[(skillfeaturetype3["change_skill_effect_dir_target"] = 63)] = "change_skill_effect_dir_target";
  skillfeaturetype3[(skillfeaturetype3["change_stage_dir_rate"] = 64)] = "change_stage_dir_rate";
  skillfeaturetype3[(skillfeaturetype3["change_projection"] = 65)] = "change_projection";
  skillfeaturetype3[(skillfeaturetype3["change_skill_view"] = 66)] = "change_skill_view";
  skillfeaturetype3[(skillfeaturetype3["change_projectile_speed"] = 67)] = "change_projectile_speed";
  skillfeaturetype3[(skillfeaturetype3["change_projectile_dist"] = 68)] = "change_projectile_dist";
  skillfeaturetype3[(skillfeaturetype3["change_projectile_resourcescale"] = 69)] = "change_projectile_resourcescale";
  skillfeaturetype3[(skillfeaturetype3["change_projectile_max_target_hit_count"] = 70)] =
    "change_projectile_max_target_hit_count";
  skillfeaturetype3[(skillfeaturetype3["change_summon_trap_lifetime"] = 71)] = "change_summon_trap_lifetime";
  skillfeaturetype3[(skillfeaturetype3["change_summon_trap_destroy_delaytime"] = 72)] =
    "change_summon_trap_destroy_delaytime";
  skillfeaturetype3[(skillfeaturetype3["change_summon_trap_react_info"] = 73)] = "change_summon_trap_react_info";
  skillfeaturetype3[(skillfeaturetype3["change_summon_trap_invoke_effect"] = 74)] = "change_summon_trap_invoke_effect";
  skillfeaturetype3[(skillfeaturetype3["change_summon_trap_count"] = 75)] = "change_summon_trap_count";
  skillfeaturetype3[(skillfeaturetype3["enable_identity_event"] = 76)] = "enable_identity_event";
  skillfeaturetype3[(skillfeaturetype3["change_identity_proc_value"] = 77)] = "change_identity_proc_value";
  skillfeaturetype3[(skillfeaturetype3["change_skill_effect_identity_proc_info"] = 78)] =
    "change_skill_effect_identity_proc_info";
  skillfeaturetype3[(skillfeaturetype3["change_identity_proc_pvp_value"] = 79)] = "change_identity_proc_pvp_value";
  skillfeaturetype3[(skillfeaturetype3["change_skill_effect_identity_proc_pvp_info"] = 80)] =
    "change_skill_effect_identity_proc_pvp_info";
  skillfeaturetype3[(skillfeaturetype3["change_skill_effect_identity_proc_replace_info"] = 81)] =
    "change_skill_effect_identity_proc_replace_info";
  skillfeaturetype3[(skillfeaturetype3["change_skill_effect_identity_proc_replace_pvp_info"] = 82)] =
    "change_skill_effect_identity_proc_replace_pvp_info";
  skillfeaturetype3[(skillfeaturetype3["swap_chain_skill_effect"] = 83)] = "swap_chain_skill_effect";
  skillfeaturetype3[(skillfeaturetype3["swap_chain_combat_effect"] = 84)] = "swap_chain_combat_effect";
  skillfeaturetype3[(skillfeaturetype3["change_charge_scale"] = 85)] = "change_charge_scale";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_id"] = 86)] = "change_summon_npc_id";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_sight_range"] = 87)] = "change_summon_npc_sight_range";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_pursuit_range"] = 88)] = "change_summon_npc_pursuit_range";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_walk_movespeed"] = 89)] = "change_summon_npc_walk_movespeed";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_battle_movespeed"] = 90)] =
    "change_summon_npc_battle_movespeed";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_life_time"] = 91)] = "change_summon_npc_life_time";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_ai_index"] = 92)] = "change_summon_npc_ai_index";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_invincible_duration"] = 93)] =
    "change_summon_npc_invincible_duration";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_acquire_identity"] = 94)] =
    "change_summon_npc_acquire_identity";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_skill_id"] = 95)] = "change_summon_npc_skill_id";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_die_skill_id"] = 96)] = "change_summon_npc_die_skill_id";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_destroy_skill_id"] = 97)] =
    "change_summon_npc_destroy_skill_id";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_spawn_buff_id"] = 98)] = "change_summon_npc_spawn_buff_id";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_count"] = 99)] = "change_summon_npc_count";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_stat"] = 100)] = "change_summon_npc_stat";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_threat_point"] = 101)] = "change_summon_npc_threat_point";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_skill_usable_tick"] = 102)] =
    "change_summon_npc_skill_usable_tick";
  skillfeaturetype3[(skillfeaturetype3["change_summon_npc_skill_use_order"] = 103)] =
    "change_summon_npc_skill_use_order";
  skillfeaturetype3[(skillfeaturetype3["change_combat_effect_arg"] = 104)] = "change_combat_effect_arg";
  skillfeaturetype3[(skillfeaturetype3["change_skill_effect_cost"] = 105)] = "change_skill_effect_cost";
  skillfeaturetype3[(skillfeaturetype3["change_accumulate_dam_rate"] = 106)] = "change_accumulate_dam_rate";
  skillfeaturetype3[(skillfeaturetype3["change_projectile_bank_data_addend"] = 107)] =
    "change_projectile_bank_data_addend";
  skillfeaturetype3[(skillfeaturetype3["change_identity_category"] = 108)] = "change_identity_category";
  skillfeaturetype3[(skillfeaturetype3["change_skill_slot_visible_effect"] = 109)] = "change_skill_slot_visible_effect";
  skillfeaturetype3[(skillfeaturetype3["change_attack_mask"] = 110)] = "change_attack_mask";
  skillfeaturetype3[(skillfeaturetype3["change_aim_target_max_range"] = 111)] = "change_aim_target_max_range";
  return skillfeaturetype3;
})(skillfeaturetype || {});
var stattype = /* @__PURE__ */ ((stattype3) => {
  stattype3[(stattype3["none"] = 0)] = "none";
  stattype3[(stattype3["hp"] = 1)] = "hp";
  stattype3[(stattype3["mp"] = 2)] = "mp";
  stattype3[(stattype3["str"] = 3)] = "str";
  stattype3[(stattype3["agi"] = 4)] = "agi";
  stattype3[(stattype3["int"] = 5)] = "int";
  stattype3[(stattype3["con"] = 6)] = "con";
  stattype3[(stattype3["str_x"] = 7)] = "str_x";
  stattype3[(stattype3["agi_x"] = 8)] = "agi_x";
  stattype3[(stattype3["int_x"] = 9)] = "int_x";
  stattype3[(stattype3["con_x"] = 10)] = "con_x";
  stattype3[(stattype3["criticalhit"] = 15)] = "criticalhit";
  stattype3[(stattype3["specialty"] = 16)] = "specialty";
  stattype3[(stattype3["oppression"] = 17)] = "oppression";
  stattype3[(stattype3["rapidity"] = 18)] = "rapidity";
  stattype3[(stattype3["endurance"] = 19)] = "endurance";
  stattype3[(stattype3["mastery"] = 20)] = "mastery";
  stattype3[(stattype3["criticalhit_x"] = 21)] = "criticalhit_x";
  stattype3[(stattype3["specialty_x"] = 22)] = "specialty_x";
  stattype3[(stattype3["oppression_x"] = 23)] = "oppression_x";
  stattype3[(stattype3["rapidity_x"] = 24)] = "rapidity_x";
  stattype3[(stattype3["endurance_x"] = 25)] = "endurance_x";
  stattype3[(stattype3["mastery_x"] = 26)] = "mastery_x";
  stattype3[(stattype3["max_hp"] = 27)] = "max_hp";
  stattype3[(stattype3["max_mp"] = 28)] = "max_mp";
  stattype3[(stattype3["max_hp_x"] = 29)] = "max_hp_x";
  stattype3[(stattype3["max_mp_x"] = 30)] = "max_mp_x";
  stattype3[(stattype3["max_hp_x_x"] = 31)] = "max_hp_x_x";
  stattype3[(stattype3["max_mp_x_x"] = 32)] = "max_mp_x_x";
  stattype3[(stattype3["normal_hp_recovery"] = 33)] = "normal_hp_recovery";
  stattype3[(stattype3["combat_hp_recovery"] = 34)] = "combat_hp_recovery";
  stattype3[(stattype3["normal_hp_recovery_rate"] = 35)] = "normal_hp_recovery_rate";
  stattype3[(stattype3["combat_hp_recovery_rate"] = 36)] = "combat_hp_recovery_rate";
  stattype3[(stattype3["normal_mp_recovery"] = 37)] = "normal_mp_recovery";
  stattype3[(stattype3["combat_mp_recovery"] = 38)] = "combat_mp_recovery";
  stattype3[(stattype3["normal_mp_recovery_rate"] = 39)] = "normal_mp_recovery_rate";
  stattype3[(stattype3["combat_mp_recovery_rate"] = 40)] = "combat_mp_recovery_rate";
  stattype3[(stattype3["self_recovery_rate"] = 41)] = "self_recovery_rate";
  stattype3[(stattype3["drain_hp_dam_rate"] = 42)] = "drain_hp_dam_rate";
  stattype3[(stattype3["drain_mp_dam_rate"] = 43)] = "drain_mp_dam_rate";
  stattype3[(stattype3["dam_reflection_rate"] = 44)] = "dam_reflection_rate";
  stattype3[(stattype3["char_attack_dam"] = 47)] = "char_attack_dam";
  stattype3[(stattype3["skill_effect_dam_addend"] = 48)] = "skill_effect_dam_addend";
  stattype3[(stattype3["attack_power_rate"] = 49)] = "attack_power_rate";
  stattype3[(stattype3["skill_damage_rate"] = 50)] = "skill_damage_rate";
  stattype3[(stattype3["attack_power_rate_x"] = 51)] = "attack_power_rate_x";
  stattype3[(stattype3["skill_damage_rate_x"] = 52)] = "skill_damage_rate_x";
  stattype3[(stattype3["cooldown_reduction"] = 53)] = "cooldown_reduction";
  stattype3[(stattype3["paralyzation_point_rate"] = 54)] = "paralyzation_point_rate";
  stattype3[(stattype3["def"] = 55)] = "def";
  stattype3[(stattype3["res"] = 56)] = "res";
  stattype3[(stattype3["def_x"] = 57)] = "def_x";
  stattype3[(stattype3["res_x"] = 58)] = "res_x";
  stattype3[(stattype3["def_x_x"] = 59)] = "def_x_x";
  stattype3[(stattype3["res_x_x"] = 60)] = "res_x_x";
  stattype3[(stattype3["critical_physical_inc_rate"] = 65)] = "critical_physical_inc_rate";
  stattype3[(stattype3["critical_magical_inc_rate"] = 66)] = "critical_magical_inc_rate";
  stattype3[(stattype3["def_pen_rate"] = 67)] = "def_pen_rate";
  stattype3[(stattype3["res_pen_rate"] = 68)] = "res_pen_rate";
  stattype3[(stattype3["physical_inc_rate"] = 69)] = "physical_inc_rate";
  stattype3[(stattype3["magical_inc_rate"] = 70)] = "magical_inc_rate";
  stattype3[(stattype3["self_shield_rate"] = 71)] = "self_shield_rate";
  stattype3[(stattype3["hit_rate"] = 72)] = "hit_rate";
  stattype3[(stattype3["dodge_rate"] = 73)] = "dodge_rate";
  stattype3[(stattype3["critical_hit_rate"] = 74)] = "critical_hit_rate";
  stattype3[(stattype3["critical_res_rate"] = 75)] = "critical_res_rate";
  stattype3[(stattype3["critical_dam_rate"] = 76)] = "critical_dam_rate";
  stattype3[(stattype3["attack_speed"] = 77)] = "attack_speed";
  stattype3[(stattype3["attack_speed_rate"] = 78)] = "attack_speed_rate";
  stattype3[(stattype3["move_speed"] = 79)] = "move_speed";
  stattype3[(stattype3["move_speed_rate"] = 80)] = "move_speed_rate";
  stattype3[(stattype3["prop_move_speed"] = 81)] = "prop_move_speed";
  stattype3[(stattype3["prop_move_speed_rate"] = 82)] = "prop_move_speed_rate";
  stattype3[(stattype3["vehicle_move_speed"] = 83)] = "vehicle_move_speed";
  stattype3[(stattype3["vehicle_move_speed_rate"] = 84)] = "vehicle_move_speed_rate";
  stattype3[(stattype3["ship_move_speed"] = 85)] = "ship_move_speed";
  stattype3[(stattype3["ship_move_speed_rate"] = 86)] = "ship_move_speed_rate";
  stattype3[(stattype3["fire_dam_rate"] = 87)] = "fire_dam_rate";
  stattype3[(stattype3["ice_dam_rate"] = 88)] = "ice_dam_rate";
  stattype3[(stattype3["electricity_dam_rate"] = 89)] = "electricity_dam_rate";
  stattype3[(stattype3["earth_dam_rate"] = 91)] = "earth_dam_rate";
  stattype3[(stattype3["dark_dam_rate"] = 92)] = "dark_dam_rate";
  stattype3[(stattype3["holy_dam_rate"] = 93)] = "holy_dam_rate";
  stattype3[(stattype3["elements_dam_rate"] = 94)] = "elements_dam_rate";
  stattype3[(stattype3["fire_res_rate"] = 95)] = "fire_res_rate";
  stattype3[(stattype3["ice_res_rate"] = 96)] = "ice_res_rate";
  stattype3[(stattype3["electricity_res_rate"] = 97)] = "electricity_res_rate";
  stattype3[(stattype3["earth_res_rate"] = 99)] = "earth_res_rate";
  stattype3[(stattype3["dark_res_rate"] = 100)] = "dark_res_rate";
  stattype3[(stattype3["holy_res_rate"] = 101)] = "holy_res_rate";
  stattype3[(stattype3["elements_res_rate"] = 102)] = "elements_res_rate";
  stattype3[(stattype3["self_cc_time_rate"] = 105)] = "self_cc_time_rate";
  stattype3[(stattype3["enemy_cc_time_rate"] = 106)] = "enemy_cc_time_rate";
  stattype3[(stattype3["identity_value1"] = 107)] = "identity_value1";
  stattype3[(stattype3["identity_value2"] = 108)] = "identity_value2";
  stattype3[(stattype3["identity_value3"] = 109)] = "identity_value3";
  stattype3[(stattype3["awakening_dam_rate"] = 110)] = "awakening_dam_rate";
  stattype3[(stattype3["item_drop_rate"] = 111)] = "item_drop_rate";
  stattype3[(stattype3["gold_rate"] = 112)] = "gold_rate";
  stattype3[(stattype3["exp_rate"] = 113)] = "exp_rate";
  stattype3[(stattype3["attack_power_addend"] = 123)] = "attack_power_addend";
  stattype3[(stattype3["attack_power_addend_2"] = 124)] = "attack_power_addend_2";
  stattype3[(stattype3["npc_species_humanoid_dam_rate"] = 125)] = "npc_species_humanoid_dam_rate";
  stattype3[(stattype3["npc_species_devil_dam_rate"] = 126)] = "npc_species_devil_dam_rate";
  stattype3[(stattype3["npc_species_substance_dam_rate"] = 127)] = "npc_species_substance_dam_rate";
  stattype3[(stattype3["npc_species_undead_dam_rate"] = 128)] = "npc_species_undead_dam_rate";
  stattype3[(stattype3["npc_species_plant_dam_rate"] = 129)] = "npc_species_plant_dam_rate";
  stattype3[(stattype3["npc_species_insect_dam_rate"] = 130)] = "npc_species_insect_dam_rate";
  stattype3[(stattype3["npc_species_spirit_dam_rate"] = 131)] = "npc_species_spirit_dam_rate";
  stattype3[(stattype3["npc_species_wild_beast_dam_rate"] = 132)] = "npc_species_wild_beast_dam_rate";
  stattype3[(stattype3["npc_species_mechanic_dam_rate"] = 133)] = "npc_species_mechanic_dam_rate";
  stattype3[(stattype3["npc_species_ancient_dam_rate"] = 134)] = "npc_species_ancient_dam_rate";
  stattype3[(stattype3["npc_species_god_dam_rate"] = 135)] = "npc_species_god_dam_rate";
  stattype3[(stattype3["npc_species_archfiend_dam_rate"] = 136)] = "npc_species_archfiend_dam_rate";
  stattype3[(stattype3["vitality"] = 137)] = "vitality";
  stattype3[(stattype3["ship_booter_speed"] = 138)] = "ship_booter_speed";
  stattype3[(stattype3["ship_wreck_speed_rate"] = 139)] = "ship_wreck_speed_rate";
  stattype3[(stattype3["island_speed_rate"] = 140)] = "island_speed_rate";
  stattype3[(stattype3["attack_power_sub_rate_1"] = 141)] = "attack_power_sub_rate_1";
  stattype3[(stattype3["attack_power_sub_rate_2"] = 142)] = "attack_power_sub_rate_2";
  stattype3[(stattype3["physical_inc_sub_rate_1"] = 143)] = "physical_inc_sub_rate_1";
  stattype3[(stattype3["physical_inc_sub_rate_2"] = 144)] = "physical_inc_sub_rate_2";
  stattype3[(stattype3["magical_inc_sub_rate_1"] = 145)] = "magical_inc_sub_rate_1";
  stattype3[(stattype3["magical_inc_sub_rate_2"] = 146)] = "magical_inc_sub_rate_2";
  stattype3[(stattype3["skill_damage_sub_rate_1"] = 147)] = "skill_damage_sub_rate_1";
  stattype3[(stattype3["skill_damage_sub_rate_2"] = 148)] = "skill_damage_sub_rate_2";
  stattype3[(stattype3["resource_recovery_rate"] = 149)] = "resource_recovery_rate";
  stattype3[(stattype3["weapon_dam"] = 151)] = "weapon_dam";
  stattype3[(stattype3["weapon_dam_x"] = 152)] = "weapon_dam_x";
  return stattype3;
})(stattype || {});
var zonelevel = /* @__PURE__ */ ((zonelevel2) => {
  zonelevel2[(zonelevel2["normal"] = 0)] = "normal";
  zonelevel2[(zonelevel2["hard"] = 1)] = "hard";
  zonelevel2[(zonelevel2["hellchaos"] = 2)] = "hellchaos";
  zonelevel2[(zonelevel2["challenge"] = 3)] = "challenge";
  zonelevel2[(zonelevel2["special"] = 4)] = "special";
  zonelevel2[(zonelevel2["extreme"] = 5)] = "extreme";
  return zonelevel2;
})(zonelevel || {});

// src/logger/statustracker.ts
var import_tiny_typed_emitter = require("tiny-typed-emitter");
var _partyTracker,
  _data,
  _isLive,
  _shouldUsePartyStatusEffectForEntity,
  shouldUsePartyStatusEffectForEntity_fn,
  _shouldUsePartyStatusEffect,
  shouldUsePartyStatusEffect_fn;
var _StatusTracker = class extends import_tiny_typed_emitter.TypedEmitter {
  constructor(partyTracker, data, isLive = true, debug = Boolean(process.env["DEV"])) {
    super();
    __privateAdd(this, _shouldUsePartyStatusEffectForEntity);
    __privateAdd(this, _shouldUsePartyStatusEffect);
    __publicField(this, "PartyStatusEffectRegistry");
    __publicField(this, "LocalStatusEffectRegistry");
    __privateAdd(this, _partyTracker, void 0);
    __privateAdd(this, _data, void 0);
    __privateAdd(this, _isLive, void 0);
    __publicField(this, "debug");
    __publicField(this, "trace", false);
    this.PartyStatusEffectRegistry = /* @__PURE__ */ new Map();
    this.LocalStatusEffectRegistry = /* @__PURE__ */ new Map();
    this.debug = debug;
    __privateSet(this, _partyTracker, partyTracker);
    __privateSet(this, _data, data);
    __privateSet(this, _isLive, isLive);
  }
  getStatusEffectRegistryForPlayer(id, t) {
    const registry = this.getPlayerRegistry(t);
    const ser = registry.get(id);
    if (ser) return ser;
    const newEntry = /* @__PURE__ */ new Map();
    registry.set(id, newEntry);
    return newEntry;
  }
  hasStatusEffectRegistryForPlayer(id, t) {
    const registry = this.getPlayerRegistry(t);
    return registry.has(id);
  }
  getPlayerRegistry(t) {
    switch (t) {
      case 1 /* Local */:
        return this.LocalStatusEffectRegistry;
      case 0 /* Party */:
        return this.PartyStatusEffectRegistry;
      default:
        break;
    }
    return this.LocalStatusEffectRegistry;
  }
  RemoveLocalObject(objectId, pktTime) {
    const registry = this.LocalStatusEffectRegistry.get(objectId);
    if (registry) {
      for (const [, se] of registry) {
        this.RemoveStatusEffect(objectId, se.instanceId, 1 /* Local */, void 0, pktTime);
      }
    }
    this.LocalStatusEffectRegistry.delete(objectId);
  }
  RemovePartyObject(objectId, pktTime) {
    const registry = this.PartyStatusEffectRegistry.get(objectId);
    if (registry) {
      for (const [, se] of registry) {
        this.RemoveStatusEffect(objectId, se.instanceId, 0 /* Party */, void 0, pktTime);
      }
    }
    this.PartyStatusEffectRegistry.delete(objectId);
  }
  RegisterStatusEffect(se) {
    const registry = this.getStatusEffectRegistryForPlayer(se.targetId, se.type);
    const oldEffect = registry.get(se.instanceId);
    if (oldEffect) {
      if (__privateGet(this, _isLive) && oldEffect.expirationTimer) {
        clearTimeout(oldEffect.expirationTimer);
        oldEffect.expirationTimer = void 0;
      }
    } else if (se.effectType === 0 /* Shield */) {
      this.emit("shieldApplied", se);
    }
    registry.set(se.instanceId, se);
    this.SetupStatusEffectTimeout(se);
  }
  HasAnyStatusEffect(id, t, statusEffectIds, pktTime) {
    if (!this.hasStatusEffectRegistryForPlayer(id, t)) return false;
    const registry = this.getStatusEffectRegistryForPlayer(id, t);
    for (const [, se] of registry) {
      if (!__privateGet(this, _isLive) && !this.IsReplayStatusEffectValidElseRemove(se, pktTime)) continue;
      for (const key of statusEffectIds) {
        if (key === se.statusEffectId) return true;
      }
    }
    return false;
  }
  /**
   * Check if a StatusEffect is still valid and remove it if not
   * @param {StatusEffect} se The StatusEffect to check
   * @param {Date} replayPktTime time of the currently processed pkt
   * @returns true if the StatusEffect is still valid, false if it was cleaned up
   */
  IsReplayStatusEffectValidElseRemove(se, replayPktTime) {
    if (se.expireAt === void 0 || se.expireAt.getTime() > replayPktTime.getTime()) {
      return true;
    }
    this.ExpireStatusEffectByTimeout(se);
    return false;
  }
  HasAnyStatusEffectFromParty(targetId, et, partyId, statusEffectIds, pktTime) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return false;
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    for (const [, effect] of registry) {
      if (!__privateGet(this, _isLive) && !this.IsReplayStatusEffectValidElseRemove(effect, pktTime)) continue;
      if (statusEffectIds.includes(effect.statusEffectId)) {
        const partyIdOfSource = __privateGet(this, _partyTracker).getPartyIdFromEntityId(effect.sourceId);
        if (this.ValidForWholeRaid(effect)) {
          return partyIdOfSource !== void 0;
        }
        if (partyIdOfSource === partyId) return true;
      }
    }
    return false;
  }
  RemoveStatusEffect(targetId, statusEffectId, et, reason, pktTime) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return;
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    const statusEffect = registry.get(statusEffectId);
    if (statusEffect) {
      if (__privateGet(this, _isLive)) {
        clearTimeout(statusEffect.expirationTimer);
        statusEffect.expirationTimer = void 0;
      }
      registry.delete(statusEffectId);
      if (reason === 4 /* beattacked */) {
        if (__privateGet(this, _isLive) || this.IsReplayStatusEffectValidElseRemove(statusEffect, pktTime))
          this.RegisterValueUpdate(statusEffect, statusEffect.value, 0);
      }
    }
    return statusEffect;
  }
  /**
   * Gets the status effects that are on targetId. Optionally filted to only return those from a specific source.
   * @param targetId Id of the object the target is on
   * @param et If the statuseffect is a local target or a party target
   * @param pktTime time of the pkt that triggers this check, it is used to expire statuseffects during replay mode
   * @param seSourceEntityId the source entityId that the status effect needs to come from, if all sources should be allowed set to undefined
   * @returns The status effects on targetId that meet the given criteria
   */
  GetStatusEffects(targetId, et, pktTime, seSourceEntityId) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return [];
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    if (!__privateGet(this, _isLive)) {
      for (const [, effect] of registry) {
        this.IsReplayStatusEffectValidElseRemove(effect, pktTime);
      }
    }
    const allSes = [...registry.values()];
    if (seSourceEntityId !== void 0) {
      return allSes.filter((se, _idx, _a) => {
        return se.sourceId === seSourceEntityId;
      });
    }
    return allSes;
  }
  GetStatusEffectsFromParty(targetId, et, partyId, pktTime) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return [];
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    if (!__privateGet(this, _isLive)) {
      for (const [, effect] of registry) {
        this.IsReplayStatusEffectValidElseRemove(effect, pktTime);
      }
    }
    return [...registry.values()].filter((value) => {
      if (this.ValidForWholeRaid(value)) {
        const partyIdofSource = __privateGet(this, _partyTracker).getPartyIdFromEntityId(value.sourceId);
        return partyIdofSource !== void 0;
      }
      return partyId === __privateGet(this, _partyTracker).getPartyIdFromEntityId(value.sourceId);
    });
  }
  Clear(pktTime) {
    let seCountInLocal = 0;
    for (const [, reg] of this.LocalStatusEffectRegistry) {
      for (const [, se] of reg) {
        this.RemoveStatusEffect(se.targetId, se.instanceId, se.type, void 0, pktTime);
      }
      seCountInLocal += reg.size;
    }
    let seCountInParty = 0;
    for (const [, reg] of this.PartyStatusEffectRegistry) {
      for (const [, se] of reg) {
        this.RemoveStatusEffect(se.targetId, se.instanceId, se.type, void 0, pktTime);
      }
      seCountInParty += reg.size;
    }
    if (this.trace) console.log("On Clear SE in local", seCountInLocal, "in party", seCountInParty);
    this.LocalStatusEffectRegistry.clear();
    this.PartyStatusEffectRegistry.clear();
  }
  UpdateDuration(instanceId, targetId, timestamp, et) {
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    const se = registry.get(instanceId);
    if (se) {
      const durationExtensionMs = timestamp - se.timestamp;
      if (__privateGet(this, _isLive) && se.expirationTimer) {
        if (this.trace) console.log("Clearing timeout for", se.instanceId, "because of duration change");
        clearTimeout(se.expirationTimer);
        se.expirationTimer = void 0;
      }
      if (se.expireAt) {
        const timeoutTime = se.expireAt.getTime() + Number(durationExtensionMs);
        const timeoutDelay = timeoutTime - se.pktTime.getTime();
        if (timeoutDelay > 0) {
          if (this.trace)
            console.log(
              "Extending duration by",
              durationExtensionMs,
              "ms",
              "New timeout delay",
              timeoutDelay,
              "from",
              se.expireAt.toISOString(),
              "to",
              new Date(timeoutTime).toISOString()
            );
          if (__privateGet(this, _isLive))
            se.expirationTimer = setTimeout(this.ExpireStatusEffectByTimeout.bind(this, se), timeoutDelay);
          se.expireAt = new Date(timeoutTime);
          se.timestamp = timestamp;
        } else {
          se.expireAt = void 0;
        }
      }
    } else if (this.debug) {
      console.error(
        "Tried to update duration for SE with instanceId",
        instanceId,
        " on target",
        targetId,
        "but where is no such SE registered"
      );
    }
  }
  SyncStatusEffect(instanceId, characterId, objectId, value, localCharacterId) {
    const usePartyStatusEffects = __privateMethod(
      this,
      _shouldUsePartyStatusEffect,
      shouldUsePartyStatusEffect_fn
    ).call(this, characterId, localCharacterId);
    const et = usePartyStatusEffects ? 0 /* Party */ : 1; /* Local */
    const targetId = usePartyStatusEffects ? characterId : objectId;
    if (!targetId) return;
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    const se = registry.get(instanceId);
    if (!se) return;
    const oldValue = se.value;
    se.value = value;
    this.RegisterValueUpdate(se, oldValue, value);
  }
  ValidForWholeRaid(se) {
    return (
      (se.buffCategory === 3 /* Battleitem */ ||
        se.buffCategory === 1 /* Bracelet */ ||
        se.buffCategory === 2) /* Etc */ &&
      se.category === 1 /* Debuff */ &&
      se.showType === 1 /* All */
    );
  }
  SetupStatusEffectTimeout(se) {
    if (se.expirationDelay > 0 && se.expirationDelay < 604800) {
      const startDate = se.pktTime.getTime() > se.occurTime.getTime() ? se.pktTime : se.occurTime;
      const expirationDelayInMs = Math.ceil(se.expirationDelay * 1e3);
      const timeoutDelay =
        startDate.getTime() + expirationDelayInMs + _StatusTracker.TIMEOUT_DELAY_MS - se.pktTime.getTime();
      se.expireAt = new Date(se.pktTime.getTime() + timeoutDelay);
      if (this.trace)
        console.log(
          "Setting up statuseffect expiration time for",
          se.name,
          se.instanceId,
          "to",
          se.expireAt.toISOString(),
          "with delay",
          timeoutDelay
        );
      if (__privateGet(this, _isLive))
        se.expirationTimer = setTimeout(this.ExpireStatusEffectByTimeout.bind(this, se), timeoutDelay);
    }
  }
  ExpireStatusEffectByTimeout(se) {
    if (this.debug) console.error("Triggered timeout on", se.name, "with iid", se.instanceId);
    this.RemoveStatusEffect(se.targetId, se.instanceId, se.type, void 0, /* @__PURE__ */ new Date());
  }
  RegisterValueUpdate(se, oldValue, newValue) {
    if (se.effectType === 0 /* Shield */) {
      this.emit("shieldChanged", se, oldValue, newValue);
    }
  }
  newPC(parsed, localCharacterId, pktTime) {
    const shouldUsePartyStatusEffects = __privateMethod(
      this,
      _shouldUsePartyStatusEffect,
      shouldUsePartyStatusEffect_fn
    ).call(this, parsed.pcStruct.characterId, localCharacterId);
    if (shouldUsePartyStatusEffects) {
      this.RemovePartyObject(parsed.pcStruct.characterId, pktTime);
    } else {
      this.RemoveLocalObject(parsed.pcStruct.playerId, pktTime);
    }
    for (const se of parsed.pcStruct.statusEffectDatas) {
      this.RegisterStatusEffect(
        this.buildStatusEffect(
          se,
          shouldUsePartyStatusEffects ? parsed.pcStruct.characterId : parsed.pcStruct.playerId,
          se.sourceId,
          shouldUsePartyStatusEffects ? 0 /* Party */ : 1 /* Local */,
          pktTime
        )
      );
    }
  }
  buildStatusEffect(se, targetId, sourceId, targetType, pktTime) {
    const newValCandidate1 = se.value ? se.value.readUInt32LE() : 0;
    const newValCandidate2 = se.value ? se.value.readUInt32LE(8) : 0;
    const newVal = newValCandidate1 < newValCandidate2 ? newValCandidate1 : newValCandidate2;
    let statusEffectCategory = 0; /* Other */
    let statusEffectBuffCategory = 0; /* Other */
    let showType = 0; /* Other */
    let seName = "Unknown";
    let statusEffectType = 1; /* Other */
    const effectInfo = __privateGet(this, _data).skillBuff.get(se.statusEffectId);
    if (effectInfo) {
      seName = effectInfo.name;
      switch (effectInfo.category) {
        case "debuff":
          statusEffectCategory = 1 /* Debuff */;
          break;
      }
      switch (effectInfo.buffcategory) {
        case "bracelet":
          statusEffectBuffCategory = 1 /* Bracelet */;
          break;
        case "etc":
          statusEffectBuffCategory = 2 /* Etc */;
          break;
        case "battleitem":
          statusEffectBuffCategory = 3 /* Battleitem */;
          break;
      }
      switch (effectInfo.iconshowtype) {
        case "all":
          showType = 1 /* All */;
          break;
      }
      switch (effectInfo.type) {
        case "shield":
          statusEffectType = 0 /* Shield */;
          break;
      }
    }
    return {
      instanceId: se.effectInstanceId,
      sourceId,
      statusEffectId: se.statusEffectId,
      targetId,
      type: targetType,
      dbTarget: effectInfo?.target ?? "none",
      value: newVal,
      buffCategory: statusEffectBuffCategory,
      category: statusEffectCategory,
      showType,
      expirationDelay: se.totalTime,
      expirationTimer: void 0,
      timestamp: se.endTick,
      expireAt: void 0,
      occurTime: se.occurTime,
      name: seName,
      pktTime,
      effectType: statusEffectType,
      stackCount: se.stackCount,
    };
  }
  getStatusEffects(sourceEntity, targetEntity, localCharacterId, pktTime) {
    const statusEffectsOnTarget = [];
    const statusEffectsOnSource = [];
    const shouldUsePartyBuffForSource = __privateMethod(
      this,
      _shouldUsePartyStatusEffectForEntity,
      shouldUsePartyStatusEffectForEntity_fn
    ).call(this, sourceEntity, localCharacterId);
    const sourceEffects = this.GetStatusEffects(
      shouldUsePartyBuffForSource ? sourceEntity.characterId : sourceEntity.entityId,
      shouldUsePartyBuffForSource ? 0 /* Party */ : 1 /* Local */,
      pktTime,
      void 0
    );
    for (const se of sourceEffects) statusEffectsOnSource.push([se.statusEffectId, se.sourceId, se.stackCount]);
    if (targetEntity) {
      const shouldUsePartyBuffForTarget = __privateMethod(
        this,
        _shouldUsePartyStatusEffectForEntity,
        shouldUsePartyStatusEffectForEntity_fn
      ).call(this, targetEntity, localCharacterId);
      const sourceIsInParty = __privateGet(this, _partyTracker).isEntityInParty(sourceEntity.entityId);
      const sourcePartyId = sourceIsInParty
        ? __privateGet(this, _partyTracker).getPartyIdFromEntityId(sourceEntity.entityId)
        : void 0;
      const targetEffects =
        sourceIsInParty && sourcePartyId
          ? this.GetStatusEffectsFromParty(
              shouldUsePartyBuffForTarget ? targetEntity.characterId : targetEntity.entityId,
              shouldUsePartyBuffForTarget ? 0 /* Party */ : 1 /* Local */,
              sourcePartyId,
              pktTime
            )
          : this.GetStatusEffects(
              shouldUsePartyBuffForTarget ? targetEntity.characterId : targetEntity.entityId,
              shouldUsePartyBuffForTarget ? 0 /* Party */ : 1 /* Local */,
              pktTime,
              sourceEntity.entityId
            );
      for (const se of targetEffects) {
        if (
          se.type === 1 /* Local */ &&
          se.category === 1 /* Debuff */ &&
          se.sourceId !== sourceEntity.entityId &&
          se.dbTarget === "self"
        )
          continue;
        statusEffectsOnTarget.push([se.statusEffectId, se.sourceId, se.stackCount]);
      }
    }
    return [statusEffectsOnSource, statusEffectsOnTarget];
  }
};
var StatusTracker = _StatusTracker;
_partyTracker = new WeakMap();
_data = new WeakMap();
_isLive = new WeakMap();
_shouldUsePartyStatusEffectForEntity = new WeakSet();
shouldUsePartyStatusEffectForEntity_fn = function (entity, localCharacterId) {
  if (entity.entityType !== 1 /* Player */) return false;
  const player = entity;
  return __privateMethod(this, _shouldUsePartyStatusEffect, shouldUsePartyStatusEffect_fn).call(
    this,
    player.characterId,
    localCharacterId
  );
};
_shouldUsePartyStatusEffect = new WeakSet();
shouldUsePartyStatusEffect_fn = function (characterId, localCharacterId) {
  const localPlayerIsInParty = __privateGet(this, _partyTracker).isCharacterInParty(localCharacterId);
  const affectedPlayerIsInParty = __privateGet(this, _partyTracker).isCharacterInParty(characterId);
  if (localPlayerIsInParty) {
    if (!affectedPlayerIsInParty || characterId === localCharacterId) {
      return false;
    }
    const localPlayerPartyId = __privateGet(this, _partyTracker).getPartyIdFromCharacterId(localCharacterId);
    const affectedPlayerPartyId = __privateGet(this, _partyTracker).getPartyIdFromCharacterId(characterId);
    if (localPlayerPartyId === affectedPlayerPartyId) {
      return true;
    }
    return false;
  }
  return false;
};
__publicField(StatusTracker, "TIMEOUT_DELAY_MS", 1e3);

// src/logger/entityTracker.ts
var EntityTracker = class {
  #pcIdMapper;
  #partyTracker;
  #statusTracker;
  #data;
  entities = /* @__PURE__ */ new Map();
  localPlayer;
  constructor(pcIdMapper, partyTracker, statusTracker, data) {
    this.#pcIdMapper = pcIdMapper;
    this.#partyTracker = partyTracker;
    this.#statusTracker = statusTracker;
    this.#data = data;
    this.localPlayer = {
      entityId: 0n,
      entityType: 1 /* Player */,
      name: "You",
      class: 0,
      gearLevel: 0,
      characterId: 0n,
      stance: 0,
      stats: /* @__PURE__ */ new Map(),
      skills: /* @__PURE__ */ new Map(),
      items: {},
    };
  }
  processNewPC(pkt) {
    const parsed = pkt.parsed;
    if (!parsed) return;
    const player = {
      entityId: parsed.pcStruct.playerId,
      entityType: 1 /* Player */,
      name: parsed.pcStruct.name,
      class: parsed.pcStruct.classId,
      gearLevel: parsed.pcStruct.maxItemLevel,
      characterId: parsed.pcStruct.characterId,
      stance: 0,
      stats: this.#data.getStatPairMap(parsed.pcStruct.statPair),
      skills: /* @__PURE__ */ new Map(),
      items: {},
    };
    this.entities.set(player.entityId, player);
    const oldEntityId = this.#pcIdMapper.getEntityId(player.characterId);
    if (oldEntityId) {
      this.#partyTracker.changeEntityId(oldEntityId, parsed.pcStruct.playerId);
    }
    this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    this.#partyTracker.completeEntry(player.characterId, player.entityId);
    this.#statusTracker.newPC(parsed, this.localPlayer.characterId, pkt.time);
    player.itemSet = this.getPlayerSetOptions(parsed.pcStruct.equipItemDataList);
    const equipList = [];
    parsed.pcStruct.equipItemDataList.forEach((item) => {
      if (item.id !== void 0 && item.slot !== void 0) equipList.push({ id: item.id, slot: item.slot });
    });
    player.items.equipList = equipList;
    const lifeToolList = [];
    parsed.pcStruct.equipLifeToolDataList.forEach((item) => {
      if (item.id !== void 0 && item.slot !== void 0) lifeToolList.push({ id: item.id, slot: item.slot });
    });
    player.items.lifeToolList = lifeToolList;
    return player;
  }
  processInitEnv(pkt) {
    const parsed = pkt.parsed;
    if (!parsed) return;
    if (this.localPlayer.entityId !== 0n) this.#partyTracker.changeEntityId(this.localPlayer.entityId, parsed.playerId);
    this.entities.clear();
    const player = {
      entityId: parsed.playerId,
      entityType: 1 /* Player */,
      name: this.localPlayer.name,
      class: this.localPlayer.class,
      gearLevel: this.localPlayer.gearLevel,
      characterId: this.localPlayer.characterId,
      stance: this.localPlayer.stance,
      stats: this.localPlayer.stats,
      skills: this.localPlayer.skills,
      items: this.localPlayer.items,
    };
    this.localPlayer = player;
    this.entities.set(player.entityId, player);
    this.#pcIdMapper.clear();
    this.#statusTracker.Clear(pkt.time);
    if (player.characterId !== 0n) this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    if (this.localPlayer && this.localPlayer.characterId && this.localPlayer.characterId > 0n)
      this.#partyTracker.completeEntry(this.localPlayer.characterId, parsed.playerId);
  }
  processInitPC(pkt) {
    const parsed = pkt.parsed;
    if (!parsed) return;
    this.entities.clear();
    const player = {
      entityId: parsed.playerId,
      entityType: 1 /* Player */,
      name: parsed.name,
      class: parsed.classId,
      gearLevel: parsed.gearLevel,
      characterId: parsed.characterId,
      stance: 0,
      stats: this.#data.getStatPairMap(parsed.statPair),
      skills: /* @__PURE__ */ new Map(),
      items: parsed.characterId === this.localPlayer.characterId ? this.localPlayer.items : {},
    };
    this.localPlayer = player;
    this.entities.set(player.entityId, player);
    this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    this.#partyTracker.setOwnName(parsed.name);
    this.#partyTracker.completeEntry(player.characterId, parsed.playerId);
    this.#statusTracker.RemoveLocalObject(parsed.playerId, pkt.time);
    for (const se of parsed.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.sourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(se, parsed.playerId, sourceEntity.entityId, 1 /* Local */, pkt.time)
      );
    }
    return player;
  }
  processNewNpc(pkt) {
    const parsed = pkt.parsed;
    if (!parsed) return;
    let isBoss = false;
    const npcData = this.#data.npc.get(parsed.npcStruct.typeId);
    if (
      npcData &&
      [6 /* boss */, 7 /* raid */, 9 /* epic_raid */, 10 /* commander */].includes(npcgrade[npcData.grade])
    ) {
      isBoss = true;
    }
    const npc = {
      entityId: parsed.npcStruct.objectId,
      entityType: 2 /* Npc */,
      name: npcData?.name ?? parsed.npcStruct.objectId.toString(16),
      typeId: parsed.npcStruct.typeId,
      isBoss,
      grade: npcData?.grade ?? "none",
      pushimmune: npcData?.pushimmune ?? false,
      stats: this.#data.getStatPairMap(parsed.npcStruct.statPair),
      level: parsed.npcStruct.level,
      balanceLevel: parsed.npcStruct.balanceLevel ?? parsed.npcStruct.level,
    };
    const esther = this.#data.getNpcEsther(parsed.npcStruct.typeId);
    if (esther !== void 0) {
      npc.entityType = 4 /* Esther */;
      npc.name = esther.name;
      npc.icon = esther.icon;
    }
    this.entities.set(npc.entityId, npc);
    this.#statusTracker.RemoveLocalObject(parsed.npcStruct.objectId, pkt.time);
    for (const se of parsed.npcStruct.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.sourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.npcStruct.objectId,
          sourceEntity.entityId,
          1 /* Local */,
          pkt.time
        )
      );
    }
    return npc;
  }
  processNewNpcSummon(pkt) {
    const parsed = pkt.parsed;
    if (!parsed) return;
    let isBoss = false;
    const npc = this.#data.npc.get(parsed.npcData.typeId);
    if (npc && ["boss", "raid", "epic_raid", "commander"].includes(npc.grade)) {
      isBoss = true;
    }
    const summon = {
      entityId: parsed.npcData.objectId,
      entityType: 3 /* Summon */,
      name: npc?.name ?? parsed.npcData.objectId.toString(16),
      ownerId: parsed.ownerId,
      typeId: parsed.npcData.typeId,
      isBoss,
      grade: npc?.grade ?? "none",
      pushimmune: npc?.pushimmune ?? false,
      stats: this.#data.getStatPairMap(parsed.npcData.statPair),
      level: parsed.npcData.level,
      balanceLevel: parsed.npcData.balanceLevel ?? parsed.npcData.level,
    };
    this.#statusTracker.RemoveLocalObject(parsed.npcData.objectId, pkt.time);
    for (const se of parsed.npcData.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.sourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.npcData.objectId,
          sourceEntity.entityId,
          1 /* Local */,
          pkt.time
        )
      );
    }
    this.entities.set(summon.entityId, summon);
    return summon;
  }
  getPlayerSetOptions(itemDataList) {
    const playerSet = /* @__PURE__ */ new Map();
    itemDataList.forEach((item) => {
      if (item.id && item.slot && item.slot >= 1 /* weapon */ && item.slot <= 6 /* armor_pauldron */) {
        const itemSet = this.#data.itemSet.items.get(item.id);
        if (itemSet) {
          let setEntry = playerSet.get(itemSet.setname);
          if (!setEntry) {
            setEntry = /* @__PURE__ */ new Map();
            playerSet.set(itemSet.setname, setEntry);
          }
          setEntry.set(itemSet.level, (setEntry.get(itemSet.level) ?? 0) + 1);
        }
      }
    });
    const effectiveOptions = [];
    playerSet.forEach((v, setName) => {
      const effect = this.#data.itemSet.seteffects.get(setName);
      if (!effect) return;
      let maxCountApplied = 0;
      let higherLevelCount = 0;
      for (const [level, count] of [...v.entries()].sort((a, b) => b[0] - a[0])) {
        const effectLevel = effect.get(level);
        if (!effectLevel) return;
        for (const [requiredLevel, options] of [...effectLevel.entries()]) {
          if (requiredLevel > maxCountApplied && count + higherLevelCount >= requiredLevel) {
            effectiveOptions.push(...options.options);
            maxCountApplied = Math.max(maxCountApplied, requiredLevel);
          }
        }
        higherLevelCount = count;
      }
    });
    return effectiveOptions;
  }
  getSourceEntity(id) {
    let entity = this.entities.get(id);
    if (entity?.entityType === 5 /* Projectile */) {
      id = entity.ownerId;
    } else if (entity?.entityType === 3 /* Summon */) {
      id = entity.ownerId;
    }
    entity = this.entities.get(id);
    if (entity) return entity;
    const newEntity = {
      entityId: id,
      entityType: 2 /* Npc */,
      name: id.toString(16),
      stats: /* @__PURE__ */ new Map(),
    };
    this.entities.set(id, newEntity);
    return newEntity;
  }
  guessIsPlayer(entity, skillid) {
    const classId = this.#data.getSkillClassId(skillid);
    if (classId !== 0) {
      let newEntity;
      if (entity.entityType === 1 /* Player */) {
        const player = entity;
        if (player.class === classId) return player;
        newEntity = {
          entityId: player.entityId,
          entityType: 1 /* Player */,
          name: player.name,
          class: classId,
          gearLevel: player.gearLevel,
          characterId: player.characterId,
          stance: player.stance,
          stats: player.stats,
          skills: /* @__PURE__ */ new Map(),
          items: {},
        };
      } else if (entity.entityType === 0 /* Unknown */) {
        newEntity = {
          entityId: entity.entityId,
          entityType: 1 /* Player */,
          name: entity.name,
          class: classId,
          gearLevel: 0,
          characterId: 0n,
          stance: 0,
          stats: /* @__PURE__ */ new Map(),
          skills: /* @__PURE__ */ new Map(),
          items: {},
        };
      } else return entity;
      this.entities.set(entity.entityId, newEntity);
      return newEntity;
    }
    return entity;
  }
  getOrCreateEntity(entityId) {
    let ent = this.entities.get(entityId);
    if (!ent) {
      ent = { entityId, entityType: 0 /* Unknown */, name: entityId.toString(16), stats: /* @__PURE__ */ new Map() };
      this.entities.set(entityId, ent);
    }
    return ent;
  }
  getEntityByName(name116) {
    return [...this.entities.values()].find((e) => e.name === name116);
  }
};

// src/data.ts
var MeterData = class {
  dbPath = "";
  modulePath;
  enums;
  npc;
  PCData;
  skill;
  skillBuff;
  skillEffect;
  skillFeature;
  combatEffect;
  esther;
  itemSet;
  statQueryFilter;
  constructor(meterDataPath = "./meter-core/data") {
    this.modulePath = meterDataPath;
    this.enums = /* @__PURE__ */ new Map();
    this.npc = /* @__PURE__ */ new Map();
    this.PCData = /* @__PURE__ */ new Map();
    this.skill = /* @__PURE__ */ new Map();
    this.skillBuff = /* @__PURE__ */ new Map();
    this.skillEffect = /* @__PURE__ */ new Map();
    this.skillFeature = /* @__PURE__ */ new Map();
    this.combatEffect = /* @__PURE__ */ new Map();
    this.esther = [];
    this.itemSet = { items: /* @__PURE__ */ new Map(), seteffects: /* @__PURE__ */ new Map() };
    this.statQueryFilter = { zone: /* @__PURE__ */ new Set(), raid: /* @__PURE__ */ new Set() };
  }
  processEnumData(data) {
    for (const [ename, edata] of Object.entries(data)) {
      const en = /* @__PURE__ */ new Map();
      for (const [k, v] of Object.entries(edata)) en.set(k, v);
      this.enums.set(ename, en);
    }
  }
  processNpcData(data) {
    for (const npc of Object.values(data)) {
      this.npc.set(npc.id, npc);
    }
  }
  processPCData(data) {
    for (const [k, v] of Object.entries(data)) {
      this.PCData.set(parseInt(k), v);
    }
  }
  processSkillData(data) {
    for (const skill of Object.values(data)) {
      this.skill.set(skill.id, skill);
    }
  }
  processSkillBuffData(data) {
    for (const skillBuff of Object.values(data)) {
      this.skillBuff.set(skillBuff.id, skillBuff);
    }
  }
  processSkillBuffEffectData(data) {
    for (const skillEffect of Object.values(data)) {
      this.skillEffect.set(skillEffect.id, skillEffect);
    }
  }
  processSkillFeature(data) {
    for (const skillFeature of Object.values(data)) {
      const m = /* @__PURE__ */ new Map();
      for (const levelData of Object.values(skillFeature.tripods)) {
        m.set(levelData.key, levelData);
      }
      this.skillFeature.set(skillFeature.skillid, m);
    }
  }
  processCombatEffectData(data) {
    for (const combatEffect of Object.values(data)) {
      this.combatEffect.set(combatEffect.id, combatEffect);
    }
  }
  processEsther(data) {
    this.esther = Object.values(data);
  }
  processItemSet(data) {
    for (const [setName, setNameData] of Object.entries(data)) {
      const m = /* @__PURE__ */ new Map();
      for (const [level, setLevelData] of Object.entries(setNameData)) {
        const m2 = /* @__PURE__ */ new Map();
        for (const [count, setCountData] of Object.entries(setLevelData.value)) {
          m2.set(parseInt(count), setCountData);
        }
        m.set(parseInt(level), m2);
        for (const itemid of Object.values(setLevelData.itemids)) {
          this.itemSet.items.set(itemid, { setname: setName, level: parseInt(level) });
        }
      }
      this.itemSet.seteffects.set(setName, m);
    }
  }
  procesStatQueryFilter(data) {
    this.statQueryFilter.zone = new Set(data.zone);
    this.statQueryFilter.raid = new Set(data.raid);
  }
  getNpcName(id) {
    return this.npc.get(id)?.name || "";
  }
  getClassName(id) {
    return this.PCData.get(id) || "";
  }
  getSkillName(id) {
    return this.skill.get(id)?.name || "";
  }
  getSkillClassId(id) {
    return this.skill.get(id)?.classid || 0;
  }
  getSkillEffectComment(id) {
    return this.skillEffect.get(id)?.comment || "";
  }
  getSkillEffectDirectionalMask(id) {
    return this.skillEffect.get(id)?.directionalmask || 0;
  }
  getSkillEsther(skillId) {
    for (const esther of this.esther) {
      if (esther.skills.includes(skillId)) return esther;
    }
    return;
  }
  getNpcEsther(npcId) {
    for (const esther of this.esther) {
      if (esther.npcs.includes(npcId)) return esther;
    }
    return;
  }
  getStatusEffectHeaderData(buffId) {
    const buff = this.skillBuff.get(buffId);
    if (!buff || buff.iconshowtype === "none") return;
    let buffcategory;
    if (buff.buffcategory === "ability" && [501, 502, 503, 504, 505].includes(buff.uniquegroup)) {
      buffcategory = "dropsofether";
    } else {
      buffcategory = buff.buffcategory;
    }
    const statusEffect = {
      target: buff.target === "none" ? 0 /* OTHER */ : buff.target === "self" ? 2 /* SELF */ : 1 /* PARTY */,
      // self+party
      category: buff.category,
      buffcategory,
      bufftype: this.getStatusEffectBuffTypeFlags(buff),
      uniquegroup: buff.uniquegroup,
      source: {
        name: buff.name,
        desc: buff.desc,
        icon: buff.icon,
      },
    };
    if (buffcategory === "classskill" || buffcategory === "identity") {
      let buffSourceSkill;
      if (buff.sourceskill) {
        buffSourceSkill = this.skill.get(buff.sourceskill);
        if (buffSourceSkill) statusEffect.source.skill = buffSourceSkill;
      } else {
        const skillId = Math.floor(buffId / 100) * 10;
        buffSourceSkill = this.skill.get(skillId);
        if (!buffSourceSkill) {
          const skillId2 = Math.floor(buff.uniquegroup / 100) * 10;
          buffSourceSkill = this.skill.get(skillId2);
        }
        if (buffSourceSkill) statusEffect.source.skill = buffSourceSkill;
      }
      if (buffSourceSkill) statusEffect.source.skill = buffSourceSkill;
    } else if (buffcategory === "ability" && buff.uniquegroup !== 0) {
      let buffSourceSkill;
      if (buff.sourceskill) {
        buffSourceSkill = this.skill.get(buff.sourceskill);
        if (buffSourceSkill) statusEffect.source.skill = buffSourceSkill;
      } else {
        const skillId = Math.floor(buffId / 100) * 10;
        buffSourceSkill = this.skill.get(skillId);
        if (!buffSourceSkill) {
          const skillId2 = Math.floor(buff.uniquegroup / 100) * 10;
          buffSourceSkill = this.skill.get(skillId2);
        }
      }
      if (buffSourceSkill) statusEffect.source.skill = buffSourceSkill;
    } else if (buffcategory === "set" && buff.setname) {
      statusEffect.source.setname = buff.setname;
    }
    return statusEffect;
  }
  getStatusEffectBuffTypeFlags(buff) {
    let bufftype = 0; /* NONE */
    if (
      [
        "weaken_defense",
        "weaken_resistance",
        "skill_damage_amplify",
        "beattacked_damage_amplify",
        "skill_damage_amplify_attack",
        "directional_attack_amplify",
        "instant_stat_amplify",
        "attack_power_amplify",
        "instant_stat_amplify_by_contents",
      ].includes(buff.type)
    ) {
      bufftype |= 1 /* DMG */;
    } else if (["move_speed_down", "all_speed_down"].includes(buff.type)) {
      bufftype |= 8 /* MOVESPEED */;
    } else if (["reset_cooldown"].includes(buff.type)) {
      bufftype |= 128 /* COOLDOWN */;
    } else if (["change_ai_point", "ai_point_amplify"].includes(buff.type)) {
      bufftype |= 256 /* STAGGER */;
    } else if (["increase_identity_gauge"].includes(buff.type)) {
      bufftype |= 64 /* RESOURCE */;
    }
    buff.passiveoption.forEach((option) => {
      const addon = addontype[option.type];
      if (option.type === "stat") {
        const stat = stattype[option.keystat];
        if ([20 /* mastery */, 26 /* mastery_x */, 54 /* paralyzation_point_rate */].includes(stat)) {
          bufftype |= 256 /* STAGGER */;
        }
        if ([18 /* rapidity */, 24 /* rapidity_x */, 53 /* cooldown_reduction */].includes(stat)) {
          bufftype |= 128 /* COOLDOWN */;
        }
        if (
          [
            28 /* max_mp */, 30 /* max_mp_x */, 32 /* max_mp_x_x */, 37 /* normal_mp_recovery */,
            38 /* combat_mp_recovery */, 39 /* normal_mp_recovery_rate */, 40 /* combat_mp_recovery_rate */,
            149 /* resource_recovery_rate */,
          ].includes(stat)
        ) {
          bufftype |= 64 /* RESOURCE */;
        }
        if (
          [
            6 /* con */, 10 /* con_x */, 27 /* max_hp */, 29 /* max_hp_x */, 31 /* max_hp_x_x */,
            33 /* normal_hp_recovery */, 34 /* combat_hp_recovery */, 35 /* normal_hp_recovery_rate */,
            36 /* combat_hp_recovery_rate */, 41 /* self_recovery_rate */, 42 /* drain_hp_dam_rate */,
            137 /* vitality */,
          ].includes(stat)
        ) {
          bufftype |= 16 /* HP */;
        }
        if (
          (55 /* def */ <= stat && stat <= 70) /* magical_inc_rate */ ||
          [19 /* endurance */, 25 /* endurance_x */].includes(stat)
        ) {
          if ((buff.category === "buff" && option.value >= 0) || (buff.category === "debuff" && option.value <= 0)) {
            bufftype |= 1 /* DMG */;
          } else bufftype |= 32 /* DEFENSE */;
        }
        if (79 /* move_speed */ <= stat && stat <= 84 /* vehicle_move_speed_rate */) {
          bufftype |= 8 /* MOVESPEED */;
        }
        if (
          [77 /* attack_speed */, 78 /* attack_speed_rate */, 18 /* rapidity */, 24 /* rapidity_x */].includes(stat)
        ) {
          bufftype |= 4 /* ATKSPEED */;
        }
        if ([74 /* critical_hit_rate */, 15 /* criticalhit */, 21 /* criticalhit_x */].includes(stat)) {
          bufftype |= 2 /* CRIT */;
        }
        if (
          (141 /* attack_power_sub_rate_1 */ <= stat && stat <= 148) /* skill_damage_sub_rate_2 */ ||
          (87 /* fire_dam_rate */ <= stat && stat <= 94) /* elements_dam_rate */ ||
          [
            3 /* str */, 4 /* agi */, 5 /* int */, 7 /* str_x */, 8 /* agi_x */, 9 /* int_x */,
            47 /* char_attack_dam */, 49 /* attack_power_rate */, 50 /* skill_damage_rate */,
            51 /* attack_power_rate_x */, 52 /* skill_damage_rate_x */, 72 /* hit_rate */, 73 /* dodge_rate */,
            76 /* critical_dam_rate */, 110 /* awakening_dam_rate */, 123 /* attack_power_addend */,
            151 /* weapon_dam */,
          ].includes(stat)
        ) {
          if ((buff.category === "buff" && option.value >= 0) || (buff.category === "debuff" && option.value <= 0)) {
            bufftype |= 1 /* DMG */;
          } else bufftype |= 32 /* DEFENSE */;
        }
      } else if (6 /* skill_critical_ratio */ === addon) {
        bufftype |= 2 /* CRIT */;
      } else if (
        [
          5 /* skill_damage */, 29 /* class_option */, 34 /* skill_group_damage */, 7 /* skill_critical_damage */,
          8 /* skill_penetration */,
        ].includes(addon)
      ) {
        if ((buff.category === "buff" && option.value >= 0) || (buff.category === "debuff" && option.value <= 0)) {
          bufftype |= 1 /* DMG */;
        } else bufftype |= 32 /* DEFENSE */;
      } else if ([27 /* skill_cooldown_reduction */, 35 /* skill_group_cooldown_reduction */].includes(addon)) {
        bufftype |= 128 /* COOLDOWN */;
      } else if ([26 /* skill_mana_reduction */, 25 /* mana_reduction */].includes(addon)) {
        bufftype |= 64 /* RESOURCE */;
      } else if (4 /* combat_effect */ === addon) {
        const combatEffect = this.combatEffect.get(option.keyindex);
        if (!combatEffect) return;
        combatEffect.effects.forEach((effect) => {
          effect.actions.forEach((action) => {
            const actionType = combateffectactiontype[action.type];
            if (
              [
                1 /* modify_damage */, 2 /* modify_final_damage */, 4 /* modify_critical_multiplier */,
                5 /* modify_penetration */, 6 /* modify_penetration_when_critical */,
                19 /* modify_penetration_addend */, 20 /* modify_penetration_addend_when_critical */,
                16 /* modify_damage_shield_multiplier */,
              ].includes(actionType)
            ) {
              bufftype |= 1 /* DMG */;
            } else if (3 /* modify_critical_ratio */ === actionType) {
              bufftype |= 2 /* CRIT */;
            }
          });
        });
      }
    });
    return bufftype;
  }
  getStatPairMap(statpair) {
    const map = /* @__PURE__ */ new Map();
    statpair.forEach((pair) => {
      map.set(pair.statType, pair.value);
    });
    return map;
  }
  isCombatEffectConditionsValid({ effect, self, target, caster, skill, hitOption, targetCount }) {
    let conditionValid = true;
    effect.conditions.forEach((condition) => {
      if (!conditionValid) return;
      const actor = combateffectactortype[condition.actor];
      switch (combateffectconditiontype[condition.type]) {
        case 21 /* target_count */:
          if (!targetCount || targetCount !== condition.arg) conditionValid = false;
          break;
        case 1 /* current_skill */:
          if (!skill || skill.id === condition.arg) conditionValid = false;
          break;
        case 16 /* pc */:
          if (actor === 1 /* self */) {
            if (!self || self.entityType !== 1 /* Player */) conditionValid = false;
          } else if (actor === 2 /* target */) {
            if (!target || target.entityType !== 1 /* Player */) conditionValid = false;
          } else if (actor === 3 /* caster */) {
            if (!caster || caster.entityType !== 1 /* Player */) conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case 22 /* skill_identity_category */:
          if (!skill || !skill.identitycategory || identitycategory[skill.identitycategory] != condition.arg)
            conditionValid = false;
          break;
        case 13 /* abnormal_move_immune */:
          if (!target || ![2 /* Npc */, 3 /* Summon */].includes(target.entityType) || !target.pushimmune)
            conditionValid = false;
          break;
        case 15 /* abnormal_move_all */:
          conditionValid = false;
          break;
        case 11 /* abnormal_move */:
          conditionValid = false;
          break;
        case 12 /* abnormal_status */:
          conditionValid = false;
          break;
        case 25 /* current_skill_group */:
          if (!skill || !skill.groups || !skill.groups.includes(condition.arg)) conditionValid = false;
          break;
        case 2 /* hp_less */:
          if (actor === 1 /* self */) {
            if (
              !self ||
              Number((self.stats.get(1 /* hp */) ?? 0n) / (self.stats.get(27 /* max_hp */) ?? 0n)) >=
                condition.arg / 100
            )
              conditionValid = false;
          } else if (actor === 2 /* target */) {
            if (
              !target ||
              Number((target.stats.get(1 /* hp */) ?? 0n) / (target.stats.get(27 /* max_hp */) ?? 0n)) >=
                condition.arg / 100
            )
              conditionValid = false;
          } else if (actor === 3 /* caster */) {
            if (
              !caster ||
              Number((caster.stats.get(1 /* hp */) ?? 0n) / (caster.stats.get(27 /* max_hp */) ?? 0n)) >=
                condition.arg / 100
            )
              conditionValid = false;
          } else {
            conditionValid = false;
            break;
          }
          break;
        case 34 /* npc_scaled_level_less */:
          if (actor === 2 /* target */) {
            if (target && [2 /* Npc */, 3 /* Summon */].includes(target.entityType)) {
              if (target.balanceLevel > condition.arg) conditionValid = false;
            } else conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case 6 /* npc_grade_less */:
          if (actor === 2 /* target */) {
            if (target && [2 /* Npc */, 3 /* Summon */].includes(target.entityType)) {
              const grade = npcgrade[target.grade];
              if (!grade || grade > condition.arg) conditionValid = false;
            } else conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case 7 /* npc_grade_greater */:
          if (actor === 2 /* target */) {
            if (target && [2 /* Npc */, 3 /* Summon */].includes(target.entityType)) {
              const grade = npcgrade[target.grade];
              if (!grade || grade < condition.arg) conditionValid = false;
            } else conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case 27 /* identity_stance */:
          if (actor === 1 /* self */) {
            if (!self || self.entityType !== 1 /* Player */ || self.stance !== condition.arg) conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case 24 /* directional_attack */:
          if (!hitOption || ((hitOption + 1) & condition.arg) === 0) conditionValid = false;
          break;
        default:
          conditionValid = false;
          break;
      }
    });
    return conditionValid;
  }
  isSupportClassId(id) {
    return id === 105 || id === 204 || id === 602;
  }
  isBattleItem(id, type) {
    const itemcategory = this.skillEffect.get(id)?.itemcategory;
    switch (type) {
      case "attack":
        return itemcategory === "useup_battle_item_common_attack";
      case "buff":
        return itemcategory === "useup_battle_item_common_buff";
      case "function":
        return itemcategory === "useup_battle_item_common_function";
      default:
        return typeof itemcategory === "string";
    }
  }
  getBattleItemName(id) {
    return this.skillEffect.get(id)?.itemname || "";
  }
  loadDbs(basePath) {
    this.dbPath = basePath;
    this.processEnumData(
      JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "Enums.json"), "utf-8"))
    );
    this.processNpcData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "Npc.json"), "utf-8")));
    this.processPCData(
      JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "PCData.json"), "utf-8"))
    );
    this.processSkillData(
      JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "Skill.json"), "utf-8"))
    );
    this.processSkillBuffData(
      JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "SkillBuff.json"), "utf-8"))
    );
    this.processSkillBuffEffectData(
      JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "SkillEffect.json"), "utf-8"))
    );
    this.processSkillFeature(
      JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "SkillFeature.json"), "utf-8"))
    );
    this.processCombatEffectData(
      JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "CombatEffect.json"), "utf-8"))
    );
    this.processEsther(
      JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "Esther.json"), "utf-8"))
    );
    this.processItemSet(
      JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "ItemSet.json"), "utf-8"))
    );
    this.procesStatQueryFilter(
      JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "StatQueryFilter.json"), "utf-8"))
    );
  }
};

// src/decompressor.ts
var import_lz4_napi = require("lz4-napi");
var import_oodle = __toESM(require("oodle"));
var import_snappyjs = require("snappyjs");
var Decompressor = class {
  oodle;
  xorTable;
  constructor(oodle_state2, xorTable2) {
    this.oodle = new import_oodle.default.Oodle(oodle_state2);
    if (xorTable2.length != 256) throw new Error("Invalid xorTable length");
    this.xorTable = xorTable2;
  }
  decrypt(data, xorShift, compression, xor) {
    if (xor) this.xor(data, xorShift);
    let out;
    switch (compression) {
      case 0: {
        out = data;
        break;
      }
      case 1: {
        out = (0, import_lz4_napi.uncompressSync)(data);
        break;
      }
      case 2: {
        out = (0, import_snappyjs.uncompress)(data);
        break;
      }
      case 3: {
        if (data.length < 4)
          throw new Error(`Invalid oodle packet: size=${data.length}, comp=${compression}, opcode=${xorShift}`);
        out = this.oodle.decode(data.subarray(4), data.readUInt32LE(0));
        break;
      }
      default:
        throw new Error(`Unknown compression: ${compression}`);
    }
    if (out.length < 16) throw new Error(`Invalid packet: size=${out.length}, comp=${compression}, opcode=${xorShift}`);
    return out.subarray(16);
  }
  xor(data, seed) {
    for (let i = 0; i < data.length; i++) data[i] ^= this.xorTable[seed++ % 256];
  }
};

// src/logger/logger.ts
var import_tiny_typed_emitter3 = require("tiny-typed-emitter");

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
var import_tiny_typed_emitter2 = require("tiny-typed-emitter");
var PKTStream = class extends import_tiny_typed_emitter2.TypedEmitter {
  #decompressor;
  constructor(decompressor2) {
    super();
    this.#decompressor = decompressor2;
  }
  /**
   * @returns `false` if packet is malformed
   */
  read(buf) {
    try {
      if (buf.length < 8) return false;
      const xor = buf.readUInt8(7);
      if (xor > 2) return false;
      const compression = buf.readUInt8(6);
      if (compression > 3) return false;
      const data = buf.subarray(8);
      const opcode59 = buf.readUInt16LE(4);
      const pkt = mapping.get(opcode59);
      if (pkt) {
        const [name116, read168] = pkt;
        this.emit(
          name116,
          new PKT(Buffer.from(data), opcode59, compression, Boolean(xor), this.#decompressor, read168)
        );
      }
      this.emit("*", data, opcode59, compression, Boolean(xor));
    } catch (e) {
      return false;
    }
  }
};
var PKT = class {
  #data;
  #opcode;
  #compression;
  #xor;
  #decompressor;
  #read;
  constructor(data, opcode59, compression, xor, decompressor2, read168) {
    this.#data = data;
    this.#opcode = 0;
    this.#compression = compression;
    this.#xor = xor;
    this.#decompressor = decompressor2;
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
var import_fs2 = require("fs");

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
var import_fs3 = require("fs");

// src/packets/log/version.ts
var version = 5;

// src/logger/logger.ts
var Logger = class extends import_tiny_typed_emitter3.TypedEmitter {
  //Only common behaviour is the emitted logStreamEvent
};
var LiveLogger = class extends Logger {
  #decompressor;
  #logWriter;
  writeLogFile = false;
  constructor(stream2, decompressor2, filepath) {
    super();
    this.#decompressor = decompressor2;
    if (filepath) {
      this.#logWriter = (0, import_fs2.createWriteStream)(filepath, { highWaterMark: 0 });
    }
    const versionBuffer = Buffer.allocUnsafe(HEADER_VERSION_SIZE);
    versionBuffer.writeUIntLE(version, 0, HEADER_VERSION_SIZE);
    this.#logWriter?.write(versionBuffer);
    stream2.on("*", this.handlePkt.bind(this));
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
          const logEvent2 = new LogEvent(parsed, logId2, writeLog);
          this.emit(logName, logEvent2);
          this.emit("*", logName, logEvent2);
          if (this.writeLogFile || logId2 === 9) this.appendLog(logEvent2);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
  appendLog(logEvent2) {
    if (this.#logWriter && logEvent2.serialized) this.#logWriter.write(logEvent2.serialized);
  }
};
var ReplayLogger = class extends Logger {
  readLogByChunk(filepath) {
    const pktBuffer = new PacketBuffer();
    const logReader = (0, import_fs3.createReadStream)(filepath);
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
        const logEvent2 = new LogEvent(data, logId2, new Date(time), (reader) => readLog(reader, version2), writeLog);
        this.emit(logName, logEvent2);
        this.emit("*", logName, logEvent2);
      }
    } catch (e) {
      console.error(e);
    }
  }
  readVersion(b) {
    return b.readUintLE(0, HEADER_VERSION_SIZE);
  }
};

// src/pkt-capture.ts
var import_cap = __toESM(require("cap"));
var import_child_process = require("child_process");
var import_net = require("net");
var import_os = require("os");
var import_raw_socket_sniffer = require("raw-socket-sniffer");
var import_tiny_typed_emitter4 = require("tiny-typed-emitter");

// src/tcp_tracker.ts
var import_stream61 = require("stream");

// src/ip_tracker.ts
var import_stream60 = require("stream");
var MAX_ID = 65536;
var IPTracker = class extends import_stream60.EventEmitter {
  next_id = -1;
  stored = {};
  track(packet, ip, tcp) {
    if (this.next_id === -1) {
      this.set_current_id(ip.info.id);
    }
    if (Math.abs(this.next_id - ip.info.id) >= 10) {
      this.increment_id();
    }
    this.stored[ip.info.id] = { packet, ip, tcp };
    if (this.next_id in this.stored) {
      let segment = this.stored[this.next_id];
      while (segment !== void 0) {
        this.emit("segment", segment.packet, segment.ip, segment.tcp);
        delete this.stored[this.next_id];
        this.increment_id();
        segment = this.stored[this.next_id];
      }
    }
    console.log(ip.info.id, this.next_id, ip.info.id === this.next_id, Object.keys(this.stored));
  }
  increment_id() {
    this.next_id = (this.next_id + 1) % MAX_ID;
  }
  set_current_id(current_id) {
    this.next_id = current_id % MAX_ID;
  }
  set_next_id(current_id) {
    this.next_id = (current_id + 1) % MAX_ID;
  }
};

// src/tcp_tracker.ts
var TCPTracker = class extends import_stream61.EventEmitter {
  sessions;
  listen_options;
  constructor(listen_options) {
    super();
    this.sessions = {};
    this.listen_options = listen_options;
    import_stream61.EventEmitter.call(this);
  }
  track_packet(buffer, ip, tcp) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    let dst = ip.info.dstaddr + ":" + tcp.info.dstport;
    let key;
    if (src < dst) {
      key = src + "-" + dst;
    } else {
      key = dst + "-" + src;
    }
    let is_new = false;
    let session = this.sessions[key];
    if (!session) {
      if (!((tcp.info.flags & 8) /* psh */) && !((tcp.info.flags & 2) /* syn */)) return;
      is_new = true;
      session = new TCPSession(this.listen_options);
      this.sessions[key] = session;
      session.on("end", () => {
        delete this.sessions[key];
        console.info(
          `[meter-core/tcp-tracker] - Remove session ${session?.src}->${session?.dst} (Total: ${
            Object.keys(this.sessions).length
          })`
        );
      });
    }
    session.track(buffer, ip, tcp);
    if (is_new) {
      this.emit("session", session);
    }
  }
};
var TCPSession = class extends import_stream61.EventEmitter {
  state;
  src;
  dst;
  send_seqno;
  // Current seq number flushed
  send_buffers;
  recv_seqno;
  // Current seq number flushed
  recv_buffers;
  listen_options;
  is_ignored;
  packetBuffer;
  send_ip_tracker;
  recv_ip_tracker;
  skip_socks5;
  in_handshake;
  constructor(listen_options) {
    super();
    this.listen_options = listen_options;
    this.state = "NONE";
    this.send_seqno = 0;
    this.send_buffers = [];
    this.recv_seqno = 0;
    this.recv_buffers = [];
    this.is_ignored = false;
    this.packetBuffer = new PacketBuffer();
    this.send_ip_tracker = new IPTracker();
    this.recv_ip_tracker = new IPTracker();
    this.send_ip_tracker.on("segment", this.handle_send_segment.bind(this));
    this.recv_ip_tracker.on("segment", this.handle_recv_segment.bind(this));
    this.skip_socks5 = 0;
    this.in_handshake = true;
    import_stream61.EventEmitter.call(this);
  }
  track(buffer, ip, tcp) {
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    let dst = ip.info.dstaddr + ":" + tcp.info.dstport;
    if (this.state === "NONE") {
      const isSrcDeviceIp = isDeviceIp(ip.info.srcaddr, this.listen_options);
      const isDstDeviceIp = isDeviceIp(ip.info.dstaddr, this.listen_options);
      if (isSrcDeviceIp && this.listen_options.port === tcp.info.dstport) {
        this.src = src;
        this.dst = dst;
      } else if (this.listen_options.port === tcp.info.srcport && isDstDeviceIp) {
        this.src = dst;
        this.dst = src;
      } else if (!isSrcDeviceIp && !isDstDeviceIp) {
        if (this.listen_options.port === tcp.info.dstport) {
          this.src = src;
          this.dst = dst;
        } else if (this.listen_options.port === tcp.info.srcport) {
          this.src = dst;
          this.dst = src;
        } else {
          this.src = src;
          this.dst = dst;
          this.is_ignored = true;
        }
      } else {
        this.src = src;
        this.dst = dst;
        this.is_ignored = true;
      }
      this.state = "ESTAB";
    }
    if (tcp.info.flags & 4 /* rst */ || tcp.info.flags & 1 /* fin */) {
      this.ESTAB(buffer, ip, tcp);
      this.emit("end", this);
    } else {
      this.ESTAB(buffer, ip, tcp);
    }
  }
  ESTAB(buffer, ip, tcp) {
    if (this.is_ignored) return;
    let src = ip.info.srcaddr + ":" + tcp.info.srcport;
    if (src === this.src) {
      this.handle_recv_segment(buffer, ip, tcp);
    } else if (src === this.dst) {
      this.handle_send_segment(buffer, ip, tcp);
    } else {
      console.error("[meter-core/tcp_tracker] - non-matching packet in session: ip=" + ip + "tcp=" + tcp);
    }
  }
  flush_buffers(ackno, direction) {
    if (direction === "recv") {
      if (this.recv_seqno === 0) {
        this.recv_seqno = ackno;
      }
      const flush_payload = TCPSession.get_flush(this.recv_buffers, this.recv_seqno, ackno);
      if (!flush_payload) {
        return;
      }
      this.recv_seqno = ackno;
      if (this.in_handshake && flush_payload.length === 2 && flush_payload.equals(Buffer.from([5, 2])))
        this.skip_socks5 = 4;
      if (this.skip_socks5 > 0) {
        this.skip_socks5--;
        return;
      }
      this.in_handshake = false;
      this.packetBuffer.write(flush_payload);
      let pkt;
      while ((pkt = this.packetBuffer.read())) {
        this.emit("payload_recv", pkt);
      }
    } else if (direction === "send") {
    }
  }
  static get_flush(buffers, seqno, ackno) {
    const totalLen = ackno - seqno;
    if (totalLen <= 0) return null;
    let flush_payload = Buffer.alloc(totalLen);
    let flush_mask = Buffer.alloc(totalLen);
    const newBuffers = buffers.filter((segment) => {
      if (segment.seqno > ackno) return true;
      if (segment.seqno < seqno) {
        if (segment.seqno + segment.payload.length < seqno) return false;
        segment.payload = segment.payload.subarray(seqno - segment.seqno);
        segment.seqno = seqno;
      }
      const flush_offset = segment.seqno - seqno;
      const len_to_flush = Math.min(ackno - segment.seqno, segment.payload.length);
      segment.payload.copy(flush_payload, flush_offset, 0, len_to_flush);
      flush_mask.fill(1, flush_offset, flush_offset + len_to_flush);
      if (len_to_flush < segment.payload.length) {
        segment.payload = segment.payload.subarray(len_to_flush);
        segment.seqno += len_to_flush;
        return true;
      }
      return false;
    });
    if (flush_mask.includes(0)) {
      if (buffers.length >= 50) {
        console.warn(`[meter-core/tcp_tracker] - Dropped ${totalLen} bytes`);
        return Buffer.alloc(0);
      }
      return null;
    } else {
      buffers.length = 0;
      buffers.push(...newBuffers);
      return flush_payload;
    }
  }
  handle_recv_segment(packet, ip, tcp) {
    const tcpDataLength = ip.info.totallen - ip.hdrlen - tcp.hdrlen;
    let is_sack = false;
    try {
      is_sack = is_sack_in_header(packet, ip, tcp);
    } catch (e) {
      console.error(e);
      return;
    }
    if (tcpDataLength > 0) {
      this.send_buffers.push({
        seqno: tcp.info.seqno,
        payload: Buffer.from(packet.subarray(tcp.offset, tcp.offset + tcpDataLength)),
      });
    }
    if (tcp.info.ackno && !is_sack) {
      this.flush_buffers(tcp.info.ackno ?? 0, "recv");
    }
  }
  handle_send_segment(packet, ip, tcp) {
    const tcpDataLength = ip.info.totallen - ip.hdrlen - tcp.hdrlen;
    let is_sack = false;
    try {
      is_sack = is_sack_in_header(packet, ip, tcp);
    } catch (e) {
      console.error(e);
      return;
    }
    if (tcpDataLength > 0) {
      this.recv_buffers.push({
        seqno: tcp.info.seqno,
        payload: Buffer.from(packet.subarray(tcp.offset, tcp.offset + tcpDataLength)),
      });
    }
    if (tcp.info.ackno && !is_sack) {
      this.flush_buffers(tcp.info.ackno ?? 0, "send");
    }
  }
};
function is_sack_in_header(buffer, ip, tcp) {
  if (tcp.hdrlen == 20) return false;
  let options_offset = ip.offset + 20;
  const options_len = tcp.hdrlen - 20;
  const end_offset = options_offset + options_len;
  while (options_offset < end_offset) {
    switch (buffer[options_offset]) {
      case 0:
        options_offset = end_offset;
        break;
      case 1:
        options_offset += 1;
        break;
      case 2:
        options_offset += 4;
        break;
      case 3:
        options_offset += 3;
        break;
      case 4:
        options_offset += 2;
        break;
      case 5:
        return true;
      case 8:
        options_offset += 10;
        break;
      case 254:
      case 255:
        options_offset += buffer[options_offset + 1] ?? 1;
        break;
      default:
        throw new Error(
          `[meter-core/tcp-tracker] - Unknown TCPOption ${buffer[options_offset]}, packet is probably malformed, should drop.`
        );
    }
  }
  return false;
}
function IPnumber(IPaddress) {
  var ip = IPaddress.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (ip && ip.length === 5) {
    return (+ip[1] << 24) + (+ip[2] << 16) + (+ip[3] << 8) + +ip[4];
  }
  return null;
}
function isDeviceIp(ip, listen_options) {
  const testIp = IPnumber(ip),
    listen_ip = IPnumber(listen_options.ip),
    mask = IPnumber(listen_options.mask);
  if (!testIp || !listen_ip || !mask) return false;
  return (testIp & mask) === (listen_ip & mask);
}

// src/pkt-capture.ts
var { findDevice, deviceList } = import_cap.default.Cap;
var { Ethernet, PROTOCOL, IPV4, TCP } = import_cap.default.decoders;
var PktCapture = class extends import_tiny_typed_emitter4.TypedEmitter {
  tcpTracker;
  device;
  port;
  constructor(device, listen_options) {
    super();
    this.device = device;
    this.port = listen_options.port;
    this.tcpTracker = new TCPTracker(listen_options);
    this.tcpTracker.on("session", (session) => {
      console.info(
        `[meter-core/pkt-capture] - New session ${session.src}->${session.dst} ${
          session.is_ignored ? "(ingored) " : ""
        }(Total: ${Object.keys(this.tcpTracker.sessions).length})`
      );
      session.on("payload_recv", (data) => {
        this.emit("packet", data);
      });
      if (session.dst) this.emit("connect", session.dst);
    });
  }
  dispatchPacket(packet, noEth = false) {
    const ethernet = Ethernet(packet);
    if (noEth || ethernet.info.type === PROTOCOL.ETHERNET.IPV4) {
      const ipv4 = IPV4(packet, noEth ? 0 : ethernet.offset);
      if (ipv4.info.protocol === PROTOCOL.IP.TCP) {
        const tcp = TCP(packet, ipv4.offset);
        this.tcpTracker.track_packet(packet, ipv4, tcp);
      }
    }
  }
};
var PcapCapture = class extends PktCapture {
  c;
  #buffer;
  constructor(device, listen_options) {
    super(device, listen_options);
    this.c = new import_cap.default.Cap();
    this.#buffer = Buffer.alloc(65535);
  }
  listen() {
    const linkType = this.c.open(
      this.device,
      `tcp and (src port ${this.port} or dst port ${this.port})`,
      10 * 1024 * 1024,
      this.#buffer
    );
    if (this.c.setMinBytes) this.c.setMinBytes(54);
    this.c.on("packet", (nbytes, truncated) => {
      if (linkType === "ETHERNET") {
        this.dispatchPacket(this.#buffer);
      } else if (linkType === "NULL" && this.device === "\\Device\\NPF_Loopback") {
        const type = this.#buffer.readUInt32LE();
        if (type !== 2) return;
        this.dispatchPacket(this.#buffer.subarray(4), true);
      }
    });
  }
  close() {
    this.c.close();
  }
};
var RawSocketCapture = class extends PktCapture {
  rs;
  constructor(ip, listen_options) {
    super(ip, listen_options);
    this.rs = new import_raw_socket_sniffer.RawSocket(ip, listen_options.port);
  }
  listen() {
    this.rs.on("data", this.dispatchPacket.bind(this));
    this.rs.listen();
  }
  close() {}
};
var PktCaptureAll = class extends import_tiny_typed_emitter4.TypedEmitter {
  captures;
  constructor(mode, port = 6040) {
    super();
    this.captures = /* @__PURE__ */ new Map();
    if (!adminRelauncher(mode)) {
      console.warn(
        "[meter-core/PktCaptureAll] - Couldn't restart as admin, fallback to pcap mode, consider starting as admin yourself."
      );
      mode = 0 /* MODE_PCAP */;
    }
    if (mode === 1 /* MODE_RAW_SOCKET */) {
      updateFirewall();
    }
    if (mode === 0 /* MODE_PCAP */) {
      for (const device of deviceList()) {
        for (const address of device.addresses) {
          if (address.addr && address.netmask && (0, import_net.isIPv4)(address.addr)) {
            try {
              const pcapc = new PcapCapture(device.name, {
                ip: address.addr,
                mask: address.netmask,
                port,
              });
              pcapc.on("packet", (buf) => this.emit("packet", buf, device.name));
              pcapc.on("connect", (ip) => this.emit("connect", ip, device.name));
              this.captures.set(device.name, pcapc);
              pcapc.listen();
            } catch (e) {
              console.error(`[meter-core/PktCaptureAll] ${e}`);
            }
          }
        }
      }
    } else if (mode === 1 /* MODE_RAW_SOCKET */) {
      for (const addresses of Object.values((0, import_os.networkInterfaces)())) {
        for (const device of addresses ?? []) {
          if (
            (0, import_net.isIPv4)(device.address) &&
            device.family === "IPv4" &&
            device.internal === false &&
            !this.captures.has(device.address)
          ) {
            try {
              const rsc = new RawSocketCapture(device.address, {
                ip: device.address,
                mask: device.netmask,
                port,
              });
              rsc.on("packet", (buf) => this.emit("packet", buf, device.address));
              this.captures.set(device.address, rsc);
              rsc.listen();
            } catch (e) {
              console.error(`[meter-core/PktCaptureAll] ${e}`);
            }
          }
        }
      }
    } else {
    }
  }
  close() {
    for (const cap2 of this.captures.values()) cap2.close();
  }
};
function updateFirewall() {
  const command = `netsh advfirewall firewall delete rule name="lost-ark-dev" & netsh advfirewall firewall add rule name="lost-ark-dev" dir=in action=allow program="${process.argv[0]}"`;
  (0, import_child_process.execSync)(command, {
    stdio: "inherit",
  });
}
function getArgList(args) {
  const filtered = args.filter((a) => a !== "");
  if (filtered.length === 0) return "'-relaunch'";
  return "'" + filtered.join("','") + "','-relaunch'";
}
function isAdmin() {
  try {
    (0, import_child_process.execSync)(`fsutil dirty query ${process.env["systemdrive"] ?? "c:"}`);
  } catch {
    return false;
  }
  return true;
}
function adminRelauncher(mode) {
  if (mode !== 1 /* MODE_RAW_SOCKET */) return true;
  if (process.argv.includes("-relaunch")) return true;
  if (isAdmin()) return true;
  const command = `cmd /c "powershell -Command Start-Process -FilePath '${
    process.argv[0]
  }' -Verb RunAs -ArgumentList ${getArgList(process.argv.splice(1))}"`;
  try {
    (0, import_child_process.execSync)(command, {
      stdio: "inherit",
    });
  } catch (e) {
    console.info(`[meter-core/pkt-capture] - ${e}`);
    return false;
  }
  process.exit(0);
}

// src/logger/parser.ts
var import_tiny_typed_emitter6 = require("tiny-typed-emitter");

// src/logger/gameTracker.ts
var import_tiny_typed_emitter5 = require("tiny-typed-emitter");

// src/logger/statapi.ts
var import_crypto = require("crypto");
var import_axios = __toESM(require("axios"));
var _logger, _entityTracker, _clientId;
var _StatApi = class {
  constructor(entityTracker, clientId, logger) {
    __privateAdd(this, _logger, void 0);
    __privateAdd(this, _entityTracker, void 0);
    __privateAdd(this, _clientId, void 0);
    __publicField(this, "ip");
    __publicField(this, "zoneSyncStatus", 0 /* INVALID */);
    __publicField(this, "cache", /* @__PURE__ */ new Map());
    if (logger) __privateSet(this, _logger, logger);
    __privateSet(this, _entityTracker, entityTracker);
    __privateSet(this, _clientId, clientId);
  }
  syncData() {
    const playerList = [];
    __privateGet(this, _entityTracker).entities.forEach((e) => {
      if (e.entityType === 1 /* Player */) {
        playerList.push(e);
      }
    });
    this.getPlayersData(playerList);
  }
  getPlayersData(playerList, retries = 0) {
    if (retries > 24) {
      playerList.forEach((p) => {
        const cache = this.cache.get(p.name);
        if (cache && cache.status === 1 /* PENDING */) cache.status = 0 /* INVALID */;
        else if (!cache) {
          this.cache.set(p.name, {
            hash: "",
            status: 0 /* INVALID */,
            info: {
              name: p.name,
              stats: [],
              elixirs: [],
              gems: [],
            },
          });
        }
      });
      return;
    }
    if (!this.isCurrentZoneValid()) {
      playerList.forEach((p) => {
        const cache = this.cache.get(p.name);
        if (cache && cache.status === 1 /* PENDING */) this.cache.delete(p.name);
      });
      return;
    }
    if (!__privateGet(this, _logger)) return;
    if (!this.ip) return;
    const playerQuery = {};
    playerList.forEach((p) => {
      const hash = this.getHash(p);
      let playerCache = this.cache.get(p.name);
      if (!hash) {
        if (playerCache && playerCache.status === 1 /* PENDING */) this.cache.delete(p.name);
        return;
      }
      if (playerCache) {
        if (playerCache.status === 0 /* INVALID */) return;
        if (retries === 0 && playerCache.status === 1 /* PENDING */) return;
        if (playerCache.status === 2 /* VALID */ && playerCache.hash === hash) return;
      }
      if (!playerCache) {
        playerCache = {
          hash,
          status: 1 /* PENDING */,
          info: {
            name: p.name,
            stats: [],
            elixirs: [],
            gems: [],
          },
        };
      } else {
        playerCache.hash = hash;
        playerCache.status = 1 /* PENDING */;
      }
      this.cache.set(p.name, playerCache);
      playerQuery[p.name] = hash;
    });
    if (Object.keys(playerQuery).length === 0) return;
    import_axios.default
      .get(`${_StatApi.baseUrl}/req2`, {
        params: { ip: this.ip, ci: __privateGet(this, _clientId), ...playerQuery },
        /*, timeout: ??*/
      })
      .then((res) => {
        if (res.status !== 200) return;
        if (__privateGet(this, _logger)) {
          try {
            const json = res.data;
            const logMap = logMapping.get(6e4 /* APP_StatApi */);
            if (logMap) {
              const [logName, readLog, writeLog] = logMap;
              const parsed = { players: json };
              playerList = playerList.filter((p) => !json.find((c) => c.name === p.name));
              if (playerList.length > 0)
                setTimeout(() => {
                  playerList = playerList
                    .map((p) => {
                      return __privateGet(this, _entityTracker).getEntityByName(p.name);
                    })
                    .filter((p) => p !== void 0 && p.entityType === 1 /* Player */);
                  this.getPlayersData(playerList, retries + 1);
                }, 1e4);
              if (parsed.players.length > 0) {
                const logEvent2 = new LogEvent(parsed, 6e4 /* APP_StatApi */, writeLog);
                __privateGet(this, _logger).emit(logName, logEvent2);
                __privateGet(this, _logger).emit("*", logName, logEvent2);
                __privateGet(this, _logger).appendLog(logEvent2);
              }
            }
          } catch (e) {
            setTimeout(() => {
              playerList = playerList
                .map((p) => {
                  return __privateGet(this, _entityTracker).getEntityByName(p.name);
                })
                .filter((p) => p !== void 0 && p.entityType === 1 /* Player */);
              this.getPlayersData(playerList, retries + 5);
            }, 1e4);
          }
        }
      })
      .catch((e) => {
        setTimeout(() => {
          playerList = playerList
            .map((p) => {
              return __privateGet(this, _entityTracker).getEntityByName(p.name);
            })
            .filter((p) => p !== void 0 && p.entityType === 1 /* Player */);
          this.getPlayersData(playerList, retries + 5);
        }, 1e4);
      });
  }
  getHash(p) {
    if (
      /*!p.items.lifeToolList || */
      !p.items.equipList ||
      p.characterId === 0n ||
      !p.class ||
      p.name === "You"
    )
      return;
    const equipData = new Array(32).fill(0);
    p.items.equipList?.forEach((equip) => {
      equipData[equip.slot] = equip.id;
    });
    const data = `${p.name}${p.class}${p.characterId}${equipData.join("")}`;
    return (0, import_crypto.createHash)("md5").update(data).digest("hex");
  }
  updatePlayerStats(players) {
    players.forEach((p) => {
      const playerCache = this.cache.get(p.name);
      if (playerCache) {
        playerCache.info = p;
        playerCache.status = 2 /* VALID */;
      } else {
        this.cache.set(p.name, {
          hash: "",
          //We're in replay, hash isn't used
          status: 2 /* VALID */,
          info: p,
        });
      }
    });
  }
  updatePlayerStats2(name116, statPairList) {
    const c = {};
    c.name = name116;
    c.stats = this.toStatAPIstats(statPairList);
    c.elixirs = [];
    c.gems = [];
    let playerCache = this.cache.get(name116);
    if (!playerCache) {
      playerCache = {
        hash: "",
        status: 2 /* VALID */,
        info: c,
      };
    } else {
      playerCache.info = c;
      playerCache.status = 2 /* VALID */;
    }
    this.cache.set(c.name, playerCache);
  }
  toStatAPIstats(statpair) {
    let apiStats = [];
    const intStrDex = Number(statpair.find((e) => e.statType === 47)?.value);
    const wepPwr = Number(statpair.find((e) => e.statType === 151)?.value);
    const atkPwr = Math.sqrt((intStrDex * wepPwr) / 6);
    const crit = Number(statpair.find((e) => e.statType === 15)?.value);
    const spec = Number(statpair.find((e) => e.statType === 16)?.value);
    const skilldmg = Number(statpair.find((e) => e.statType === 50)?.value) - 1e4;
    apiStats.push({ id: 0 /* CRIT */, value: crit });
    apiStats.push({ id: 1 /* SPEC */, value: spec });
    apiStats.push({ id: 4 /* ATKPOWER */, value: atkPwr });
    apiStats.push({ id: 5 /* SKILLDMG */, value: skilldmg });
    return apiStats;
  }
  updateLocalPlayerCache(name116) {
    if (__privateGet(this, _entityTracker).localPlayer.name === "You") {
      let playerCache = this.cache.get("You");
      if (playerCache) {
        playerCache.info.name = name116;
        playerCache.status = 2 /* VALID */;
        this.cache.delete("You");
        this.cache.set(name116, playerCache);
      }
    }
  }
  getStats(name116) {
    if (!this.isCurrentZoneValid()) return;
    const c = this.cache.get(name116);
    if (c && c.status === 2 /* VALID */) return c.info.stats;
    return;
  }
  isCurrentZoneValid() {
    return (
      this.zoneSyncStatus !== 0 /* INVALID */ &&
      (this.zoneSyncStatus & (2 /* ZONE_INVALID */ | 8) /* RAID_INVALID */) === 0
    );
  }
  //TODO add a way to reset ?
};
var StatApi = _StatApi;
_logger = new WeakMap();
_entityTracker = new WeakMap();
_clientId = new WeakMap();
__publicField(StatApi, "baseUrl", "");

// src/logger/gameTracker.ts
var defaultOptions = {
  isLive: true,
  dontResetOnZoneChange: false,
  resetAfterPhaseTransition: false,
  splitOnPhaseTransition: false,
};
var GameTracker = class extends import_tiny_typed_emitter5.TypedEmitter {
  #game;
  encounters;
  #entityTracker;
  #statusTracker;
  #statApi;
  #data;
  options;
  resetTimer;
  phaseTransitionResetRequest;
  phaseTransitionResetRequestTime;
  #entityToSkillBreakdown;
  constructor(entityTracker, statusTracker, statApi, data, options) {
    super();
    this.#entityTracker = entityTracker;
    this.#statusTracker = statusTracker;
    this.#statApi = statApi;
    this.#data = data;
    this.options = { ...defaultOptions, ...options };
    this.resetTimer = null;
    this.phaseTransitionResetRequest = false;
    this.phaseTransitionResetRequestTime = 0;
    this.#entityToSkillBreakdown = /* @__PURE__ */ new Map();
    this.encounters = [];
    this.#game = {
      startedOn: 0,
      lastCombatPacket: 0,
      fightStartedOn: 0,
      localPlayer: this.#entityTracker.localPlayer.name,
      //this will be updated on dipatch
      currentBoss: void 0,
      killState: 0 /* FAIL */,
      zoneLevel: zonelevel[0 /* normal */],
      entities: /* @__PURE__ */ new Map(),
      damageStatistics: {
        totalDamageDealt: 0,
        topDamageDealt: 0,
        totalDamageTaken: 0,
        topDamageTaken: 0,
        totalHealingDone: 0,
        topHealingDone: 0,
        totalShieldDone: 0,
        topShieldDone: 0,
        debuffs: /* @__PURE__ */ new Map(),
        buffs: /* @__PURE__ */ new Map(),
        topShieldGotten: 0,
        totalEffectiveShieldingDone: 0,
        topEffectiveShieldingDone: 0,
        topEffectiveShieldingUsed: 0,
        effectiveShieldingBuffs: /* @__PURE__ */ new Map(),
        appliedShieldingBuffs: /* @__PURE__ */ new Map(),
      },
    };
  }
  onCounterAttack(source, time) {
    const entity = this.updateEntity(source, {}, time);
    entity.hits.counter += 1;
  }
  onInitEnv(pkt, time) {
    if (this.options.isLive) {
      this.#game.entities.forEach((e, k, m) => {
        if (e.hits.total === 0) {
          m.delete(k);
        }
      });
      if (this.options.dontResetOnZoneChange === false && this.resetTimer === null) {
        this.resetTimer = setTimeout(() => {
          this.resetState(+time + 6e3);
        }, 6e3);
        this.emit("message", "new-zone");
      }
    } else {
      this.splitEncounter(time);
      this.emit("message", "new-zone");
    }
  }
  splitEncounter(time) {
    if (
      this.#game.fightStartedOn !== 0 && // no combat packets
      (this.#game.damageStatistics.totalDamageDealt !== 0 || this.#game.damageStatistics.totalDamageTaken !== 0)
    ) {
      const curState = structuredClone(this.#game);
      curState.entities.forEach((entity) => {
        if (!entity.isPlayer) return;
        entity.statApiValid =
          this.#statApi.isCurrentZoneValid() && this.#statApi.cache.get(entity.name)?.status === 2 /* VALID */;
      });
      curState.localPlayer = this.#entityTracker.localPlayer.name;
      this.applyBreakdowns(curState.entities);
      this.encounters.push(curState);
    }
    this.resetState(+time);
  }
  getBossIfStillExist() {
    if (this.#game.currentBoss?.id) {
      const id = BigInt(`0x0${this.#game.currentBoss?.id}`);
      return this.#entityTracker.entities.has(id) ? this.#game.currentBoss : void 0;
    }
    return void 0;
  }
  resetState(curTime) {
    this.cancelReset();
    this.resetBreakdowns();
    this.#game = {
      startedOn: +curTime,
      lastCombatPacket: +curTime,
      fightStartedOn: 0,
      localPlayer: this.#entityTracker.localPlayer.name,
      //We never reset localplayer outside of initenv or initpc
      currentBoss: this.getBossIfStillExist(),
      entities: /* @__PURE__ */ new Map(),
      killState: 0 /* FAIL */,
      zoneLevel: this.#game.zoneLevel,
      damageStatistics: {
        totalDamageDealt: 0,
        topDamageDealt: 0,
        totalDamageTaken: 0,
        topDamageTaken: 0,
        totalHealingDone: 0,
        topHealingDone: 0,
        totalShieldDone: 0,
        topShieldDone: 0,
        debuffs: /* @__PURE__ */ new Map(),
        buffs: /* @__PURE__ */ new Map(),
        appliedShieldingBuffs: /* @__PURE__ */ new Map(),
        effectiveShieldingBuffs: /* @__PURE__ */ new Map(),
        topEffectiveShieldingDone: 0,
        topEffectiveShieldingUsed: 0,
        topShieldGotten: 0,
        totalEffectiveShieldingDone: 0,
      },
    };
    this.emit("reset-state", this.#game);
  }
  cancelReset() {
    if (this.resetTimer) clearTimeout(this.resetTimer);
    this.resetTimer = null;
  }
  onPhaseTransition(phaseCode, time) {
    if (this.options.isLive) {
      this.emit("message", `phase-transition-${phaseCode}`);
      if (this.options.resetAfterPhaseTransition) {
        this.phaseTransitionResetRequest = true;
        this.phaseTransitionResetRequestTime = +time;
      }
    }
    if (!this.options.isLive && this.options.splitOnPhaseTransition) {
      this.splitEncounter(time);
    }
  }
  updateOptions(options) {
    this.options = { ...this.options, ...options };
  }
  onDeath(target, time) {
    const entity = this.#game.entities.get(target.name);
    let deaths = 0;
    if (!entity) deaths = 1;
    else if (entity.isDead) deaths = entity.deaths;
    else deaths = entity.deaths + 1;
    this.updateEntity(target, { isDead: true, deathTime: +time, deaths }, time);
  }
  onDamage(owner, source, target, damageData, targetCount, time) {
    if (
      (damageData.modifier & 15) === 11 /* damage_share */ &&
      damageData.skillId === 0 &&
      damageData.skillEffectId === 0
    )
      return;
    if (
      this.phaseTransitionResetRequest &&
      this.phaseTransitionResetRequestTime > 0 &&
      this.phaseTransitionResetRequestTime < +time - 8e3
    ) {
      this.resetState(+time);
      this.phaseTransitionResetRequest = false;
    }
    const [statusEffectsOnSource, statusEffectsOnTarget] = this.#statusTracker.getStatusEffects(
      owner,
      target,
      this.#entityTracker.localPlayer.characterId,
      time
    );
    if (this.#data.isBattleItem(damageData.skillEffectId, "attack")) {
      if (source && source.entityType === 5 /* Projectile */) {
        const proj = source;
        damageData.skillEffectId = proj.skillEffectId;
      }
    }
    const damageOwner = this.updateEntity(owner, {}, time);
    const damageTarget = this.updateEntity(
      target,
      {
        currentHp: damageData.targetCurHp,
        maxHp: damageData.targetMaxHp,
      },
      time
    );
    if (!damageOwner || !damageTarget) return;
    if (!damageTarget.isPlayer && damageData.targetCurHp < 0) {
      damageData.damage = damageData.damage + damageData.targetCurHp;
    }
    let skillId = damageData.skillId;
    if (damageData.skillId === 0 && damageData.skillEffectId !== 0) {
      skillId = damageData.skillEffectId;
    }
    let skill = damageOwner.skills.get(skillId);
    if (!skill) {
      skill = {
        ...this.createEntitySkill(),
        ...{
          id: skillId,
        },
        ...this.getSkillNameIcon(damageData.skillId, damageData.skillEffectId),
      };
      damageOwner.skills.set(skillId, skill);
    }
    const hitFlag = damageData.modifier & 15;
    const hitOption = ((damageData.modifier >> 4) & 7) - 1;
    const isCrit = (hitFlag & (1 /* critical */ | 8) /* dot_critical */) !== 0;
    const mappedSeOnSource = /* @__PURE__ */ new Set();
    const mappedSeOnTarget = /* @__PURE__ */ new Set();
    statusEffectsOnSource.forEach(([buffId]) => {
      mappedSeOnSource.add(buffId);
    });
    statusEffectsOnTarget.forEach(([buffId]) => {
      mappedSeOnTarget.add(buffId);
    });
    skill.damageInfo.damageDealt += damageData.damage;
    if (damageData.damage > skill.maxDamage) skill.maxDamage = damageData.damage;
    damageOwner.hits.total += 1;
    skill.hits.total += 1;
    damageOwner.damageInfo.damageDealt += damageData.damage;
    damageTarget.damageTaken += damageData.damage;
    const critCount = isCrit ? 1 : 0;
    damageOwner.hits.crit += critCount;
    skill.hits.crit += critCount;
    let isFrontAttack = false,
      isBackAttack = false;
    const directionalmask = this.#data.getSkillEffectDirectionalMask(damageData.skillEffectId) - 1;
    if (directionalmask === 0 /* back_attack */ || directionalmask === 2 /* flank_attack */) {
      isBackAttack = hitOption === 0 /* back_attack */;
      const backAttackCount = isBackAttack ? 1 : 0;
      damageOwner.hits.backAttack += backAttackCount;
      damageOwner.hits.totalBackAttack += 1;
      skill.hits.backAttack += backAttackCount;
      skill.hits.totalBackAttack += 1;
    }
    if (directionalmask === 1 /* frontal_attack */ || directionalmask === 2 /* flank_attack */) {
      isFrontAttack = hitOption === 1 /* frontal_attack */;
      const frontAttackCount = isFrontAttack ? 1 : 0;
      damageOwner.hits.frontAttack += frontAttackCount;
      damageOwner.hits.totalFrontAttack += 1;
      skill.hits.frontAttack += frontAttackCount;
      skill.hits.totalFrontAttack += 1;
    }
    if (damageOwner.isPlayer) {
      this.#game.damageStatistics.totalDamageDealt += damageData.damage;
      this.#game.damageStatistics.topDamageDealt = Math.max(
        this.#game.damageStatistics.topDamageDealt,
        damageOwner.damageInfo.damageDealt
      );
      let isBuffedBySupport = false,
        isDebuffedBySupport = false;
      mappedSeOnSource.forEach((buffId) => {
        if (!this.#game.damageStatistics.buffs.has(buffId)) {
          const statusEffect2 = this.#data.getStatusEffectHeaderData(buffId);
          if (statusEffect2) this.#game.damageStatistics.buffs.set(buffId, statusEffect2);
        }
        const statusEffect = this.#game.damageStatistics.buffs.get(buffId);
        if (statusEffect && !isBuffedBySupport) {
          isBuffedBySupport =
            (statusEffect.buffcategory === "classskill" ||
              statusEffect.buffcategory === "identity" ||
              statusEffect.buffcategory === "ability") &&
            statusEffect.source.skill !== void 0 &&
            statusEffect.target === 1 /* PARTY */ &&
            this.#data.isSupportClassId(statusEffect.source.skill.classid);
        }
        const oldval = skill.damageDealtBuffedBy.get(buffId) ?? 0;
        skill.damageDealtBuffedBy.set(buffId, oldval + damageData.damage);
        const oldOwnerDamage = damageOwner.damageDealtBuffedBy.get(buffId) ?? 0;
        damageOwner.damageDealtBuffedBy.set(buffId, oldOwnerDamage + damageData.damage);
        const oldHitAmountTotal = damageOwner.hits.hitsBuffedBy.get(buffId) ?? 0;
        damageOwner.hits.hitsBuffedBy.set(buffId, oldHitAmountTotal + 1);
        const oldHitAmountSkill = skill.hits.hitsBuffedBy.get(buffId) ?? 0;
        skill.hits.hitsBuffedBy.set(buffId, oldHitAmountSkill + 1);
      });
      mappedSeOnTarget.forEach((buffId) => {
        if (!this.#game.damageStatistics.debuffs.has(buffId)) {
          const statusEffect2 = this.#data.getStatusEffectHeaderData(buffId);
          if (statusEffect2) this.#game.damageStatistics.debuffs.set(buffId, statusEffect2);
        }
        const statusEffect = this.#game.damageStatistics.debuffs.get(buffId);
        if (statusEffect && !isDebuffedBySupport) {
          isDebuffedBySupport =
            (statusEffect.buffcategory === "classskill" ||
              statusEffect.buffcategory === "identity" ||
              statusEffect.buffcategory === "ability") &&
            statusEffect.source.skill !== void 0 &&
            statusEffect.target === 1 /* PARTY */ &&
            this.#data.isSupportClassId(statusEffect.source.skill.classid);
        }
        const oldSkillDmg = skill.damageDealtDebuffedBy.get(buffId) ?? 0;
        skill.damageDealtDebuffedBy.set(buffId, oldSkillDmg + damageData.damage);
        const oldOwnerDamage = damageOwner.damageDealtDebuffedBy.get(buffId) ?? 0;
        damageOwner.damageDealtDebuffedBy.set(buffId, oldOwnerDamage + damageData.damage);
        const oldHitAmountTotal = damageOwner.hits.hitsDebuffedBy.get(buffId) ?? 0;
        damageOwner.hits.hitsDebuffedBy.set(buffId, oldHitAmountTotal + 1);
        const oldHitAmountSkill = skill.hits.hitsDebuffedBy.get(buffId) ?? 0;
        skill.hits.hitsDebuffedBy.set(buffId, oldHitAmountSkill + 1);
      });
      const debuffAttackCount = isDebuffedBySupport ? 1 : 0;
      const buffAttackCount = isBuffedBySupport ? 1 : 0;
      skill.damageInfo.damageDealtBuffedBySupport += isBuffedBySupport ? damageData.damage : 0;
      skill.damageInfo.damageDealtDebuffedBySupport += isDebuffedBySupport ? damageData.damage : 0;
      damageOwner.damageInfo.damageDealtBuffedBySupport += isBuffedBySupport ? damageData.damage : 0;
      damageOwner.damageInfo.damageDealtDebuffedBySupport += isDebuffedBySupport ? damageData.damage : 0;
      damageOwner.hits.hitsBuffedBySupport += buffAttackCount;
      damageOwner.hits.hitsDebuffedBySupport += debuffAttackCount;
      skill.hits.hitsBuffedBySupport += buffAttackCount;
      skill.hits.hitsDebuffedBySupport += debuffAttackCount;
      if (damageData.damage > 0 && damageOwner.isPlayer) {
        const rdpsData = {
          multDmg: {
            sumRate: 0,
            totalRate: 1,
            values: Array(),
          },
          atkPowSubRate2: {
            //Contains self, as it's additive
            selfSumRate: 0,
            sumRate: 0,
            values: Array(),
          },
          atkPowSubRate1: {
            sumRate: 0,
            totalRate: 1,
            values: Array(),
          },
          skillDamRate: {
            //Contains self, as it's additive
            selfSumRate: 0,
            sumRate: 0,
            values: Array(),
          },
          atkPowAmplify: {
            //Keep the highest
            values: Array(),
          },
          crit: {
            //Contains self, as it's additive
            selfSumRate: 0,
            sumRate: 0,
            values: Array(),
          },
          critDmgRate: 2,
        };
        statusEffectsOnSource.forEach(([buffId, sourceEntityId, stackCount]) => {
          const casterEntity = this.#entityTracker.entities.get(sourceEntityId);
          if (!casterEntity) return;
          const buff = this.getBuffAfterTripods(this.#data.skillBuff.get(buffId), casterEntity, damageData);
          if (!buff) return;
          if (
            buff.type === "skill_damage_amplify" &&
            buff.statuseffectvalues &&
            casterEntity.entityType === 1 /* Player */ &&
            sourceEntityId !== owner.entityId
          ) {
            const skillId2 = buff.statuseffectvalues[0] ?? 0;
            const skillEffectId = buff.statuseffectvalues[4] ?? 0;
            if (
              (skillId2 === 0 || skillId2 === damageData.skillId) &&
              (skillEffectId === 0 || skillEffectId === damageData.skillEffectId)
            ) {
              const val = buff.statuseffectvalues[1] ?? 0;
              if (val !== 0) {
                const rate = (val / 1e4) * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
            }
          } else if (
            buff.type === "attack_power_amplify" &&
            buff.statuseffectvalues &&
            casterEntity.entityType === 1 /* Player */ &&
            sourceEntityId !== owner.entityId
          ) {
            const val = buff.statuseffectvalues[0] ?? 0;
            if (val !== 0) {
              let rate = (val / 1e4) * stackCount;
              const casterBaseAtkPower = this.#statApi
                .getStats(casterEntity.name)
                ?.find((s) => s.id === 4 /* ATKPOWER */)?.value;
              const targetBaseAtkPower = this.#statApi
                .getStats(owner.name)
                ?.find((s) => s.id === 4 /* ATKPOWER */)?.value;
              if (casterBaseAtkPower && targetBaseAtkPower) {
                rate *= casterBaseAtkPower / targetBaseAtkPower;
              }
              rdpsData.atkPowAmplify.values.push({
                casterEntity,
                rate,
              });
            }
          }
          buff.passiveoption.forEach((passive) => {
            if (addontype[passive.type] === 2 /* stat */) {
              if (passive.keystat === "attack_power_sub_rate_2") {
                const val = passive.value;
                if (val !== 0) {
                  let rate = (val / 1e4) * stackCount;
                  if (casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
                    rdpsData.atkPowSubRate2.values.push({
                      casterEntity,
                      rate,
                    });
                    rdpsData.atkPowSubRate2.sumRate += rate;
                  } else {
                    rdpsData.atkPowSubRate2.selfSumRate += rate;
                  }
                }
              } else if (passive.keystat === "attack_power_sub_rate_1") {
                const val = passive.value;
                if (val !== 0) {
                  let rate = (val / 1e4) * stackCount;
                  if (casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
                    rdpsData.atkPowSubRate1.values.push({
                      casterEntity,
                      rate,
                    });
                    rdpsData.atkPowSubRate1.sumRate += rate;
                    rdpsData.atkPowSubRate1.totalRate *= 1 + rate;
                  }
                }
              } else if (passive.keystat === "skill_damage_rate") {
                const val = passive.value;
                if (val !== 0) {
                  const rate = (val / 1e4) * stackCount;
                  if (casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
                    rdpsData.skillDamRate.values.push({
                      casterEntity,
                      rate,
                    });
                    rdpsData.skillDamRate.sumRate += rate;
                  } else {
                    rdpsData.skillDamRate.selfSumRate += rate;
                  }
                }
              }
            }
            if (passive.keystat === "critical_hit_rate") {
              const val = passive.value;
              if (val !== 0) {
                const rate = (val / 1e4) * stackCount;
                if (casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
                  rdpsData.crit.values.push({
                    casterEntity,
                    rate,
                  });
                  rdpsData.crit.sumRate += rate;
                } else {
                  rdpsData.crit.selfSumRate += rate;
                }
              }
            }
            if (casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
              if (passive.keystat === "skill_damage_sub_rate_2") {
                const val = passive.value;
                if (val !== 0) {
                  let rate = (val / 1e4) * stackCount;
                  const spec =
                    this.#statApi.getStats(casterEntity.name)?.find((s) => s.id === 1 /* SPEC */)?.value ?? 0;
                  switch (casterEntity.class) {
                    case 204 /* bard */:
                      rate *= 1 + ((spec / 0.0699) * 0.35) / 1e4;
                      break;
                    case 105 /* holyknight */:
                      rate *= 1 + ((spec / 0.0699) * 0.63) / 1e4;
                      break;
                    case 602 /* yinyangshi */:
                      rate *= 1 + ((spec / 0.0699) * 0.38) / 1e4;
                      break;
                    default:
                      break;
                  }
                  rdpsData.multDmg.values.push({
                    casterEntity,
                    rate,
                  });
                  rdpsData.multDmg.sumRate += rate;
                  rdpsData.multDmg.totalRate *= 1 + rate;
                }
              } else {
                if (passive.keystat === "critical_dam_rate" && buff.category === "buff") {
                  rdpsData.critDmgRate += (passive.value / 1e4) * stackCount;
                }
              }
            } else if (addontype[passive.type] === 4 /* combat_effect */) {
              const ce = this.#data.combatEffect.get(passive.keyindex);
              rdpsData.critDmgRate +=
                stackCount *
                this.getCritMultiplierFromCombatEffect(ce, {
                  self: owner,
                  target,
                  caster: casterEntity,
                  skill: this.#data.skill.get(skillId),
                  hitOption,
                  targetCount,
                });
            }
          });
        });
        statusEffectsOnTarget.forEach(([debuffId, sourceEntityId, stackCount]) => {
          const casterEntity = this.#entityTracker.entities.get(sourceEntityId);
          if (!casterEntity) return;
          const debuff = this.getBuffAfterTripods(this.#data.skillBuff.get(debuffId), casterEntity, damageData);
          if (!debuff) return;
          if (debuff.type === "instant_stat_amplify" && debuff.statuseffectvalues) {
            const val = debuff.statuseffectvalues[0] ?? 0;
            if (val !== 0) {
              const rate = (val / 1e4) * stackCount;
              if (casterEntity.entityType === 1 /* Player */ && sourceEntityId !== owner.entityId) {
                rdpsData.crit.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.crit.sumRate += rate;
              } else {
                rdpsData.crit.selfSumRate += rate;
              }
            }
          }
          if (casterEntity.entityType !== 1 /* Player */ || sourceEntityId === owner.entityId) return;
          if (debuff.type === "instant_stat_amplify" && debuff.statuseffectvalues) {
            const val = debuff.statuseffectvalues[0] ?? 0;
            if (damageData.damageType === 0 /* physics */) {
              const val2 = debuff.statuseffectvalues[2] ?? 0;
              if (val2 !== 0) {
                const rate = -(val2 / 1e4) * stackCount * 0.5;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
              const val22 = debuff.statuseffectvalues[7] ?? 0;
              if (val22 !== 0) {
                const rate = (val22 / 1e4) * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
              if (isCrit) {
                const val3 = debuff.statuseffectvalues[9] ?? 0;
                if (val3 !== 0) {
                  const rate = (val3 / 1e4) * stackCount;
                  rdpsData.multDmg.values.push({
                    casterEntity,
                    rate,
                  });
                  rdpsData.multDmg.sumRate += rate;
                  rdpsData.multDmg.totalRate *= 1 + rate;
                }
              }
            } else if (damageData.damageType === 1 /* magic */) {
              const val2 = debuff.statuseffectvalues[3] ?? 0;
              if (val2 !== 0) {
                const rate = -(val2 / 1e4) * stackCount * 0.5;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
              const val22 = debuff.statuseffectvalues[8] ?? 0;
              if (val22 !== 0) {
                const rate = (val22 / 1e4) * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
              if (isCrit) {
                const val3 = debuff.statuseffectvalues[10] ?? 0;
                if (val3 !== 0) {
                  const rate = (val3 / 1e4) * stackCount;
                  rdpsData.multDmg.values.push({
                    casterEntity,
                    rate,
                  });
                  rdpsData.multDmg.sumRate += rate;
                  rdpsData.multDmg.totalRate *= 1 + rate;
                }
              }
            }
          }
          if (debuff.type === "skill_damage_amplify" && debuff.statuseffectvalues) {
            const skillId2 = debuff.statuseffectvalues[0] ?? 0;
            const skillEffectId = debuff.statuseffectvalues[4] ?? 0;
            if (
              (skillId2 === 0 || skillId2 === damageData.skillId) &&
              (skillEffectId === 0 || skillEffectId === damageData.skillEffectId)
            ) {
              const val = debuff.statuseffectvalues[1] ?? 0;
              if (val !== 0) {
                const rate = (val / 1e4) * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
            }
          }
          if (debuff.type === "directional_attack_amplify" && debuff.statuseffectvalues) {
            if (isFrontAttack) {
              const frontRate = debuff.statuseffectvalues[0] ?? 0;
              if (frontRate !== 0) {
                const rate = (frontRate / 100) * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
            }
            if (isBackAttack) {
              const backRate = debuff.statuseffectvalues[4] ?? 0;
              if (backRate !== 0) {
                const rate = (backRate / 100) * stackCount;
                rdpsData.multDmg.values.push({
                  casterEntity,
                  rate,
                });
                rdpsData.multDmg.sumRate += rate;
                rdpsData.multDmg.totalRate *= 1 + rate;
              }
            }
          }
        });
        if (rdpsData.crit.values.length > 0) {
          const skillCastedData = this.#data.skill.get(damageData.skillId);
          owner.itemSet?.forEach((option) => {
            if (addontype[option.type] === 2 /* stat */ && stattype[option.keystat] === 76 /* critical_dam_rate */) {
              rdpsData.critDmgRate += option.value / 1e4;
            } else if (addontype[option.type] === 4 /* combat_effect */) {
              const ce = this.#data.combatEffect.get(option.keyindex);
              rdpsData.critDmgRate += this.getCritMultiplierFromCombatEffect(ce, {
                self: owner,
                target,
                caster: owner,
                skill: skillCastedData,
                hitOption,
                targetCount,
              });
            }
            owner.skills.get(damageData.skillId)?.tripods.forEach((tripodData) => {
              const combatEffects = /* @__PURE__ */ new Map();
              tripodData.options.forEach((option2) => {
                const featureType = skillfeaturetype[option2.type];
                if (featureType === 45 /* add_chain_combat_effect */) {
                  if ((option2.params[0] ?? 0) === 0 || damageData.skillEffectId === (option2.params[0] ?? 0)) {
                    const ceId = option2.params[1];
                    if (ceId) {
                      const ce = this.#data.combatEffect.get(ceId);
                      if (ce) combatEffects.set(ce.id, ce);
                    }
                  }
                } else if (featureType === 46 /* remove_chain_combat_effect */) {
                  combatEffects.delete(option2.params[0] ?? 0);
                } else if (featureType === 104 /* change_combat_effect_arg */) {
                  if ((option2.params[0] ?? 0) === 0 || damageData.skillEffectId === (option2.params[0] ?? 0)) {
                    const ce = combatEffects.get(option2.params[1] ?? 0);
                    if (ce) {
                      const newCe = structuredClone(ce);
                      combatEffects.set(ce.id, newCe);
                      newCe.effects.forEach((effect) => {
                        effect.actions.forEach((action) => {
                          for (let i = 0; i < option2.params.length - 2; i++) {
                            if (paramtype[option2.paramtype] === 1 /* relative */)
                              action.args[i] *= 1 + (option2.params[i + 2] ?? 0) / 100;
                            else action.args[i] += option2.params[i + 2] ?? 0;
                          }
                        });
                      });
                    }
                  }
                } else if (featureType === 29 /* change_dam_critical */) {
                  if ((option2.params[0] ?? 0) === 0 || damageData.skillEffectId === (option2.params[0] ?? 0)) {
                    rdpsData.critDmgRate += (option2.params[1] ?? 0) / 1e4;
                  }
                } else if (featureType === 30 /* change_dam_critical_rate */) {
                  if ((option2.params[0] ?? 0) === 0 || damageData.skillEffectId === (option2.params[0] ?? 0)) {
                    rdpsData.crit.selfSumRate += (option2.params[1] ?? 0) / 1e4;
                  }
                }
              });
              combatEffects.forEach((ce) => {
                rdpsData.critDmgRate += this.getCritMultiplierFromCombatEffect(ce, {
                  self: owner,
                  target,
                  caster: owner,
                  skill: skillCastedData,
                  hitOption,
                  targetCount,
                });
              });
            });
          });
        }
        if (rdpsData.skillDamRate.values.length > 0) {
          const targetWeaponSkillDmg = this.#statApi
            .getStats(owner.name)
            ?.find((s) => s.id === 5 /* SKILLDMG */)?.value;
          if (targetWeaponSkillDmg) rdpsData.skillDamRate.selfSumRate += targetWeaponSkillDmg / 1e4;
        }
        let critSumEffGainRate = 0;
        if (rdpsData.crit.values.length > 0) {
          rdpsData.crit.selfSumRate +=
            (this.#statApi.getStats(owner.name)?.find((s) => s.id === 0 /* CRIT */)?.value ?? 0) / 0.2794 / 1e4;
          const cappedSumRate = Math.min(Math.max(0, 1 - rdpsData.crit.selfSumRate), rdpsData.crit.sumRate);
          critSumEffGainRate =
            (cappedSumRate * rdpsData.critDmgRate - cappedSumRate) /
            (rdpsData.crit.selfSumRate * rdpsData.critDmgRate - rdpsData.crit.selfSumRate + 1);
        }
        const attack_power_amplify =
          rdpsData.atkPowAmplify.values.length <= 0
            ? { rate: 0 }
            : rdpsData.atkPowAmplify.values.reduce((prev, curr) => {
                return prev.rate > curr.rate ? prev : curr;
              });
        const totalEffGainRate =
          (1 + critSumEffGainRate) *
            (1 + rdpsData.atkPowSubRate2.sumRate / (1 + rdpsData.atkPowSubRate2.selfSumRate)) *
            (1 + rdpsData.skillDamRate.sumRate / (1 + rdpsData.skillDamRate.selfSumRate)) *
            (1 + attack_power_amplify.rate) *
            rdpsData.multDmg.totalRate *
            rdpsData.atkPowSubRate1.totalRate -
          1;
        const totalSumGainRate =
          critSumEffGainRate +
          rdpsData.atkPowSubRate2.sumRate / (1 + rdpsData.atkPowSubRate2.selfSumRate) +
          rdpsData.skillDamRate.sumRate / (1 + rdpsData.skillDamRate.selfSumRate) +
          attack_power_amplify.rate +
          (rdpsData.multDmg.totalRate - 1) +
          (rdpsData.atkPowSubRate1.totalRate - 1);
        {
          const unitRate = (totalEffGainRate * damageData.damage) / (totalSumGainRate * (1 + totalEffGainRate));
          const critGainUnit = (critSumEffGainRate * unitRate) / rdpsData.crit.sumRate;
          rdpsData.crit.values.forEach((crit) => {
            const delta = crit.rate * critGainUnit;
            const sourceEntityState = this.#game.entities.get(crit.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          });
          rdpsData.atkPowSubRate2.values.forEach((dmg) => {
            const delta = (dmg.rate / (1 + rdpsData.atkPowSubRate2.selfSumRate)) * unitRate;
            const sourceEntityState = this.#game.entities.get(dmg.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          });
          rdpsData.skillDamRate.values.forEach((dmg) => {
            const delta = (dmg.rate / (1 + rdpsData.skillDamRate.selfSumRate)) * unitRate;
            const sourceEntityState = this.#game.entities.get(dmg.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          });
          const multGainUnit = ((rdpsData.multDmg.totalRate - 1) * unitRate) / rdpsData.multDmg.sumRate;
          rdpsData.multDmg.values.forEach((dmg) => {
            const delta = dmg.rate * multGainUnit;
            const sourceEntityState = this.#game.entities.get(dmg.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          });
          const atkPowSubRate1GainUnit =
            ((rdpsData.atkPowSubRate1.totalRate - 1) * unitRate) / rdpsData.atkPowSubRate1.sumRate;
          rdpsData.atkPowSubRate1.values.forEach((dmg) => {
            const delta = dmg.rate * atkPowSubRate1GainUnit;
            const sourceEntityState = this.#game.entities.get(dmg.casterEntity.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          });
          if (attack_power_amplify.rate > 0) {
            const delta = attack_power_amplify.rate * unitRate;
            const sourceEntityState = this.#game.entities.get(attack_power_amplify.casterEntity?.name);
            this.applyRdps(damageOwner, sourceEntityState, skill, delta);
          }
        }
      }
      const breakdown = {
        timestamp: +time,
        damage: damageData.damage,
        targetEntity: damageTarget.id,
        isCrit,
        isBackAttack,
        isFrontAttack,
        isBuffedBySupport,
        isDebuffedBySupport,
        buffedBy: [...mappedSeOnSource],
        debuffedBy: [...mappedSeOnTarget],
      };
      const breakdownOwner = BigInt("0x" + damageOwner.id);
      this.addBreakdown(breakdownOwner, skillId, breakdown);
    }
    if (damageTarget.isPlayer) {
      this.#game.damageStatistics.totalDamageTaken += damageData.damage;
      this.#game.damageStatistics.topDamageTaken = Math.max(
        this.#game.damageStatistics.topDamageTaken,
        damageTarget.damageTaken
      );
    }
    if (damageTarget.isBoss) {
      this.#game.currentBoss = damageTarget;
    }
    if (this.#game.fightStartedOn === 0) this.#game.fightStartedOn = +time;
    this.#game.lastCombatPacket = +time;
  }
  getBuffAfterTripods(oBuff, entity, damageData) {
    if (!oBuff || entity.entityType !== 1 /* Player */) return oBuff;
    const buff = structuredClone(oBuff);
    entity.skills.get(damageData.skillId)?.tripods.forEach((tripodData) => {
      tripodData.options.forEach((tripod) => {
        const featureType = skillfeaturetype[tripod.type];
        if (featureType === 19 /* change_buff_stat */) {
          if ((tripod.params[0] ?? 0) === 0 || damageData.skillEffectId === (tripod.params[0] ?? 0)) {
            if (buff.id === (tripod.params[1] ?? 0)) {
              const changeMap = /* @__PURE__ */ new Map();
              for (let i = 2; i < tripod.params.length; i += 2) {
                if (tripod.params[i] && tripod.params[i + 1])
                  changeMap.set(tripod.params[i] ?? 0, tripod.params[i + 1] ?? 0);
              }
              buff.passiveoption.forEach((passive) => {
                const change = changeMap.get(stattype[passive.keystat]);
                if (addontype[passive.type] === 2 /* stat */ && change) {
                  if (paramtype[tripod.paramtype] === 0 /* absolute */) passive.value += change;
                  else passive.value *= 1 + change / 100;
                }
              });
            }
          }
        } else if (featureType === 42 /* add_buff_stat */) {
          if ((tripod.params[0] ?? 0) === 0 || damageData.skillEffectId === (tripod.params[0] ?? 0)) {
            if (buff.id === (tripod.params[1] ?? 0)) {
              const keystat = stattype[tripod.params[2] ?? 0];
              const value = tripod.params[3] ?? 0;
              if (keystat && value !== void 0)
                buff.passiveoption.push({
                  type: "stat",
                  keystat,
                  keyindex: 0,
                  value,
                });
            }
          }
        } else if (featureType === 21 /* change_buff_param */) {
          if (
            buff.statuseffectvalues &&
            ((tripod.params[0] ?? 0) === 0 || damageData.skillEffectId === (tripod.params[0] ?? 0))
          ) {
            if (buff.id === (tripod.params[1] ?? 0)) {
              if ((tripod.params[2] ?? 0) === 0 /* absolute */) {
                buff.statuseffectvalues = tripod.params.slice(3);
              } else {
                const newValues = [];
                for (let i = 0; i < Math.max(buff.statuseffectvalues.length, tripod.params.length - 3); i++) {
                  if (tripod.params[i + 3]) {
                    newValues.push((buff.statuseffectvalues[i] ?? 0) * (1 + (tripod.params[i + 3] ?? 0) / 100));
                  }
                }
                buff.statuseffectvalues = newValues;
              }
            }
          }
        }
      });
    });
    return buff;
  }
  getCritMultiplierFromCombatEffect(ce, ceConditionData) {
    if (!ce) return 0;
    let critDmgRate = 0;
    ce.effects
      .filter((effect) =>
        effect.actions.find((action) => combateffectactiontype[action.type] === 4 /* modify_critical_multiplier */)
      )
      .forEach((effect) => {
        if (this.#data.isCombatEffectConditionsValid({ effect, ...ceConditionData })) {
          effect.actions
            .filter((action) => combateffectactiontype[action.type] === 4 /* modify_critical_multiplier */)
            .forEach((action) => {
              critDmgRate += (action.args[0] ?? 0) / 100;
            });
        }
      });
    return critDmgRate;
  }
  applyRdps(damageOwner, sourceEntityState, skill, delta) {
    if (sourceEntityState) {
      sourceEntityState.damageInfo.rdpsDamageGiven += delta;
    }
    if (sourceEntityState && this.#data.isSupportClassId(sourceEntityState.classId)) {
      damageOwner.damageInfo.rdpsDamageReceivedSupp += delta;
      skill.damageInfo.rdpsDamageReceivedSupp += delta;
    }
    damageOwner.damageInfo.rdpsDamageReceived += delta;
    skill.damageInfo.rdpsDamageReceived += delta;
  }
  onStartSkill(owner, skillId, time) {
    const entity = this.updateEntity(
      owner,
      {
        isDead: false,
      },
      time
    );
    if (entity) {
      entity.hits.casts += 1;
      let skill = entity.skills.get(skillId);
      if (!skill) {
        skill = {
          ...this.createEntitySkill(),
          ...{
            id: skillId,
          },
          ...this.getSkillNameIcon(skillId, 0),
        };
        entity.skills.set(skillId, skill);
      }
      skill.hits.casts += 1;
    }
  }
  onShieldUsed(targetEntity, sourceEntity, statusEffectId, shieldAmountRemoved) {
    if (shieldAmountRemoved < 0) {
      console.error("Shield change values was negative, shield ammount increased");
    }
    if (targetEntity.entityType === 1 /* Player */ && sourceEntity.entityType === 1 /* Player */) {
      if (!this.#game.damageStatistics.effectiveShieldingBuffs.has(statusEffectId)) {
        const statusEffect = this.#data.getStatusEffectHeaderData(statusEffectId);
        if (statusEffect) {
          this.#game.damageStatistics.effectiveShieldingBuffs.set(statusEffectId, statusEffect);
        }
      }
      const now = /* @__PURE__ */ new Date();
      const targetEntityState = this.updateEntity(targetEntity, {}, now);
      const sourceEntityState = this.updateEntity(sourceEntity, {}, now);
      targetEntityState.damagePreventedByShield += shieldAmountRemoved;
      const oldDmgPreventedBy = targetEntityState.damagePreventedByShieldBy.get(statusEffectId) ?? 0;
      targetEntityState.damagePreventedByShieldBy.set(statusEffectId, oldDmgPreventedBy + shieldAmountRemoved);
      this.#game.damageStatistics.topEffectiveShieldingUsed = Math.max(
        targetEntityState.damagePreventedByShield,
        this.#game.damageStatistics.topEffectiveShieldingUsed
      );
      sourceEntityState.damagePreventedWithShieldOnOthers += shieldAmountRemoved;
      const oldDmgPreventedWith = sourceEntityState.damagePreventedWithShieldOnOthersBy.get(statusEffectId) ?? 0;
      sourceEntityState.damagePreventedWithShieldOnOthersBy.set(
        statusEffectId,
        oldDmgPreventedWith + shieldAmountRemoved
      );
      this.#game.damageStatistics.topEffectiveShieldingDone = Math.max(
        sourceEntityState.damagePreventedWithShieldOnOthers,
        this.#game.damageStatistics.topEffectiveShieldingDone
      );
      this.#game.damageStatistics.totalEffectiveShieldingDone += shieldAmountRemoved;
    }
  }
  onShieldApplied(targetEntity, sourceEntity, statusEffectId, amount) {
    const now = /* @__PURE__ */ new Date();
    const targetEntityState = this.updateEntity(targetEntity, {}, now);
    const sourceEntityState = this.updateEntity(sourceEntity, {}, now);
    if (sourceEntityState.isPlayer && targetEntityState.isPlayer) {
      if (!this.#game.damageStatistics.appliedShieldingBuffs.has(statusEffectId)) {
        const statusEffect = this.#data.getStatusEffectHeaderData(statusEffectId);
        if (statusEffect) {
          this.#game.damageStatistics.appliedShieldingBuffs.set(statusEffectId, statusEffect);
        }
      }
      targetEntityState.shieldReceived += amount;
      sourceEntityState.shieldDone += amount;
      const oldDoneByValue = sourceEntityState.shieldDoneBy.get(statusEffectId) ?? 0;
      sourceEntityState.shieldDoneBy.set(statusEffectId, oldDoneByValue + amount);
      const oldReceivedByValue = targetEntityState.shieldReceivedBy.get(statusEffectId) ?? 0;
      targetEntityState.shieldReceivedBy.set(statusEffectId, oldReceivedByValue + amount);
      this.#game.damageStatistics.topShieldDone = Math.max(
        sourceEntityState.shieldDone,
        this.#game.damageStatistics.topShieldDone
      );
      this.#game.damageStatistics.topShieldGotten = Math.max(
        targetEntityState.shieldReceived,
        this.#game.damageStatistics.topShieldGotten
      );
      this.#game.damageStatistics.totalShieldDone += amount;
    }
  }
  getSkillNameIcon(skillId, skillEffectId) {
    if (skillId === 0 && skillEffectId === 0) {
      return { name: "Bleed", icon: "buff_168.png" };
    } else if (skillId === 0) {
      const effect = this.#data.skillEffect.get(skillEffectId);
      if (effect && effect.itemname) {
        return { name: effect.itemname, icon: effect.icon ?? "" };
      } else if (effect) {
        if (effect.sourceskill) {
          const skill = this.#data.skill.get(effect.sourceskill);
          if (skill) return { name: skill.name, icon: skill.icon };
        } else {
          const skill = this.#data.skill.get(Math.floor(skillEffectId / 10));
          if (skill) return { name: skill.name, icon: skill.icon };
        }
        return { name: effect.comment };
      } else {
        return { name: this.#data.getSkillName(skillId) };
      }
    } else {
      let skill = this.#data.skill.get(skillId);
      if (!skill) {
        skill = this.#data.skill.get(skillId - (skillId % 10));
        if (!skill) return { name: this.#data.getSkillName(skillId), icon: "" };
      }
      if (skill.summonsourceskill) {
        skill = this.#data.skill.get(skill.summonsourceskill);
        if (skill) {
          return { name: skill.name + " (Summon)", icon: skill.icon };
        } else {
          return { name: this.#data.getSkillName(skillId), icon: "" };
        }
      } else if (skill.sourceskill) {
        skill = this.#data.skill.get(skill.sourceskill);
        if (skill) {
          return { name: skill.name, icon: skill.icon };
        } else {
          return { name: this.#data.getSkillName(skillId), icon: "" };
        }
      } else {
        return { name: skill.name, icon: skill.icon };
      }
    }
  }
  updateEntity(entity, values, time) {
    const updateTime = { lastUpdate: +time };
    let entityState = this.#game.entities.get(entity.name);
    let extraInfo = {};
    if (!entityState || (entity.entityType === 1 /* Player */ && entityState.isPlayer !== true)) {
      if (entity.entityType === 1 /* Player */) {
        const player = entity;
        extraInfo = { classId: player.class, gearScore: player.gearLevel, isPlayer: true };
      } else if (entity.entityType === 2 /* Npc */ || entity.entityType === 3 /* Summon */) {
        const npc = entity;
        extraInfo = { npcId: npc.typeId, isBoss: npc.isBoss };
      } else if (entity.entityType === 4 /* Esther */) {
        const esther = entity;
        extraInfo = { npcId: esther.typeId, isBoss: esther.isBoss, isEsther: true, icon: esther.icon };
      }
    }
    if (entityState) {
      Object.assign(entityState, values, updateTime, extraInfo);
    } else {
      entityState = {
        ...this.createEntity(),
        ...values,
        ...updateTime,
        ...extraInfo,
        ...{ name: entity.name },
        ...{ id: entity.entityId.toString(16) },
      };
      this.#game.entities.set(entity.name, entityState);
    }
    return entityState;
  }
  updateOrCreateEntity(entity, entityState, time) {
    if (!entityState.name || !entityState.id) return;
    for (const [k, e] of this.#game.entities) {
      if (entityState.id === e.id) {
        this.#game.entities.delete(k);
        this.updateEntity(entity, { ...e, ...entityState }, time);
        return;
      }
    }
    this.updateEntity(entity, entityState, time);
  }
  createEntitySkill() {
    const newEntitySkill = {
      id: 0,
      name: "",
      icon: "",
      damageInfo: {
        damageDealt: 0,
        rdpsDamageReceived: 0,
        rdpsDamageReceivedSupp: 0,
        rdpsDamageGiven: 0,
        damageDealtDebuffedBySupport: 0,
        damageDealtBuffedBySupport: 0,
      },
      maxDamage: 0,
      hits: {
        casts: 0,
        total: 0,
        crit: 0,
        backAttack: 0,
        totalBackAttack: 0,
        frontAttack: 0,
        totalFrontAttack: 0,
        counter: 0,
        hitsDebuffedBySupport: 0,
        hitsBuffedBySupport: 0,
        hitsBuffedBy: /* @__PURE__ */ new Map(),
        hitsDebuffedBy: /* @__PURE__ */ new Map(),
      },
      breakdown: [],
      damageDealtDebuffedBy: /* @__PURE__ */ new Map(),
      damageDealtBuffedBy: /* @__PURE__ */ new Map(),
    };
    return newEntitySkill;
  }
  createEntity() {
    const newEntity = {
      lastUpdate: 0,
      id: "",
      npcId: 0,
      name: "",
      classId: 0,
      isBoss: false,
      isPlayer: false,
      isDead: false,
      deaths: 0,
      deathTime: 0,
      gearScore: 0,
      currentHp: 0,
      maxHp: 0,
      damageInfo: {
        damageDealt: 0,
        rdpsDamageReceived: 0,
        rdpsDamageReceivedSupp: 0,
        rdpsDamageGiven: 0,
        damageDealtDebuffedBySupport: 0,
        damageDealtBuffedBySupport: 0,
      },
      healingDone: 0,
      shieldDone: 0,
      damageTaken: 0,
      skills: /* @__PURE__ */ new Map(),
      hits: {
        casts: 0,
        total: 0,
        crit: 0,
        backAttack: 0,
        totalBackAttack: 0,
        frontAttack: 0,
        totalFrontAttack: 0,
        counter: 0,
        hitsDebuffedBySupport: 0,
        hitsBuffedBySupport: 0,
        hitsBuffedBy: /* @__PURE__ */ new Map(),
        hitsDebuffedBy: /* @__PURE__ */ new Map(),
      },
      damageDealtDebuffedBy: /* @__PURE__ */ new Map(),
      damageDealtBuffedBy: /* @__PURE__ */ new Map(),
      damagePreventedByShieldBy: /* @__PURE__ */ new Map(),
      damagePreventedWithShieldOnOthersBy: /* @__PURE__ */ new Map(),
      shieldDoneBy: /* @__PURE__ */ new Map(),
      shieldReceivedBy: /* @__PURE__ */ new Map(),
      damagePreventedWithShieldOnOthers: 0,
      damagePreventedByShield: 0,
      shieldReceived: 0,
      statApiValid: false,
    };
    return newEntity;
  }
  getBroadcast() {
    const clone = { ...this.#game };
    clone.entities = /* @__PURE__ */ new Map();
    this.#game.entities.forEach((entity, id) => {
      if (!entity.isPlayer && !entity.isEsther) return;
      entity.statApiValid =
        this.#statApi.isCurrentZoneValid() && this.#statApi.cache.get(entity.name)?.status === 2 /* VALID */;
      clone.entities.set(id, { ...entity });
    });
    clone.localPlayer = this.#entityTracker.localPlayer.name;
    return clone;
  }
  //#region Breakdown Tracker
  resetBreakdowns() {
    this.#entityToSkillBreakdown.clear();
  }
  /**
   * Adds a breakdown entry for the given entity if it doesn't exist yet.
   *
   * @param entityId
   * @returns The entry for the given entity.
   */
  createBreakdownEntity(entityId) {
    if (!this.#entityToSkillBreakdown.has(entityId)) {
      this.#entityToSkillBreakdown.set(entityId, /* @__PURE__ */ new Map());
    }
    return this.#entityToSkillBreakdown.get(entityId);
  }
  /**
   * Removes the entry for the given entity.
   *
   * @param entityId The ID of the entity to remove the entry for.
   */
  removeBreakdownEntry(entityId) {
    this.#entityToSkillBreakdown.delete(entityId);
  }
  /**
   * Adds a breakdown to the given entity and skill.
   *
   * @param entityId The ID of the entity to add the breakdown for.
   * @param skillId The ID of the skill to add the breakdown for.
   * @param breakdown The breakdown to add.
   */
  addBreakdown(entityId, skillId, breakdown) {
    const entityBreakdown = this.createBreakdownEntity(entityId);
    if (!entityBreakdown.has(skillId)) {
      const skill = new Array(breakdown);
      entityBreakdown.set(skillId, skill);
    } else {
      entityBreakdown.get(skillId).push(breakdown);
    }
  }
  /**
   * Returns the breakdowns for the given entity and skill, or undefined if none exist.
   *
   * @param entityId The ID of the entity to get the breakdowns for.
   * @param skillId The ID of the skill to get the breakdowns for.
   * @returns The breakdowns for the given entity and skill, or undefined if none exist.
   */
  getBreakdowns(entityId, skillId) {
    const entityBreakdown = this.#entityToSkillBreakdown.get(entityId);
    if (!entityBreakdown) return void 0;
    return entityBreakdown.get(skillId);
  }
  /**
   * Clears the breakdowns for the given entity and skill.
   *
   * @param entityId The ID of the entity to clear the breakdowns for.
   * @param skillId The ID of the skill to clear the breakdowns for.
   */
  clearBreakdowns(entityId, skillId) {
    const entityBreakdown = this.#entityToSkillBreakdown.get(entityId);
    if (!entityBreakdown) return;
    entityBreakdown.delete(skillId);
  }
  /**
   * Applies the breakdowns to the given entity states and optionally clears
   * stored breakdowns afterwards. (Defaults to true)
   *
   * @param entityStates The entity states to apply the breakdowns to.
   * @param reset Whether to clear the stored breakdowns afterwards.
   */
  applyBreakdowns(entityStates, reset = true) {
    entityStates.forEach((entity) => {
      entity.skills.forEach((skill) => {
        const id = BigInt("0x" + entity.id);
        const breakdowns = this.getBreakdowns(id, skill.id);
        if (breakdowns) skill.breakdown = [...breakdowns];
      });
    });
    if (reset) this.resetBreakdowns();
  }
  //#endregion
  setKillState(state) {
    this.#game.killState = state;
  }
  setZoneLevel(zoneLevel) {
    this.#game.zoneLevel = zonelevel[zoneLevel];
  }
};

// src/logger/partytracker.ts
var PartyTracker = class {
  characterIdToPartyId;
  entityIdToPartyId;
  raidInstanceToPartyInstances;
  ownName;
  characterNameToCharacterId;
  #pcIdMapper;
  constructor(pcIdMapper) {
    this.characterIdToPartyId = /* @__PURE__ */ new Map();
    this.entityIdToPartyId = /* @__PURE__ */ new Map();
    this.raidInstanceToPartyInstances = /* @__PURE__ */ new Map();
    this.characterNameToCharacterId = /* @__PURE__ */ new Map();
    this.#pcIdMapper = pcIdMapper;
  }
  add(raidInstanceId, partyId, characterId = void 0, entityId = void 0, name116 = void 0) {
    if (!characterId && !entityId) return;
    if (characterId && !entityId) entityId = this.#pcIdMapper.getEntityId(characterId);
    if (entityId && !characterId) characterId = this.#pcIdMapper.getEntityId(entityId);
    if (characterId) this.characterIdToPartyId.set(characterId, partyId);
    if (entityId) this.entityIdToPartyId.set(entityId, partyId);
    if (name116 && characterId) this.characterNameToCharacterId.set(name116, characterId);
    this.registerPartyId(raidInstanceId, partyId);
  }
  completeEntry(characterId, entityId) {
    const charPartyId = this.getPartyIdFromCharacterId(characterId);
    const entPartyId = this.getPartyIdFromEntityId(entityId);
    if (charPartyId && entPartyId) return;
    if (!charPartyId && entPartyId) {
      this.characterIdToPartyId.set(characterId, entPartyId);
    }
    if (!entPartyId && charPartyId) {
      this.entityIdToPartyId.set(entityId, charPartyId);
    }
  }
  changeEntityId(oldEntityId, newEntityId) {
    const partyId = this.getPartyIdFromEntityId(oldEntityId);
    if (partyId) {
      this.entityIdToPartyId.delete(oldEntityId);
      this.entityIdToPartyId.set(newEntityId, partyId);
    }
  }
  setOwnName(name116) {
    this.ownName = name116;
  }
  remove(partyInstanceId, name116) {
    if (name116 === this.ownName) {
      this.removePartyMappings(partyInstanceId);
      return;
    }
    const chracterId = this.characterNameToCharacterId.get(name116);
    this.characterNameToCharacterId.delete(name116);
    if (!chracterId) return;
    this.characterIdToPartyId.delete(chracterId);
    const objectId = this.#pcIdMapper.getEntityId(chracterId);
    if (objectId) this.characterIdToPartyId.delete(objectId);
  }
  isCharacterInParty(characterId) {
    return this.characterIdToPartyId.has(characterId);
  }
  isEntityInParty(entityId) {
    return this.entityIdToPartyId.has(entityId);
  }
  getPartyIdFromCharacterId(characterId) {
    return this.characterIdToPartyId.get(characterId);
  }
  getPartyIdFromEntityId(entityId) {
    return this.entityIdToPartyId.get(entityId);
  }
  removePartyMappings(partyInstanceId) {
    const raidId = this.getRaidInstanceId(partyInstanceId);
    const partyIds = raidId
      ? this.raidInstanceToPartyInstances.get(raidId) ?? /* @__PURE__ */ new Set([partyInstanceId])
      : /* @__PURE__ */ new Set([partyInstanceId]);
    for (const [characterId, partyId] of this.characterIdToPartyId) {
      if (partyIds.has(partyId)) {
        this.characterIdToPartyId.delete(characterId);
        for (const [name116, charId] of this.characterNameToCharacterId) {
          if (characterId === charId) {
            this.characterNameToCharacterId.delete(name116);
            break;
          }
        }
      }
    }
    for (const [entityId, partyId] of this.entityIdToPartyId) {
      if (partyIds.has(partyId)) this.entityIdToPartyId.delete(entityId);
    }
  }
  getRaidInstanceId(partyId) {
    for (const data of this.raidInstanceToPartyInstances) {
      if (data[1].has(partyId)) return data[0];
    }
    return void 0;
  }
  registerPartyId(raidInstanceId, partyId) {
    let list = this.raidInstanceToPartyInstances.get(raidInstanceId);
    if (!list) {
      list = /* @__PURE__ */ new Set();
      this.raidInstanceToPartyInstances.set(raidInstanceId, list);
    }
    list.add(partyId);
  }
  partyInfo(pkt, entities, localPlayer) {
    const parsed = pkt.parsed;
    if (!parsed) return;
    if (parsed.memberDatas.length === 1 && parsed.memberDatas[0]?.name === localPlayer.name) {
      this.remove(parsed.partyInstanceId, parsed.memberDatas[0].name);
      return;
    }
    this.removePartyMappings(parsed.partyInstanceId);
    for (const pm of parsed.memberDatas) {
      if (pm.characterId === localPlayer.characterId) {
        this.setOwnName(pm.name);
      }
      const entityId = this.#pcIdMapper.getEntityId(pm.characterId);
      if (entityId) {
        const ent = entities.get(entityId);
        if (ent && ent.entityType === 1 /* Player */) {
          if (ent.name !== pm.name) {
            const p = ent;
            p.gearLevel = pm.gearLevel;
            p.name = pm.name;
            p.class = pm.classId;
          }
        }
      }
      this.add(parsed.raidInstanceId, parsed.partyInstanceId, pm.characterId, entityId, pm.name);
    }
    return;
  }
};

// src/logger/pcidmapper.ts
var PCIdMapper = class {
  entityToCharacterId;
  characterToEntityId;
  constructor() {
    this.entityToCharacterId = /* @__PURE__ */ new Map();
    this.characterToEntityId = /* @__PURE__ */ new Map();
  }
  addMapping(characterId, entityId) {
    this.entityToCharacterId.set(entityId, characterId);
    this.characterToEntityId.set(characterId, entityId);
  }
  getCharacterId(entityId) {
    return this.entityToCharacterId.get(entityId);
  }
  getEntityId(characterId) {
    return this.characterToEntityId.get(characterId);
  }
  clear() {
    this.entityToCharacterId.clear();
    this.characterToEntityId.clear();
  }
};

// src/logger/parser.ts
var cdRefunded = /* @__PURE__ */ new Map();
var qrProcTimes = new Array();
var lastSkillUsed = 0;
var qrValue = 0;
var qrprocs = 0;
var prevGauge = 0;
var Parser = class extends import_tiny_typed_emitter6.TypedEmitter {
  #logger;
  #data;
  #pcIdMapper;
  #partyTracker;
  #statusTracker;
  #entityTracker;
  #gameTracker;
  #statApi;
  //TODO: refactor
  #wasWipe;
  #wasKill;
  constructor(logger, data, clientId, options) {
    super();
    this.#logger = logger;
    this.#data = data;
    this.#pcIdMapper = new PCIdMapper();
    this.#partyTracker = new PartyTracker(this.#pcIdMapper);
    this.#statusTracker = new StatusTracker(this.#partyTracker, this.#data, options.isLive ?? true);
    this.#entityTracker = new EntityTracker(this.#pcIdMapper, this.#partyTracker, this.#statusTracker, this.#data);
    this.#statApi = new StatApi(
      this.#entityTracker,
      clientId,
      isLiveLogger(this.#logger, options.isLive) ? this.#logger : void 0
    );
    this.#gameTracker = new GameTracker(this.#entityTracker, this.#statusTracker, this.#statApi, this.#data, options);
    this.#gameTracker.emit = this.emit.bind(this);
    this.#wasWipe = false;
    this.#wasKill = false;
    if (this.#gameTracker.options.isLive) {
      setInterval(this.broadcastStateChange.bind(this), 100);
    }
    this.#logger
      .on("APP_StatApi", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#statApi.updatePlayerStats(parsed.players);
      })
      .on("AbilityChangeNotify", (pkt) => {})
      .on("ActiveAbilityNotify", (pkt) => {})
      .on("AddonSkillFeatureChangeNotify", (pkt) => {})
      .on("BlockSkillStateNotify", (pkt) => {})
      .on("CounterAttackNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const source = this.#entityTracker.entities.get(parsed.sourceId);
        if (source) this.#gameTracker.onCounterAttack(source, pkt.time);
      })
      .on("DeathNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const target = this.#entityTracker.entities.get(parsed.targetId);
        if (target) this.#gameTracker.onDeath(target, pkt.time);
      })
      .on("EquipChangeNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const player = this.#entityTracker.entities.get(parsed.objectId);
        if (!player || player.entityType !== 1 /* Player */) return;
        player.itemSet = this.#entityTracker.getPlayerSetOptions(parsed.equipItemDataList);
        const equipList = [];
        parsed.equipItemDataList.forEach((item) => {
          if (item.id !== void 0 && item.slot !== void 0) equipList.push({ id: item.id, slot: item.slot });
        });
        player.items.equipList = equipList;
      })
      .on("EquipLifeToolChangeNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const player = this.#entityTracker.entities.get(parsed.objectId);
        if (!player || player.entityType !== 1 /* Player */) return;
        const lifeToolList = [];
        parsed.equipLifeToolDataList.forEach((item) => {
          if (item.id !== void 0 && item.slot !== void 0) lifeToolList.push({ id: item.id, slot: item.slot });
        });
        player.items.lifeToolList = lifeToolList;
      })
      .on("IdentityStanceChangeNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const entity = this.#entityTracker.entities.get(parsed.objectId);
        if (entity && entity.entityType === 1 /* Player */) {
          entity.stance = parsed.stance;
        }
      })
      .on("IdentityGaugeChangeNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const entity = this.#entityTracker.entities.get(parsed.playerId);
        if (entity) {
          entity.entityType = 1 /* Player */;
          this.#entityTracker.entities.set(parsed.playerId, entity);
        }
        if (parsed.identityGauge1 < prevGauge) prevGauge = 0;
        let curGauge = parsed.identityGauge1 - prevGauge;
        console.log(`${curGauge}`);
        prevGauge = parsed.identityGauge1;
      })
      .on("InitAbility", (pkt) => {})
      .on("InitEnv", (pkt) => {
        this.#entityTracker.processInitEnv(pkt);
        this.#gameTracker.onInitEnv(pkt, pkt.time);
      })
      .on("InitLocal", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#statApi.updatePlayerStats2(this.#entityTracker.localPlayer.name, parsed.statPair);
      })
      .on("InitPC", (pkt) => {
        const player = this.#entityTracker.processInitPC(pkt);
        if (player && pkt.parsed) {
          const statsMap = this.#data.getStatPairMap(pkt.parsed.statPair);
          this.#gameTracker.updateOrCreateEntity(
            player,
            {
              id: player.entityId.toString(16),
              name: player.name,
              classId: player.class,
              isPlayer: true,
              gearScore: player.gearLevel,
              currentHp: Number(statsMap.get(1 /* hp */)) || 0,
              maxHp: Number(statsMap.get(27 /* max_hp */)) || 0,
            },
            pkt.time
          );
        }
      })
      .on("InitItem", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        if ([1 /* equip */, 20 /* account_equip */].includes(parsed.storageType)) {
          this.#entityTracker.localPlayer.itemSet = this.#entityTracker.getPlayerSetOptions(parsed.itemDataList);
          const equipList = [];
          parsed.itemDataList.forEach((item) => {
            if (item.id !== void 0 && item.slot !== void 0) equipList.push({ id: item.id, slot: item.slot });
          });
          this.#entityTracker.localPlayer.items.equipList = equipList;
        } else if (parsed.storageType === 21 /* life_tool */) {
          const lifeToolList = [];
          parsed.itemDataList.forEach((item) => {
            if (item.id !== void 0 && item.slot !== void 0) lifeToolList.push({ id: item.id, slot: item.slot });
          });
          this.#entityTracker.localPlayer.items.lifeToolList = lifeToolList;
        }
      })
      .on("MigrationExecute", (pkt) => {
        this.#statApi.zoneSyncStatus = 0 /* INVALID */;
        const parsed = pkt.parsed;
        if (!parsed) return;
        if (this.#entityTracker.localPlayer.characterId === 0n)
          this.#entityTracker.localPlayer.characterId =
            parsed.account_CharacterId1 < parsed.account_CharacterId2
              ? parsed.account_CharacterId1
              : parsed.account_CharacterId2;
        this.#statApi.ip = pkt.parsed.serverAddr.split(":")[0];
      })
      .on("NewNpc", (pkt) => {
        const npcEntity = this.#entityTracker.processNewNpc(pkt);
        if (npcEntity && pkt.parsed) {
          const statsMap = this.#data.getStatPairMap(pkt.parsed.npcStruct.statPair);
          this.#gameTracker.updateOrCreateEntity(
            npcEntity,
            {
              id: npcEntity.entityId.toString(16),
              name: npcEntity.name,
              npcId: npcEntity.typeId,
              isPlayer: false,
              isBoss: npcEntity.isBoss,
              currentHp: Number(statsMap.get(1 /* hp */)) || 0,
              maxHp: Number(statsMap.get(27 /* max_hp */)) || 0,
            },
            pkt.time
          );
        }
      })
      .on("NewNpcSummon", (pkt) => {
        const npcEntity = this.#entityTracker.processNewNpcSummon(pkt);
        if (npcEntity && pkt.parsed) {
          const statsMap = this.#data.getStatPairMap(pkt.parsed.npcData.statPair);
          this.#gameTracker.updateOrCreateEntity(
            npcEntity,
            {
              id: npcEntity.entityId.toString(16),
              name: npcEntity.name,
              npcId: npcEntity.typeId,
              isPlayer: false,
              isBoss: npcEntity.isBoss,
              currentHp: Number(statsMap.get(1 /* hp */)) || 0,
              maxHp: Number(statsMap.get(27 /* max_hp */)) || 0,
            },
            pkt.time
          );
        }
      })
      .on("NewPC", (pkt) => {
        const player = this.#entityTracker.processNewPC(pkt);
        if (player && pkt.parsed) {
          const statsMap = this.#data.getStatPairMap(pkt.parsed.pcStruct.statPair);
          this.#gameTracker.updateOrCreateEntity(
            player,
            {
              id: player.entityId.toString(16),
              name: player.name,
              classId: player.class,
              isPlayer: true,
              gearScore: player.gearLevel,
              currentHp: Number(statsMap.get(1 /* hp */)) || 0,
              maxHp: Number(statsMap.get(27 /* max_hp */)) || 0,
            },
            pkt.time
          );
        }
      })
      .on("NewProjectile", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const projectile = {
          entityId: parsed.projectileInfo.projectileId,
          entityType: 5 /* Projectile */,
          name: parsed.projectileInfo.projectileId.toString(16),
          ownerId: parsed.projectileInfo.ownerId,
          skillEffectId: parsed.projectileInfo.skillEffect,
          skillId: parsed.projectileInfo.skillId,
          stats: /* @__PURE__ */ new Map(),
        };
        this.#entityTracker.entities.set(projectile.entityId, projectile);
      })
      .on("NewTrap", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const projectile = {
          entityId: parsed.trapData.objectId,
          entityType: 5 /* Projectile */,
          name: parsed.trapData.objectId.toString(16),
          ownerId: parsed.trapData.ownerId,
          skillEffectId: parsed.trapData.skillEffect,
          skillId: parsed.trapData.skillId,
          stats: /* @__PURE__ */ new Map(),
        };
        this.#entityTracker.entities.set(projectile.entityId, projectile);
      })
      .on("ParalyzationStateNotify", (pkt) => {})
      .on("PartyInfo", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        parsed.memberDatas.forEach((e) => {
          if (e.characterId === this.#entityTracker.localPlayer.characterId)
            this.#statApi.updateLocalPlayerCache(e.name);
        });
        this.#partyTracker.partyInfo(pkt, this.#entityTracker.entities, this.#entityTracker.localPlayer);
      })
      .on("PartyLeaveResult", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#partyTracker.remove(parsed.partyInstanceId, parsed.name);
      })
      .on("PartyPassiveStatusEffectAddNotify", (pkt) => {})
      .on("PartyPassiveStatusEffectRemoveNotify", (pkt) => {})
      .on("PartyStatusEffectAddNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const effect of parsed.statusEffectDatas) {
          const sourceId = parsed.playerIdOnRefresh !== 0n ? parsed.playerIdOnRefresh : effect.sourceId;
          const sourceEnt = this.#entityTracker.getSourceEntity(sourceId);
          this.#statusTracker.RegisterStatusEffect(
            this.#statusTracker.buildStatusEffect(
              effect,
              parsed.characterId,
              sourceEnt.entityId,
              0 /* Party */,
              pkt.time
            )
          );
        }
      })
      .on("PartyStatusEffectRemoveNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const effectId of parsed.statusEffectIds) {
          const se = this.#statusTracker.RemoveStatusEffect(
            parsed.characterId,
            effectId,
            0 /* Party */,
            parsed.reason,
            pkt.time
          );
          if (se && se.statusEffectId === 9701) {
            this.#statApi.syncData();
          }
        }
      })
      .on("PartyStatusEffectResultNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#partyTracker.add(parsed.raidInstanceId, parsed.partyInstanceId, parsed.characterId);
      })
      .on("PassiveStatusEffectAddNotify", (pkt) => {})
      .on("PassiveStatusEffectRemoveNotify", (pkt) => {})
      .on("RaidBegin", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        if (this.#data.statQueryFilter.raid.has(parsed.raidId)) this.#statApi.zoneSyncStatus |= 16 /* RAID_VALID */;
        else this.#statApi.zoneSyncStatus |= 8 /* RAID_INVALID */;
      })
      .on("ZoneMemberLoadStatusNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#gameTracker.setZoneLevel(parsed.zoneLevel);
        if (
          this.#data.statQueryFilter.zone.has(parsed.zoneId) &&
          [0 /* normal */, 1 /* hard */, 5 /* extreme */].includes(parsed.zoneLevel)
        )
          this.#statApi.zoneSyncStatus |= 4 /* ZONE_VALID */;
        else this.#statApi.zoneSyncStatus |= 2 /* ZONE_INVALID */;
      })
      .on("RaidBossKillNotify", (pkt) => {
        this.#gameTracker.setKillState(1 /* CLEAR */);
        setTimeout(() => this.#gameTracker.onPhaseTransition(1, pkt.time), 500);
        this.spitQrStats();
        this.resetQrStats();
      })
      .on("RaidResult", (pkt) => {
        if (pkt.parsed?.raidResult === 1 /* clear */) this.#gameTracker.setKillState(1 /* CLEAR */);
        this.#gameTracker.onPhaseTransition(0, pkt.time);
        this.spitQrStats();
        this.resetQrStats();
      })
      .on("RemoveObject", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const upo of parsed.unpublishedObjects) this.#statusTracker.RemoveLocalObject(upo.objectId, pkt.time);
      })
      .on("SkillCastNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        let ownerEntity = this.#entityTracker.getSourceEntity(parsed.caster);
        ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsed.skillId);
        this.#gameTracker.onStartSkill(ownerEntity, parsed.skillId, pkt.time);
      })
      .on("SkillDamageAbnormalMoveNotify", (pkt) => {
        const parsedDmg = pkt.parsed;
        if (!parsedDmg) return;
        console.log(
          `skillId: ${parsedDmg.skillId} | skillEffectId: ${parsedDmg.skillEffectId} | ${data.getSkillName(
            parsedDmg.skillId
          )}`
        );
        const ownerEntity = this.#entityTracker.getSourceEntity(parsedDmg.sourceId);
        parsedDmg.skillDamageAbnormalMoveEvents.forEach((event) => {
          let type = this.#entityTracker.entities.get(parsedDmg.sourceId)?.entityType;
          const targetEntity = this.#entityTracker.getOrCreateEntity(event.skillDamageEvent.targetId);
          const sourceEntity = this.#entityTracker.getOrCreateEntity(parsedDmg.sourceId);
          targetEntity.stats.set(1 /* hp */, event.skillDamageEvent.curHp);
          targetEntity.stats.set(27 /* max_hp */, event.skillDamageEvent.maxHp);
          this.#gameTracker.onDamage(
            ownerEntity,
            sourceEntity,
            targetEntity,
            {
              skillId: parsedDmg.skillId,
              skillEffectId: parsedDmg.skillEffectId,
              damage: Number(event.skillDamageEvent.damage),
              modifier: event.skillDamageEvent.modifier,
              targetCurHp: Number(event.skillDamageEvent.curHp),
              targetMaxHp: Number(event.skillDamageEvent.maxHp),
              damageAttr: event.skillDamageEvent.damageAttr ?? 0 /* none */,
              damageType: event.skillDamageEvent.damageType,
            },
            parsedDmg.skillDamageAbnormalMoveEvents.length,
            pkt.time
          );
        });
      })
      .on("SkillDamageNotify", (pkt) => {
        const parsedDmg = pkt.parsed;
        if (!parsedDmg) return;
        console.log(
          `skillId: ${parsedDmg.skillId} | skillEffectId: ${parsedDmg.skillEffectId} | ${data.getSkillName(
            parsedDmg.skillId
          )}`
        );
        const ownerEntity = this.#entityTracker.getSourceEntity(parsedDmg.sourceId);
        parsedDmg.skillDamageEvents.forEach((event) => {
          let type = this.#entityTracker.entities.get(parsedDmg.sourceId)?.entityType;
          const targetEntity = this.#entityTracker.getOrCreateEntity(event.targetId);
          const sourceEntity = this.#entityTracker.getOrCreateEntity(parsedDmg.sourceId);
          this.#gameTracker.onDamage(
            ownerEntity,
            sourceEntity,
            targetEntity,
            {
              skillId: parsedDmg.skillId,
              skillEffectId: parsedDmg.skillEffectId ?? 0,
              damage: Number(event.damage),
              modifier: event.modifier,
              targetCurHp: Number(event.curHp),
              targetMaxHp: Number(event.maxHp),
              damageAttr: event.damageAttr ?? 0 /* none */,
              damageType: event.damageType,
            },
            parsedDmg.skillDamageEvents.length,
            pkt.time
          );
        });
      })
      .on("SkillStageNotify", (pkt) => {})
      .on("SkillStartNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        let ownerEntity = this.#entityTracker.getSourceEntity(parsed.sourceId);
        ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsed.skillId);
        if (ownerEntity.entityType === 1 /* Player */) {
          const player = ownerEntity;
          let skill = player.skills.get(parsed.skillId);
          if (!skill) {
            skill = { effects: /* @__PURE__ */ new Set(), tripods: /* @__PURE__ */ new Map() };
            player.skills.set(parsed.skillId, skill);
          }
          skill.level = parsed.skillLevel;
          if (parsed.skillOptionData.tripodIndex && parsed.skillOptionData.tripodLevel) {
            if (!skill.tripods) {
              skill.tripods = /* @__PURE__ */ new Map();
            }
            for (const [idx, tripodRow] of ["first", "second", "third"].entries()) {
              if (parsed.skillOptionData.tripodIndex[tripodRow] === 0) {
                for (let num = 1; num <= 3; num++) {
                  skill.tripods.delete(3 * idx + num);
                }
                continue;
              }
              const tripodIdx = 3 * idx + parsed.skillOptionData.tripodIndex[tripodRow];
              const tripodLevel = parsed.skillOptionData.tripodLevel[tripodRow];
              let tripodData = skill.tripods.get(tripodIdx);
              if (tripodData && tripodLevel === tripodData.level) continue;
              for (let num = 1; num <= 3; num++) {
                skill.tripods.delete(3 * idx + num);
              }
              const effect = this.#data.skillFeature.get(parsed.skillId)?.get(tripodIdx);
              let options2 = [];
              if (effect) {
                effect.entries.forEach((entry) => {
                  if (entry.level !== 0 && entry.level !== tripodLevel) return;
                  options2.push(entry);
                });
              }
              skill.tripods.set(tripodIdx, {
                level: parsed.skillOptionData.tripodLevel[tripodRow],
                options: options2.sort((a, b) => b.level - a.level),
              });
            }
          }
        }
        this.#gameTracker.onStartSkill(ownerEntity, parsed.skillId, pkt.time);
      })
      .on("StatusEffectAddNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const sourceEnt = this.#entityTracker.getSourceEntity(parsed.statusEffectData.sourceId);
        this.#statusTracker.RegisterStatusEffect(
          this.#statusTracker.buildStatusEffect(
            parsed.statusEffectData,
            parsed.objectId,
            sourceEnt.entityId,
            1 /* Local */,
            pkt.time
          )
        );
      })
      .on("StatusEffectDurationNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#statusTracker.UpdateDuration(
          parsed.effectInstanceId,
          parsed.targetId,
          parsed.expirationTick,
          1 /* Local */
        );
      })
      .on("StatusEffectRemoveNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const effectId of parsed.statusEffectIds) {
          const se = this.#statusTracker.RemoveStatusEffect(
            parsed.objectId,
            effectId,
            1 /* Local */,
            parsed.reason,
            pkt.time
          );
          if (se && se.statusEffectId === 9701) {
            this.#statApi.syncData();
          }
        }
      })
      .on("StatusEffectSyncDataNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#statusTracker.SyncStatusEffect(
          parsed.effectInstanceId,
          parsed.characterId,
          parsed.objectId,
          parsed.value,
          this.#entityTracker.localPlayer.characterId
        );
      })
      .on("TriggerBossBattleStatus", (pkt) => {
        this.#gameTracker.onPhaseTransition(2, pkt.time);
        this.spitQrStats();
        this.resetQrStats();
      })
      .on("TriggerFinishNotify", (pkt) => {})
      .on("TriggerStartNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        switch (parsed.triggerSignalType) {
          case 57 /* dungeon_phase1_clear */:
          case 59 /* dungeon_phase2_clear */:
          case 61 /* dungeon_phase3_clear */:
          case 63 /* dungeon_phase4_clear */:
          case 74 /* dungeon_phase5_clear */:
          case 76 /* dungeon_phase6_clear */:
            this.#gameTracker.setKillState(1 /* CLEAR */);
            break;
          case 58 /* dungeon_phase1_fail */:
          case 60 /* dungeon_phase2_fail */:
          case 62 /* dungeon_phase3_fail */:
          case 64 /* dungeon_phase4_fail */:
          case 75 /* dungeon_phase5_fail */:
          case 77 /* dungeon_phase6_fail */:
            this.#gameTracker.setKillState(0 /* FAIL */);
            break;
          case 27 /* assembled */:
          case 10 /* volume_enter */:
          case 11 /* volume_leave */:
            this.#statApi.syncData();
        }
      })
      .on("TroopMemberUpdateMinNotify", (pkt) => {})
      .on("ZoneObjectUnpublishNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#statusTracker.RemoveLocalObject(parsed.objectId, pkt.time);
      })
      .on("ZoneStatusEffectAddNotify", (pkt) => {})
      .on("TroopMemberUpdateMinNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        if (parsed.statusEffectDatas.length > 0) {
          for (const se of parsed.statusEffectDatas) {
            const objectId = this.#pcIdMapper.getEntityId(parsed.characterId);
            const newValCandidate1 = se.value ? se.value.readUInt32LE() : 0;
            const newValCandidate2 = se.value ? se.value.readUInt32LE(8) : 0;
            const newVal = newValCandidate1 < newValCandidate2 ? newValCandidate1 : newValCandidate2;
            this.#statusTracker.SyncStatusEffect(
              se.effectInstanceId,
              parsed.characterId,
              objectId,
              newVal,
              this.#entityTracker.localPlayer.characterId
            );
          }
        }
      })
      .on("ZoneStatusEffectRemoveNotify", (pkt) => {})
      .on("InstanceZoneEnteredNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        if (this.#data.statQueryFilter.zone.has(parsed.zoneId)) {
          logger.writeLogFile = true;
        } else {
          logger.writeLogFile = false;
        }
      })
      .on("PCInspectResult", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#statApi.updatePlayerStats2(parsed.name, parsed.statPairList);
      })
      .on("SkillCooldownNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
      });
    this.#statusTracker
      .on("shieldApplied", (se) => {
        let targetObjectId = se.targetId;
        if (se.type === 0 /* Party */) {
          targetObjectId = this.#pcIdMapper.getEntityId(se.targetId) ?? targetObjectId;
        }
        if (targetObjectId === void 0) return;
        const sourceEntity = this.#entityTracker.getSourceEntity(se.sourceId);
        const targetEntity = this.#entityTracker.getOrCreateEntity(targetObjectId);
        this.#gameTracker.onShieldApplied(targetEntity, sourceEntity, se.statusEffectId, se.value);
      })
      .on("shieldChanged", (se, oldValue, newVal) => {
        let targetObjectId = se.targetId;
        if (se.type === 0 /* Party */) {
          targetObjectId = this.#pcIdMapper.getEntityId(se.targetId) ?? targetObjectId;
        }
        if (targetObjectId === void 0) return;
        const sourceEntity = this.#entityTracker.getSourceEntity(se.sourceId);
        const targetEntity = this.#entityTracker.getOrCreateEntity(targetObjectId);
        this.#gameTracker.onShieldUsed(targetEntity, sourceEntity, se.statusEffectId, oldValue - newVal);
      });
  }
  //TODO: method to change broadcast interval (without restart)
  broadcastStateChange() {
    this.emit("state-change", this.#gameTracker.getBroadcast());
  }
  reset() {
    this.#gameTracker.resetState(+(/* @__PURE__ */ new Date()));
  }
  cancelReset() {
    this.#gameTracker.cancelReset();
  }
  updateOptions(options) {
    this.#gameTracker.updateOptions(options);
  }
  onConnect(ip) {
    if (!this.#statApi.ip) {
      this.#statApi.ip = ip.split(":")[0];
      if (isLiveLogger(this.#logger, this.#gameTracker.options.isLive)) {
        this.#logger.appendLog(
          new LogEvent(
            {
              account_CharacterId1: 0n,
              serverAddr: ip,
              account_CharacterId2: 0n,
            },
            11 /* MigrationExecute */,
            write22
          )
        );
      }
    }
  }
  get encounters() {
    this.#gameTracker.splitEncounter(/* @__PURE__ */ new Date());
    return this.#gameTracker.encounters;
  }
  resetQrStats() {
    lastSkillUsed = 0;
    qrValue = 0;
    qrprocs = 0;
    cdRefunded.clear();
    qrProcTimes = [];
  }
  spitQrStats() {
    if (qrprocs !== 0) {
      let totalTime = 0;
      console.log(`Total qr procs: ${qrprocs}`);
      for (const [key, value] of cdRefunded.entries()) {
        totalTime += value;
        console.log(`Refunded: ${value.toFixed(3).padStart(6, " ")}s | ${this.#data.getSkillName(key)}`);
      }
      console.log(`Total CD refunded: ${totalTime.toFixed(3)}s`);
      if (qrProcTimes.length > 1) {
        let res = qrProcTimes.map((v, i, a) => (i ? v - a[i - 1] : 0 - v));
        res = res.slice(1).sort();
        const shortest = res[0] / 1e3;
        const longest = res[res.length - 1] / 1e3;
        console.log(`Shortest time between procs: ${shortest.toFixed(3)}s`);
        console.log(`Longest time between procs: ${longest.toFixed(3)}s`);
        let average = res.reduce((sum, a) => sum + a, 0) / res.length / 1e3;
        console.log(`Avg time between procs: ${average.toFixed(3)}s`);
      }
    }
  }
};
function isLiveLogger(logger, isLive) {
  return logger instanceof LiveLogger || (logger.appendLog && isLive);
}

// src/test2.ts
var import_path2 = __toESM(require("path"));
var import_util = require("util");
import_util.inspect.defaultOptions.depth = null;
var oodle_state = (0, import_fs4.readFileSync)("./meter-data/oodle_state.bin");
var xorTable = (0, import_fs4.readFileSync)("./meter-data/xor.bin");
var decompressor = new Decompressor(oodle_state, xorTable);
var stream = new PKTStream(decompressor);
var meterData = new MeterData();
meterData.loadDbs("meter-data/databases");
function logEvent(name116, pkt) {
  console.log(
    `${name116} - ${+pkt.time} - ${JSON.stringify(pkt.parsed, (_, v) => (typeof v === "bigint" ? v.toString() : v))}`
  );
}
for (const server of [6020, 6040]) {
  const capture = new PktCaptureAll(0 /* MODE_PCAP */, server);
  capture.on("packet", (buf) => {
    try {
      const badPkt = stream.read(buf);
      if (badPkt === false) console.error(`bad pkt ${buf.toString("hex")}`);
    } catch (e) {
      console.error(e);
    }
  });
}
var testLive = true;
if (testLive) {
  const logger = new LiveLogger(stream, decompressor, import_path2.default.resolve("./test3.raw"));
  const parser = new Parser(logger, meterData, "test_client", {
    isLive: true,
    resetAfterPhaseTransition: true,
  });
} else {
  const test = /* @__PURE__ */ new Map();
  const logger = new ReplayLogger();
  let count = 0;
  const m = /* @__PURE__ */ new Map();
  const parser = new Parser(logger, meterData, "test_client", {
    isLive: true,
    resetAfterPhaseTransition: true,
  });
  logger.on("*", (name116, pkt) => {
    logEvent(name116, pkt);
  });
  logger.readLogByChunk(import_path2.default.resolve("./test.raw"));
  logger.on("fileEnd", () => {
    console.log(count);
  });
}
stream.on("*", (data, opcode59, compression, xor) => {
  try {
    const decomp = decompressor.decrypt(data, opcode59, compression, xor);
    let name116 = null;
    var pkt = mapping.get(opcode59);
    if (pkt) {
      [name116] = pkt;
    }
    const fs = require("fs");
    const content = `-> ${name116 ?? opcode59.toString(16).padStart(4, "0").toUpperCase()} : ${decomp
      .toString("hex")
      .toUpperCase()
      .match(/.{2}/g)
      ?.join(" ")}
`;
    if (name116) {
    }
  } catch (e) {
    console.error(e);
  }
});
console.log("Test2: Logging");
//# sourceMappingURL=test2.js.map
