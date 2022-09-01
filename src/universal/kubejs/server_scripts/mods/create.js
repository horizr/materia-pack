onEvent("recipes", event => {
    event.remove({ id: "create:crushing/diorite" })

    event.custom({
        type: "create:crushing",
        processingTime: 3 * 20,
        ingredients: [
            {
                item: "minecraft:diorite"
            }
        ],
        results: [
            {
                item: "techreborn:diorite_dust",
                count: 2
            },
            {
                item: "techreborn:diorite_dust",
                count: 1,
                chance: 0.25
            },
            {
                item: "minecraft:quartz",
                count: 1,
                chance: 0.25
            }
        ]
    })

    ;["iron", "gold", "copper", "zinc"].forEach(ore => {
        event.custom({
            type: "create:crushing",
            processingTime: 2 * 20,
            ingredients: [
                {
                    tag: `c:raw_materials/${ore}`
                }
            ],
            results: [
                {
                    item: `create:crushed_${ore}_ore`,
                    count: 2
                },
                {
                    item: `create:crushed_${ore}_ore`,
                    chance: 0.25
                }
            ]
        })
    })
})
