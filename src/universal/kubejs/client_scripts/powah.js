onEvent("rei.hide.items", event => {
	;[
		"powah:energy_cable_starter",
		"powah:energy_cable_basic"
	].forEach(id => {
		event.hide(id)
	})
})
