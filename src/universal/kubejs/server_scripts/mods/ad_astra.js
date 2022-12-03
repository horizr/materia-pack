ServerEvents.recipes(event => {
    event.remove({ id: "ad_astra:recipes/steel_ingot_from_blasting_iron_ingot" })
    event.replaceInput({ input: "ad_astra:steel_ingot" }, "ad_astra:steel_ingot", "#c:steel_ingots")

    event.remove({ id: "ad_astra:compressing/compressed_steel_from_compressing_steel_ingot" })
    event.replaceInput({ input: "ad_astra:compressed_steel" }, "ad_astra:compressed_steel", "#c:steel_plates")

    event.shapeless("ad_astra:space_painting", ["#c:desh_plates", "minecraft:painting"])

    event.replaceInput({ output: "ad_astra:space_helmet" }, "#c:steel_ingots", "#c:chromium_plates")
    event.replaceInput({ output: "ad_astra:space_suit" }, "#c:steel_ingots", "#c:chromium_plates")
    event.replaceInput({ output: "ad_astra:space_pants" }, "#c:steel_ingots", "#c:chromium_plates")
    event.replaceInput({ output: "ad_astra:space_boots" }, "#c:steel_ingots", "#c:chromium_plates")

    event.remove({ output: "ad_astra:coal_generator" })

    event.remove({ output: "ad_astra:compressor" })
    event.shaped("ad_astra:compressor", [
        "RPR",
        "PBP",
        "RPR"
    ], {
        R: "#c:refined_iron_plates",
        P: "minecraft:piston",
        B: "techreborn:advanced_machine_casing"
    })

    event.remove({ output: "ad_astra:nasa_workbench" })
    event.shaped("ad_astra:nasa_workbench", [
        "A A",
        "CWC",
        "PBP"
    ], {
        A: "create:mechanical_arm",
        C: "#c:compressed_steel",
        W: "minecraft:crafting_table",
        P: "#c:steel_plates",
        B: "#c:steel_blocks"
    })

    event.remove({ output: "ad_astra:fuel_refinery" })
    event.shaped("ad_astra:fuel_refinery", [
        "PEP",
        "CBC",
        "PEP"
    ], {
        P: "#c:invar_plates",
        E: "techreborn:extractor",
        C: "techreborn:basic_tank_unit",
        B: "techreborn:advanced_machine_casing"
    })

    event.remove({ output: "ad_astra:oxygen_loader" })
    event.shaped("ad_astra:oxygen_loader", [
        "PFP",
        "OBO",
        "PFP"
    ], {
        P: "#c:compressed_steel",
        F: "ad_astra:engine_fan",
        O: "ad_astra:oxygen_tank",
        B: "techreborn:advanced_machine_casing"
    })

    event.remove({ output: "ad_astra:solar_panel" })
    event.remove({ output: "ad_astra:energizer" })

    event.remove({ output: "ad_astra:cryo_freezer" })
    event.shaped("ad_astra:cryo_freezer", [
        "CTC",
        "CBC",
        "COC"
    ], {
        C: "#c:compressed_ostrum",
        T: "ad_astra:ostrum_tank",
        B: "techreborn:advanced_machine_casing",
        O: "#c:ostrum_blocks"
    })

    event.shaped("ad_astra:earth_globe", [
        " S",
        "SX",
        " C"
    ], {
        S: "minecraft:stick",
        X: "#c:storage_blocks/lapis",
        C: "#c:copper_ingots"
    })

    event.shaped("ad_astra:moon_globe", [
        " S",
        "SX",
        " C"
    ], {
        S: "minecraft:stick",
        X: "#c:storage_blocks/iron",
        C: "#c:copper_ingots"
    })

    event.shaped("ad_astra:mars_globe", [
        " S",
        "SX",
        " C"
    ], {
        S: "minecraft:stick",
        X: "#c:storage_blocks/copper",
        C: "#c:copper_ingots"
    })

    event.shaped("ad_astra:mercury_globe", [
        " S",
        "SX",
        " C"
    ], {
        S: "minecraft:stick",
        X: "#c:ostrum_blocks",
        C: "#c:copper_ingots"
    })

    event.shaped("ad_astra:venus_globe", [
        " S",
        "SX",
        " C"
    ], {
        S: "minecraft:stick",
        X: "#c:storage_blocks/gold",
        C: "#c:copper_ingots"
    })

    event.shaped("ad_astra:glacio_globe", [
        " S",
        "SX",
        " C"
    ], {
        S: "minecraft:stick",
        X: "#c:packed_ices",
        C: "#c:copper_ingots"
    })
})
