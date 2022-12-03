ServerEvents.recipes(event => {
    event.remove({ output: "minecraft:compass" })

    event.shaped("minecraft:compass", [
        "IRI",
        " P "
    ], {
        I: { item: "minecraft:iron_ingot" },
        P: { tag: "c:carbon_plates" }
    })
})