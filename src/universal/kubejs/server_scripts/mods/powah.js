onEvent("recipes", event => {
  event.remove({ output: "powah:dielectric_paste" })

  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        tag: "c:coal",
        count: 2
      },
      {
        item: "minecraft:clay_ball"
      }
    ],
    results: [
      {
        item: "powah:dielectric_paste",
        count: 16
      }
    ],
    heatRequirement: "none"
  })

  event.replaceInput({ output: "powah:capacitor_basic" }, "minecraft:redstone_block", "#c:redstone_dusts")
  event.replaceInput({ output: "powah:capacitor_basic" }, "minecraft:iron_ingot", "#c:iron_nuggets")

  ;[
      "powah:energy_cable_starter",
      "powah:energy_cable_basic"
  ].forEach(id => {
    event.remove({ output: id })
    event.remove({ input: id })
  })
})
