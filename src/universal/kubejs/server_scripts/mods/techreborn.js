onEvent("recipes", event => {
    event.remove({ output: "techreborn:chunk_loader" })

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
})
