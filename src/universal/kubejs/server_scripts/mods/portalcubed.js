onEvent("recipes", event => {
    event.remove({ output: "portalcubed:long_fall_boots" })

    event.replaceInput({ output: "portalcubed:excursion_funnel_emitter" }, "minecraft:obsidian", "#c:carbon_plates")
    event.replaceInput({ output: "portalcubed:reversed_excursion_funnel_emitter" }, "minecraft:obsidian", "#c:carbon_plates")
    event.replaceInput({ output: "portalcubed:duel_excursion_funnel_emitter" }, "minecraft:obsidian", "#c:carbon_plates")
    event.replaceInput({ output: "portalcubed:portal_gun_frame" }, "minecraft:obsidian", "#c:carbon_plates")

    event.replaceInput({ output: "portalcubed:portal_gun_casing" }, "minecraft:iron_ingot", "#c:aluminium_plates")

    event.remove({ output: "portalcubed:mini_blackhole" })
    event.custom({
        type: "techreborn:compressor",
        power: 25,
        time: 120 * 20,
        ingredients: [
            {
                count: 10,
                tag: "c:iridium_blocks"
            }
        ],
        results: [
            {
                count: 1,
                item: "portalcubed:mini_blackhole"
            }
        ]
    })
})
