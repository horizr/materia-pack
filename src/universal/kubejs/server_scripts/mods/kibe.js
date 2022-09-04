onEvent("recipes", event => {
    [
        "regular_conveyor_belt",
        "fast_conveyor_belt",
        "express_conveyor_belt",
        "drawbridge",
        "placer",
        "breaker",
        "heater",
        "igniter",
        "magma_ring",
        "water_ring",
        "light_ring",
        "escape_rope",
        "wooden_bucket",
        "water_wooden_bucket",
        "glider_left_wing",
        "glider_right_wing",
        "pocket_crafting_table",
        "pocket_trash_can",
        "entangled_chest",
        "entangled_tank",
        "entangled_bag",
        "entangled_bucket",
        "tank"
    ].forEach(name => {
        event.remove({ output: "kibe:" + name })
    })

    ;[
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "light_gray",
        "cyan",
        "blue",
        "purple",
        "green",
        "brown",
        "red",
        "black"
    ].forEach(color => {
        event.remove({ output: `kibe:${color}_elevator` })
        event.remove({ output: `kibe:${color}_rune` })
        event.remove({ output: `kibe:${color}_glider` })
    })

    event.custom({
        type: "techreborn:chemical_reactor",
        power: 25,
        time: 30 * 20,
        ingredients: [
            {
                count: 1,
                item: "terrestria:basalt_dirt"
            },
            {
                count: 4,
                item: "charm:endermite_powder"
            }
        ],
        results: [
            {
                count: 1,
                item: "kibe:cursed_dirt"
            }
        ]
    })

    event.remove({ output: "kibe:trash_can" })
    event.shaped("kibe:trash_can", [
        " I ",
        "SCS",
        " S "
    ], {
        I: "#c:iron_plates",
        S: "#c:steel_plates",
        C: "minecraft:cactus"
    })

    event.remove({ output: "kibe:magnet" })
    event.shaped("kibe:magnet", [
        "CIR",
        "I  ",
        "CIR"
    ], {
        C: "#c:red_dyes",
        R: "powah:dielectric_rod_horizontal",
        I: "minecraft:iron_ingot"
    })
})
