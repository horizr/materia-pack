PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has("starting_items")) {
        event.player.stages.add("starting_items")
        event.player.give("kibe:chunk_loader")
    }
})