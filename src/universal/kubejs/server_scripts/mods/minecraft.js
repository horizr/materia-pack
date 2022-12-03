ServerEvents.recipes(event => {
    event.remove({ output: "minecraft:compass" })

    event.shaped("minecraft:compass", [
        "IRI",
        " P "
    ], {
        I: { item: "minecraft:iron_ingot" },
        R: { item: "powah:dielectric_rod" },
        P: { tag: "c:carbon_plates" }
    })
})