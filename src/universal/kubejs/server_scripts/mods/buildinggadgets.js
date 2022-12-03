ServerEvents.recipes(event => {
    event.remove({ output: "buildinggadgets:gadget_building" })
    event.shaped("buildinggadgets:gadget_building", [
        "D ",
        "P ",
        "EF"
    ], {
        D: "techreborn:basic_display",
        P: "#c:refined_iron_plates",
        E: "ae2:engineering_processor",
        F: "ae2:formation_core"
    })

    event.remove({ output: "buildinggadgets:gadget_exchanging" })
    event.shaped("buildinggadgets:gadget_exchanging", [
        " D ",
        " P ",
        "AEF"
    ], {
        D: "techreborn:basic_display",
        P: "#c:refined_iron_plates",
        A: "ae2:annihilation_core",
        E: "ae2:engineering_processor",
        F: "ae2:formation_core"
    })

    event.remove({ output: "buildinggadgets:gadget_copy_paste" })
    event.shaped("buildinggadgets:gadget_copy_paste", [
        " D ",
        " PC",
        "AEF"
    ], {
        D: "techreborn:basic_display",
        P: "#c:refined_iron_plates",
        C: "ae2:memory_card",
        A: "ae2:annihilation_core",
        E: "ae2:engineering_processor",
        F: "ae2:formation_core"
    })

    event.remove({ output: "buildinggadgets:gadget_destruction" })
    event.shaped("buildinggadgets:gadget_destruction", [
        " D ",
        " P ",
        "AEX"
    ], {
        D: "techreborn:basic_display",
        P: "#c:refined_iron_plates",
        A: "ae2:annihilation_core",
        E: "ae2:engineering_processor",
        X: "minecraft:ender_eye"
    })
})