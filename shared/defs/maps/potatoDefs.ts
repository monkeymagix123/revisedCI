import { GameConfig } from "../../gameConfig";
import { util } from "../../utils/util";
import type { MapDef } from "../mapDefs";
import { Main } from "./baseDefs";

const mapDef = {
    mapId: 4,
    desc: {
        name: "Potato",
        icon: "img/loot/loot-throwable-potato.svg",
        buttonCss: "btn-mode-potato",
    },
    assets: {
        audio: [
            { name: "pumpkin_break_01", channel: "sfx" },
            { name: "potato_01", channel: "sfx" },
            { name: "potato_02", channel: "sfx" },
            { name: "potato_pickup_01", channel: "ui" },
            { name: "club_music_01", channel: "ambient" },
            { name: "club_music_02", channel: "ambient" },
            {
                name: "ambient_steam_01",
                channel: "ambient",
            },
            { name: "log_11", channel: "sfx" },
            { name: "log_12", channel: "sfx" },
        ],
        atlases: ["gradient", "loadout", "shared", "potato"],
    },
    biome: {
        colors: {
            background: 2118510,
            water: 3310251,
            waterRipple: 11792639,
            beach: 13480795,
            riverbank: 9461284,
            grass: 8433481,
            underground: 1772803,
            playerSubmerge: 2854052,
        },
        particles: { camera: "falling_potato" },
        frozenSprites: ["player-mash-01.img", "player-mash-02.img", "player-mash-03.img"],
    },
    gameMode: { maxPlayers: 80, potatoMode: true },
    /* STRIP_FROM_PROD_CLIENT:START */
    gameConfig: {
        planes: {
            timings: [
                {
                    circleIdx: 1,
                    wait: 10,
                    options: { type: GameConfig.Plane.Airdrop },
                },
                {
                    circleIdx: 3,
                    wait: 2,
                    options: { type: GameConfig.Plane.Airdrop },
                },
            ],
            crates: [
                { name: "airdrop_crate_01", weight: 1 },
                { name: "airdrop_crate_02", weight: 1 },
            ],
        },
    },
    lootTable: {
        tier_guns: [
            { name: "mp5", count: 1, weight: 10 },
            { name: "mac10", count: 1, weight: 6 },
            { name: "m870", count: 1, weight: 9 },
            { name: "m1100", count: 1, weight: 6 },
            { name: "ot38", count: 1, weight: 8 },
            { name: "m9", count: 1, weight: 19 },
            { name: "m93r", count: 1, weight: 5 },
            { name: "glock", count: 1, weight: 7 },
        ],
        tier_throwables: [
            { name: "frag", count: 2, weight: 1 },
            { name: "smoke", count: 1, weight: 1 },
            { name: "mirv", count: 2, weight: 0.05 },
            { name: "potato", count: 5, weight: 2 },
        ],
        tier_airdrop_throwables: [
            { name: "frag", count: 2, weight: 1 },
            { name: "mirv", count: 2, weight: 0.5 },
            { name: "potato", count: 10, weight: 2 },
        ],
        tier_ammo: [
            { name: "9mm", count: 60, weight: 1 },
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 3 },
            { name: "12gauge", count: 10, weight: 3 },
            { name: "45acp", count: 60, weight: 3 },
        ],
        tier_ammo_crate: [
            { name: "9mm", count: 60, weight: 1 },
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 3 },
            { name: "12gauge", count: 10, weight: 3 },
            { name: "45acp", count: 60, weight: 3 },
        ],
        tier_airdrop_ammo: [
            { name: "9mm", count: 60, weight: 1 },
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 3 },
            { name: "12gauge", count: 10, weight: 3 },
            { name: "45acp", count: 60, weight: 3 },
        ],
        tier_armor: [
            { name: "helmet01", count: 1, weight: 9 },
            { name: "helmet02", count: 1, weight: 6 },
            { name: "helmet03", count: 1, weight: 0.2 },
            {
                name: "helmet03_potato",
                count: 1,
                weight: 0.1,
            },
            { name: "chest01", count: 1, weight: 15 },
            { name: "chest02", count: 1, weight: 6 },
            { name: "chest03", count: 1, weight: 0.2 },
        ],
        tier_police: [
            { name: "scar", count: 1, weight: 0.5 },
            { name: "helmet03", count: 1, weight: 0.15 },
            {
                name: "helmet03_potato",
                count: 1,
                weight: 0.1,
            },
            { name: "chest03", count: 1, weight: 0.1 },
            { name: "backpack03", count: 1, weight: 0.25 },
        ],
        tier_airdrop_armor: [
            { name: "helmet03", count: 1, weight: 1 },
            {
                name: "helmet03_potato",
                count: 1,
                weight: 0.1,
            },
            { name: "chest03", count: 1, weight: 1 },
            { name: "backpack03", count: 1, weight: 1 },
        ],
        tier_ring_case: [{ name: "potato_cannon", count: 1, weight: 1 }],
        tier_airdrop_rare: [{ name: "potato_cannon", count: 1, weight: 1 }],

        tier_chest: [
            { name: "potato_smg", count: 1, weight: 1},
        ],

        // // from wiki, random guess
        // tier_potato_perks: [
        //     { name: "", count: 1, weight: 480 },
        //     { name: "firepower", count: 1, weight: 15 },
        //     { name: "windwalk", count: 1, weight: 15 },
        //     { name: "endless_ammo", count: 1, weight: 15 },
        //     { name: "splinter", count: 1, weight: 15 },
        //     { name: "small_arms", count: 1, weight: 15 },
        //     { name: "takedown", count: 1, weight: 15 },
        //     { name: "field_medic", count: 1, weight: 15 },
        //     { name: "scavenger", count: 1, weight: 15 },
        //     { name: "chambered", count: 1, weight: 15 },
        //     { name: "martyrdom", count: 1, weight: 15 },
        //     { name: "self_revive", count: 1, weight: 15 },
        //     { name: "tree_climbing", count: 1, weight: 15 }
        // ],
        // from code
        tier_perks: [
            { name: "firepower", count: 1, weight: 1 },
            { name: "windwalk", count: 1, weight: 1 },
            { name: "endless_ammo", count: 1, weight: 1 },
            { name: "steelskin", count: 1, weight: 1 },
            { name: "splinter", count: 1, weight: 1 },
            { name: "small_arms", count: 1, weight: 1 },
            { name: "takedown", count: 1, weight: 1 },
            { name: "field_medic", count: 1, weight: 1 },
            { name: "tree_climbing", count: 1, weight: 1 },
            { name: "scavenger", count: 1, weight: 1 },
            { name: "chambered", count: 1, weight: 1 },
            { name: "martyrdom", count: 1, weight: 1 },
            { name: "self_revive", count: 1, weight: 1 },
            { name: "bonus_9mm", count: 1, weight: 1 },
        ],
        tier_potato_perks: [
            { name: "", count: 1, weight: 25 },
            { name: "tier_perks", count: 1, weight: 1 },
        ],

        tier_pguns: [
            // { name: "", count: 1, weight: 1},
            { "name": "famas", "count": 1, "weight": 1 },
            { "name": "hk416", "count": 1, "weight": 1 },
            { "name": "mk12", "count": 1, "weight": 1 },
            { "name": "pkp", "count": 1, "weight": 1 },
            { "name": "m249", "count": 1, "weight": 1 },
            { "name": "ak47", "count": 1, "weight": 1 },
            { "name": "scar", "count": 1, "weight": 1 },
            { "name": "dp28", "count": 1, "weight": 1 },
            { "name": "mosin", "count": 1, "weight": 1 },
            { "name": "m39", "count": 1, "weight": 1 },
            { "name": "mp5", "count": 1, "weight": 1 },
            { "name": "mac10", "count": 1, "weight": 1 },
            { "name": "ump9", "count": 1, "weight": 1 },
            { "name": "m870", "count": 1, "weight": 1 },
            { "name": "m1100", "count": 1, "weight": 1 },
            { "name": "mp220", "count": 1, "weight": 1 },
            { "name": "saiga", "count": 1, "weight": 1 },
            { "name": "ot38", "count": 1, "weight": 1 },
            { "name": "ot38_dual", "count": 1, "weight": 1 },
            { "name": "ots38", "count": 1, "weight": 1 },
            { "name": "ots38_dual", "count": 1, "weight": 1 },
            { "name": "m9", "count": 1, "weight": 1 },
            { "name": "m9_dual", "count": 1, "weight": 1 },
            { "name": "m93r", "count": 1, "weight": 1 },
            { "name": "m93r_dual", "count": 1, "weight": 1 },
            { "name": "glock", "count": 1, "weight": 1 },
            { "name": "glock_dual", "count": 1, "weight": 1 },
            { "name": "deagle", "count": 1, "weight": 1 },
            { "name": "deagle_dual", "count": 1, "weight": 1 },
            { "name": "vector", "count": 1, "weight": 1 },
            { "name": "sv98", "count": 1, "weight": 1 },
            { "name": "spas12", "count": 1, "weight": 1 },
            { "name": "qbb97", "count": 1, "weight": 1 },
            { "name": "flare_gun", "count": 1, "weight": 1 },
            { "name": "flare_gun_dual", "count": 1, "weight": 1 },
            { "name": "groza", "count": 1, "weight": 1 },
            { "name": "grozas", "count": 1, "weight": 1 },
            { "name": "scout_elite", "count": 1, "weight": 1 },
            { "name": "vss", "count": 1, "weight": 1 },
            { "name": "p30l", "count": 1, "weight": 1 },
            { "name": "p30l_dual", "count": 1, "weight": 1 },
            { "name": "scorpion", "count": 1, "weight": 1 },
            { "name": "usas", "count": 1, "weight": 1 },
            { "name": "m1014", "count": 1, "weight": 1 },
            { "name": "bar", "count": 1, "weight": 1 },
            { "name": "garand", "count": 1, "weight": 1 },
            { "name": "an94", "count": 1, "weight": 1 },
            { "name": "svd", "count": 1, "weight": 1 },
            { "name": "blr", "count": 1, "weight": 1 },
            { "name": "m4a1", "count": 1, "weight": 1 },
            { "name": "l86", "count": 1, "weight": 1 },
            { "name": "awc", "count": 1, "weight": 1 },
            { "name": "scarssr", "count": 1, "weight": 1 },
            { "name": "vector45", "count": 1, "weight": 1 },
            { "name": "m1911", "count": 1, "weight": 1 },
            { "name": "m1911_dual", "count": 1, "weight": 1 },
            { "name": "m1a1", "count": 1, "weight": 1 },
            { "name": "colt45", "count": 1, "weight": 1 },
            { "name": "colt45_dual", "count": 1, "weight": 1 },
            { "name": "model94", "count": 1, "weight": 1 },
            { "name": "mkg45", "count": 1, "weight": 1 }
        ],
        tier_pmelee: [
            { "name": "fists", "count": 1, "weight": 1 },
            { "name": "karambit_rugged", "count": 1, "weight": 1 },
            { "name": "karambit_prismatic", "count": 1, "weight": 1 },
            { "name": "karambit_drowned", "count": 1, "weight": 1 },
            { "name": "bayonet_rugged", "count": 1, "weight": 1 },
            { "name": "bayonet_woodland", "count": 1, "weight": 1 },
            { "name": "huntsman_rugged", "count": 1, "weight": 1 },
            { "name": "huntsman_burnished", "count": 1, "weight": 1 },
            { "name": "bowie_vintage", "count": 1, "weight": 1 },
            { "name": "bowie_frontier", "count": 1, "weight": 1 },
            { "name": "woodaxe", "count": 1, "weight": 1 },
            { "name": "woodaxe_bloody", "count": 1, "weight": 1 },
            { "name": "fireaxe", "count": 1, "weight": 1 },
            { "name": "katana", "count": 1, "weight": 1 },
            { "name": "katana_rusted", "count": 1, "weight": 1 },
            { "name": "katana_orchid", "count": 1, "weight": 1 },
            { "name": "naginata", "count": 1, "weight": 1 },
            { "name": "machete_taiga", "count": 1, "weight": 1 },
            { "name": "kukri_trad", "count": 1, "weight": 1 },
            { "name": "kukri_sniper", "count": 1, "weight": 1 },
            { "name": "stonehammer", "count": 1, "weight": 1 },
            { "name": "sledgehammer", "count": 1, "weight": 1 },
            { "name": "hook", "count": 1, "weight": 1 },
            { "name": "pan", "count": 1, "weight": 1 },
            { "name": "knuckles_rusted", "count": 1, "weight": 1 },
            { "name": "knuckles_heroic", "count": 1, "weight": 1 },
            { "name": "crowbar_scout", "count": 1, "weight": 1 },
            { "name": "crowbar_recon", "count": 1, "weight": 1 },
            { "name": "warhammer_tank", "count": 1, "weight": 1 },
            { "name": "spade_assault", "count": 1, "weight": 1 },
            { "name": "bonesaw_rusted", "count": 1, "weight": 1 },
            { "name": "bonesaw_healer", "count": 1, "weight": 1 },
        ]
    },
    mapGen: {
        densitySpawns: [
            {
                stone_01: 350,
                barrel_01: 76,
                silo_01: 8,
                crate_01: 50,
                crate_02: 4,
                crate_03: 8,
                bush_01: 78,
                cache_06: 12,
                tree_01: 320,
                hedgehog_01: 24,
                potato_01: 50,
                potato_02: 50,
                potato_03: 50,
                // potato_01: 500,
                // potato_02: 150,
                // potato_03: 150,
                container_01: 5,
                container_02: 5,
                container_03: 5,
                container_04: 5,
                shack_01: 7,
                outhouse_01: 5,
                loot_tier_1: 24,
                loot_tier_beach: 4,
            },
        ],
        fixedSpawns: [
            {
                warehouse_01: 2,
                house_red_01: { small: 3, large: 4 },
                house_red_02: { small: 3, large: 4 },
                barn_01: { small: 1, large: 3 },
                barn_02: 1,
                hut_01: 4,
                hut_02: 1,
                shack_03a: 2,
                shack_03b: { small: 2, large: 3 },
                greenhouse_01: 1,
                cache_01: 1,
                cache_02: 1,
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
                tree_02: 3,
                teahouse_complex_01s: { small: 1, large: 2 },
                stone_04: 1,
                club_complex_01: 1,
                // test
                // shilo_01: 10,
                shilo_01: 2,
            },
        ],
        randomSpawns: [
            {
                spawns: ["mansion_structure_01", "police_01", "bank_01"],
                choose: 2,
            },
        ],
        importantSpawns: ["club_complex_01"],
        // importantSpawns: ["club_complex_01", "silo_01po"],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
};
export const Potato = util.mergeDeep({}, Main, mapDef) as MapDef;
