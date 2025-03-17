import { util } from "../../utils/util";
import { v2 } from "../../utils/v2";
import { Main } from "./baseDefs";

const mapDef = {
    mapId: 7,
    desc: {
        name: "Cobalt",
        icon: "img/gui/cobalt.svg",
        buttonCss: "btn-mode-cobalt",
    },
    assets: {
        audio: [
            { name: "spawn_01", channel: "ui" },
            { name: "ping_unlock_01", channel: "ui" },
            { name: "ambient_lab_01", channel: "ambient" },
            { name: "log_13", channel: "sfx" },
            { name: "log_14", channel: "sfx" },
        ],
        atlases: ["gradient", "loadout", "shared", "cobalt"],
    },
    biome: {
        colors: {
            background: 134680,
            water: 13681,
            beach: 6834230,
            riverbank: 4472122,
            grass: 5069416,
            underground: 1772803,
            playerSubmerge: 1192009,
            playerGhillie: 4937830,
        },
        particles: {},
    },
    lootTable: {
        // common: both common
        // rare: common + uncommon (?)
        tier_guns_common_scout: [
            { name: "glock_dual", count: 1, weight: 0.4},
            { name: "ot38_dual", count: 1, weight: 0.4},
        ],
        tier_guns_rare_scout: [
            { name: "ots30_dual", count: 1, weight: 0.4},
            { name: "p30l_dual", count: 1, weight: 0.4},
            { name: "deagle_dual", count: 1, weight: 0.25},
        ],
        tier_guns_common_sniper: [
            { name: "blr", count: 1, weight: 0.4},
            { name: "mosin", count: 1, weight: 0.4},
        ],
        tier_guns_rare_sniper: [
            { name: "mosin", count: 1, weight: 0.4},
            { name: "awc", count: 1, weight: 0.25},
        ],
        tier_guns_common_healer: [
            { name: "mk12", count: 1, weight: 0.4},
            { name: "m39", count: 1, weight: 0.4},
        ],
        tier_guns_rare_healer: [
            { name: "svd", count: 1, weight: 0.4},
            { name: "l86", count: 1, weight: 0.4},
            { name: "garand", count: 1, weight: 0.25},
        ],
        tier_guns_common_demo: [
            { name: "m870", count: 1, weight: 0.4},
            { name: "spas12", count: 1, weight: 0.4},
        ],
        tier_guns_rare_demo: [
            { name: "mp220", count: 1, weight: 0.4},
            { name: "saiga", count: 1, weight: 0.4},
            { name: "usas", count: 1, weight: 0.25},
        ],
        tier_guns_common_assault: [
            { name: "ak47", count: 1, weight: 0.4},
            { name: "hk416", count: 1, weight: 0.4},
            { name: "groza", count: 1, weight: 0.4},
            { name: "famas", count: 1, weight: 0.4},
        ],
        tier_guns_rare_assault: [
            { name: "scar", count: 1, weight: 0.4},
            { name: "grozas", count: 1, weight: 0.4},
            { name: "m4a1", count: 1, weight: 0.4},
            { name: "an94", count: 1, weight: 0.25},
        ],
        tier_guns_common_tank: [
            { name: "dp28", count: 1, weight: 0.4},
            { name: "qbb97", count: 1, weight: 0.25},
        ],
        tier_guns_rare_tank: [
            { name: "qbb97", count: 1, weight: 0.4},
            { name: "m249", count: 1, weight: 0.25},
            { name: "pkp", count: 1, weight: 0.25},
        ],
    },
    /* STRIP_FROM_PROD_CLIENT:START */
    mapGen: {
        customSpawnRules: {
            locationSpawns: [
                {
                    type: "bunker_structure_09",
                    pos: v2.create(0.5, 0.5),
                    rad: 100,
                    retryOnFailure: true,
                },
            ],
        },
        densitySpawns: [
            {
                stone_01cb: 350,
                barrel_01: 76,
                silo_01: 8,
                crate_01: 50,
                crate_02: 4,
                crate_03: 8,
                bush_01cb: 78,
                cache_06: 12,
                tree_01cb: 100,
                hedgehog_01: 24,
                container_01: 5,
                container_02: 5,
                container_03: 5,
                container_04: 5,
                shack_01: 7,
                outhouse_01: 5,
                loot_tier_1: 24,
                loot_tier_beach: 4,
                // new, guesses
                class_shell_01: 50,
                class_shell_02: 20,
            },
        ],
        fixedSpawns: [
            {
                warehouse_01: 2,
                house_red_01: { small: 3, large: 4 },
                house_red_02: { small: 3, large: 4 },
                barn_01: { small: 1, large: 3 },
                barn_02: 1,
                hut_01: 3,
                hut_02: 1, // spas hut
                hut_03: 1, // scout hut
                shack_03a: 2,
                shack_03b: { small: 2, large: 3 },
                cache_01: 1,
                cache_02: 1, // mosin tree
                cache_07: 1,
                bunker_structure_01: { odds: 0.05 },
                bunker_structure_02: 1,
                bunker_structure_03: 1,
                bunker_structure_04: 1,
                bunker_structure_05: 1,
                warehouse_complex_01: 1,
                chest_01: 1,
                chest_03: { odds: 0.2 },
                mil_crate_02: { odds: 0.25 },
                teahouse_complex_01su: {
                    small: 1,
                    large: 2,
                },
                stone_04: 1,
                club_complex_01: 1,
                bunker_structure_09: 1
            },
        ],
        randomSpawns: [
            {
                spawns: ["mansion_structure_01", "police_01"],
                choose: 2,
            },
        ],
        spawnReplacements: [
            { stone_03: "stone_03cb" }
        ],
        importantSpawns: ["bunker_structure_09"],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
    gameMode: {
        maxPlayers: 80,
        perkMode: true,
        perkModeRoles: ["scout", "sniper", "healer", "demo", "assault", "tank"],
        // perkModeRoles: ["scout", "sniper", "healer", "demo", "assault", "tank", "leader"],
    },
};

export const Cobalt = util.mergeDeep({}, Main, mapDef);
