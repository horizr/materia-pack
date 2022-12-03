onEvent("rei.hide.items", event => {
	event.hide("ae2:crafting_pattern")
	event.hide("ae2:processing_pattern")
	event.hide("ae2:identity_annihilation_plane")

	// event.hide("ae2things:cell_component_256k")
	// event.hide("ae2things:item_storage_cell_256k")
	// event.hide("ae2things:fluid_storage_cell_256k")
	// event.hide("ae2things:portable_item_cell_256k")
	// event.hide("ae2things:portable_fluid_cell_256k")
})

onEvent("rei.remove.categories", event => {
	// Pretty useless
	event.yeet("create:automatic_shaped")
})
