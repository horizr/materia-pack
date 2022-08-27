onEvent("rei.hide.items", event => {
    [
        "regular_conveyor_belt",
        "fast_conveyor_belt",
        "express_conveyor_belt",
        "drawbridge",
        "placer",
        "breaker",
        "heater",
        "igniter",
        "cursed_seeds",
        "diamond_ring",
        "angel_ring",
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
        event.hide("kibe:" + name)
    })

    ;["basalt", "cobblestone"].forEach(stone => {
        [1, 2, 3, 4, 5].forEach(mark => {
            event.hide(`kibe:${stone}_generator_mk${mark}`)
        })
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
        event.hide(`kibe:${color}_elevator`)
        event.hide(`kibe:${color}_rune`)
        event.hide(`kibe:${color}_glider`)
    })
})
