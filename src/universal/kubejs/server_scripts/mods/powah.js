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
})
