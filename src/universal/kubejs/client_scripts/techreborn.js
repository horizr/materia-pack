onEvent("rei.hide.items", event => {
	;[
		"chunk_loader",
		"tin_cable",
		"glassfiber_cable"
	].forEach(id => {
		event.hide("techreborn:" + id)
	})
})
