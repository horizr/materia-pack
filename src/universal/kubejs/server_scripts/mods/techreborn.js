onEvent("recipes", event => {
    event.remove({ id: "techreborn:grinder/diorite_dust_from_diorite"})
    event.remove({ id: "createplus:techreborn/pressing/zinc_plate"})

    event.custom({
        type: "techreborn:implosion_compressor",
        power: 30,
        time: 10 * 60 * 20,
        ingredients: [
            {
                tag: "minecraft:coals",
                count: 64
            },
            {
              item: "minecraft:tnt",
              count: 16
            }
        ],
        results: [
            {
              item: "minecraft:diamond",
              count: 1
            },
            {
              item: "techreborn:dark_ashes_dust",
              count: 16
            }
        ]
    })

    event.replaceInput({ output: "techreborn:lamp_led" }, "techreborn:tin_cable", "techreborn:insulated_copper_cable")

    ;[
        "chunk_loader",
        "tin_cable",
        "glassfiber_cable"
    ].forEach(id => {
        event.remove({ output: "techreborn:" + id })
    })

    // Only available through the wire mill
    event.remove({ id: "techreborn:crafting_table/cable/gold_cable" })

    event.remove({ output: "techreborn:hv_cable" })
    event.custom({
        type: "techreborn:wire_mill",
        power: 2,
        time: 60 * 20,
        ingredients: [
            {
                tag: "c:silver_ingots",
                count: 6
            }
        ],
        results: [
            {
                item: "techreborn:hv_cable",
                count: 4
            }
        ]
    })
})
