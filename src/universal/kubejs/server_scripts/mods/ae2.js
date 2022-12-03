ServerEvents.recipes(event => {
    // All portable cells
    event.replaceInput({ input: "ae2:chest" }, "ae2:chest", "ae2:terminal")

    event.replaceInput({ output: "ae2:quartz_glass" }, "#c:glass", "minecraft:glass")

    event.remove({ output: "ae2:inscriber" })
    event.shaped("ae2:inscriber", [
        "IPI",
        "CB ",
        "IPI"
    ], {
        I: "minecraft:iron_ingot",
        P: "minecraft:sticky_piston",
        C: "#c:copper_ingots",
        B: "modern_industrialization:steel_machine_casing"
    })

    event.remove({ output: "ae2:tiny_tnt" })
    event.shapeless("2x ae2:tiny_tnt", ["minecraft:tnt"])

    event.remove({ output: "ae2:security_station" })
    event.shaped("ae2:security_station", [
        "GTG",
        "CBS",
        "CPC"
    ], {
        G: "#c:glass/colorless",
        T: "ae2:terminal",
        C: "#c:carbon_plates",
        B: "modern_industrialization:steel_machine_casing",
        S: "ae2:cell_component_16k",
        P: "ae2:engineering_processor"
    })

    event.replaceInput({ output: "ae2:spatial_io_port" }, "minecraft:iron_ingot", "#c:iron_plates")
    event.replaceInput({ output: "ae2:spatial_io_port" }, "#c:glass", "#c:glass/colorless")

    event.remove({ output: "ae2:drive" })
    event.shaped("ae2:drive", [
        "IPI",
        "CB ",
        "IPI"
    ], {
        I: "#c:iron_plates",
        P: "ae2:engineering_processor",
        C: "ae2:fluix_glass_cable",
        B: "modern_industrialization:steel_machine_casing"
    })

    event.remove({ output: "ae2:chest" })
    event.shaped("ae2:chest", [
        "GTG",
        "CBD",
        "IPI"
    ], {
        G: "#c:glass/colorless",
        T: "ae2:terminal",
        I: "#c:iron_plates",
        C: "ae2:fluix_glass_cable",
        B: "modern_industrialization:steel_machine_casing",
        D: "ae2:item_cell_housing",
        P: "ae2:logic_processor"
    })

    event.remove({ id: "ae2:network/blocks/interfaces_interface" })
    event.shaped("ae2:interface", [
        "AP ",
        "PCP",
        " PF"
    ], {
        P: "#c:silver_plates",
        A: "ae2:annihilation_core",
        C: "ae2:calculation_processor",
        F: "ae2:formation_core"
    })

    event.remove({ output: "ae2:cell_workbench" })
    event.shaped("ae2:cell_workbench", [
        "SES",
        "PBP",
        "PPP"
    ], {
        S: "#c:silver_plates",
        E: "ae2:engineering_processor",
        P: "#c:steel_plates",
        B: "modern_industrialization:steel_machine_casing"
    })

    event.remove({ id: "ae2:network/blocks/energy_energy_acceptor" })
    event.shaped("ae2:energy_acceptor", [
        "PFP",
        "FCF",
        "PFP"
    ], {
        P: "#c:silver_plates",
        F: "ae2:fluix_glass_cable",
        C: "ae2:calculation_processor"
    })

    event.remove({ output: "ae2:vibration_chamber" })

    event.remove({ output: "ae2:energy_cell" })
    event.shaped("ae2:energy_cell", [
        "CDC",
        "DBD",
        "CDC"
    ], {
        C: "#c:certus_quartz",
        D: "#c:fluix_dusts",
        B: "modern_industrialization:steel_machine_casing"
    })

    event.remove({ output: "ae2:crafting_unit" })
    event.shaped("ae2:crafting_unit", [
        " C ",
        "FBF",
        " L "
    ], {
        C: "ae2:calculation_processor",
        F: "ae2:fluix_glass_cable",
        B: "modern_industrialization:steel_machine_casing",
        L: "ae2:logic_processor"
    })

    event.remove({ output: "ae2:pattern_provider" })
    event.shapeless("ae2:pattern_provider", ["ae2:crafting_unit", "#ae2:interface"])

    event.replaceInput({ output: "ae2:spatial_anchor" }, "minecraft:iron_ingot", "#c:iron_plates")

    event.remove({ output: "ae2:certus_quartz_cutting_knife" })
    event.shaped("ae2:certus_quartz_cutting_knife", [
        " NS",
        "NS ",
        "CC "
    ], {
        N: "#c:iron_nuggets",
        S: "#c:wooden_rods",
        C: "#c:certus_quartz"
    })

    event.remove({ output: "ae2:biometric_card" })
    event.shaped("ae2:biometric_card", [
        " C ",
        "PI ",
        " G "
    ], {
        C: "#c:carbon_plates",
        P: "ae2:logic_processor",
        I: "#c:refined_iron_plates",
        G: "#c:gold_plates"
    })

    event.remove({ output: "ae2:memory_card" })
    event.shaped("ae2:memory_card", [
        "P",
        "I",
        "L"
    ], {
        P: "ae2:calculation_processor",
        I: "#c:refined_iron_plates",
        L: "ae2:logic_processor"
    })

    event.remove({ output: "ae2:blank_pattern" })

    event.remove({ output: "ae2:basic_card" })
    event.shaped("ae2:basic_card", [
        "PPL",
        "PC "
    ], {
        P: "#c:iron_plates",
        L: "ae2:logic_processor",
        C: "ae2:calculation_processor"
    })

    event.remove({ output: "ae2:advanced_card" })
    event.shapeless("ae2:advanced_card", ["ae2:basic_card", "#c:diamonds"])
    event.shaped("ae2:advanced_card", [
        "PDL",
        "PC "
    ], {
        P: "#c:iron_plates",
        L: "ae2:logic_processor",
        C: "ae2:calculation_processor",
        D: "#c:diamonds"
    })

    event.remove({ output: "ae2:cell_component_4k" })
    event.shaped("ae2:cell_component_4k", [
        " C ",
        "CPC",
        " C "
    ], {
        C: "ae2:cell_component_1k",
        P: "ae2:calculation_processor"
    })

    event.remove({ output: "ae2:cell_component_16k" })
    event.shaped("ae2:cell_component_16k", [
        " C ",
        "CPC",
        " C "
    ], {
        C: "ae2:cell_component_4k",
        P: "ae2:calculation_processor"
    })

    event.remove({ output: "ae2:cell_component_64k" })
    event.shaped("ae2:cell_component_64k", [
        " C ",
        "CPC",
        " C "
    ], {
        C: "ae2:cell_component_16k",
        P: "ae2:calculation_processor"
    })

    event.remove({ output: "ae2:cell_component_256k" })
    event.shaped("ae2:cell_component_256k", [
        " C ",
        "CPC",
        " C "
    ], {
        C: "ae2:cell_component_64k",
        P: "ae2:calculation_processor"
    })

    event.remove({ output: "ae2:item_cell_housing" })
    event.shaped("ae2:item_cell_housing", [
        " C ",
        "C C",
        " C "
    ], {
        C: "#c:tin_plates"
    })

    event.remove({ output: "ae2:fluid_cell_housing" })
    event.shaped("ae2:fluid_cell_housing", [
        " C ",
        "C C",
        " C "
    ], {
        C: "#c:copper_plates"
    })

    event.remove({ output: "ae2:wireless_receiver" })
    event.shaped("ae2:wireless_receiver", [
        "F",
        "Q",
        "I"
    ], {
        F: "ae2:fluix_pearl",
        Q: "ae2:quartz_fiber",
        I: "#c:iron_plates"
    })

    event.replaceInput({ output: "ae2:wireless_booster" }, "minecraft:iron_ingot", "#c:iron_plates")

    event.remove({ output: "ae2:ender_dust" })

    event.remove({ id: `ae2:network/cells/view_cell`})
    event.shaped("ae2:view_cell", [
        " C ",
        "CXC",
        " C "
    ], {
        C: "#c:quartz_plates",
        X: "#c:certus_quartz"
    })

    ;[1, 4, 16, 64, 256].forEach(size => {
        event.remove({ id: `ae2:network/cells/item_storage_cell_${size}k`})
        event.shaped(`ae2:item_storage_cell_${size}k`, [
            " C ",
            "CXC",
            " C "
        ], {
            C: "#c:tin_plates",
            X: `ae2:cell_component_${size}k`
        })

        event.remove({ id: `ae2:network/cells/fluid_storage_cell_${size}k`})
        event.shaped(`ae2:fluid_storage_cell_${size}k`, [
            " C ",
            "CXC",
            " C "
        ], {
            C: "#c:copper_plates",
            X: `ae2:cell_component_${size}k`
        })
    })

    ;[2, 16, 128].forEach(size => {
        event.remove({ id: `ae2:network/cells/spatial_storage_cell_${size}_cubed`})
        event.shaped(`ae2:spatial_storage_cell_${size}`, [
            " C ",
            "CXC",
            " C "
        ], {
            C: "#c:tin_plates",
            X: `ae2:spatial_cell_component_${size}`
        })
    })

    event.remove({ output: "ae2:quartz_fiber" })
    ingredients = new Array(9).fill("#c:glass/colorless")
    ingredients[0] = "#c:certus_quartz_dusts"
    event.shapeless("8x ae2:quartz_fiber", ingredients)

    event.remove({ id: "ae2:network/cables/glass_fluix" })
    let ingredients = new Array(9).fill("ae2:quartz_fiber")
    ingredients[0] = "ae2:fluix_crystal"
    event.shapeless("8x ae2:fluix_glass_cable", ingredients)

    event.remove({ id: `ae2:network/parts/panels_semi_dark_monitor`})
    event.shaped("ae2:semi_dark_monitor", [
        " DG",
        "PDG",
        " DG"
    ], {
        D: "#c:glowstone_dusts",
        G: "ae2:quartz_glass",
        P: "#c:refined_iron_plates"
    })

    event.remove({ output: "ae2:storage_bus" })
    event.shapeless("ae2:storage_bus", ["#ae2:interface", "ae2:fluix_pearl"])

    event.remove({ output: "ae2:import_bus" })
    event.shaped("ae2:import_bus", [
        "PC"
    ], {
        P: "#c:refined_iron_plates",
        C: "ae2:annihilation_core"
    })

    event.remove({ output: "ae2:export_bus" })
    event.shaped("ae2:export_bus", [
        "PC"
    ], {
        P: "#c:refined_iron_plates",
        C: "ae2:formation_core"
    })

    event.replaceInput({ output: "ae2:annihilation_plane" }, "minecraft:iron_ingot", "#c:refined_iron_plates")
    event.replaceInput({ output: "ae2:formation_plane" }, "minecraft:iron_ingot", "#c:refined_iron_plates")

    // event.remove({ output: "ae2things:cell_component_1024k" })
    // event.shaped("ae2things:cell_component_1024k", [
    //     " C ",
    //     "CPC",
    //     " C "
    // ], {
    //     C: "ae2:cell_component_256k",
    //     P: "ae2:calculation_processor"
    // })

    // event.remove({ output: "ae2things:cell_component_4096k" })
    // event.shaped("ae2things:cell_component_4096k", [
    //     " C ",
    //     "CPC",
    //     " C "
    // ], {
    //     C: "ae2things:cell_component_1024k",
    //     P: "ae2:calculation_processor"
    // })

    // ;[1024, 4096].forEach(size => {
    //     event.remove({ id: `ae2things:cells/item/item_cell_${size}k`})
    //     event.shaped(`ae2things:item_storage_cell_${size}k`, [
    //         " C ",
    //         "CXC",
    //         " C "
    //     ], {
    //         C: "#c:tin_plates",
    //         X: `ae2things:cell_component_${size}k`
    //     })

    //     event.remove({ id: `ae2things:cells/fluid/fluid_cell_${size}k`})
    //     event.shaped(`ae2things:fluid_storage_cell_${size}k`, [
    //         " C ",
    //         "CXC",
    //         " C "
    //     ], {
    //         C: "#c:copper_plates",
    //         X: `ae2things:cell_component_${size}k`
    //     })
    // })

    // event.remove({ output: "ae2things:advanced_inscriber" })
    // event.shaped("ae2things:advanced_inscriber", [
    //     "SIS",
    //     "PBP",
    //     "SIS"
    // ], {
    //     S: "#c:steel_plates",
    //     I: "ae2:inscriber",
    //     P: "ae2:engineering_processor",
    //     B: "modern_industrialization:steel_machine_casing"
    // })

    // event.remove({ output: "ae2things:crystal_growth" })
    // event.shaped("ae2things:crystal_growth", [
    //     "ASA",
    //     "SBS",
    //     "CSC"
    // ], {
    //     A: "ae2:quartz_growth_accelerator",
    //     S: "#c:steel_plates",
    //     B: "modern_industrialization:steel_machine_casing",
    //     C: "#c:carbon_plates"
    // })

    event.remove({ output: "ae2wtlib:infinity_booster_card" })

    event.remove({ output: "ae2wtlib:magnet_card" })
    event.shapeless("ae2wtlib:magnet_card", ["ae2:annihilation_plane", "ae2:advanced_card", "kibe:magnet"])
})

ServerEvents.tags("item", event => {
    event.add("c:glass/colorless", "ae2:quartz_glass")
    event.add("c:glass/colorless", "ae2:quartz_vibrant_glass")
})

ServerEvents.tags("block", event => {
    event.add("c:glass/colorless", "ae2:quartz_glass")
    event.add("c:glass/colorless", "ae2:quartz_vibrant_glass")
})
