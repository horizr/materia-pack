REIEvents.hide(event => {
	;[
		"chunk_loader",
		"tin_cable",
		"glassfiber_cable"
	].forEach(id => {
		event.hide("techreborn:" + id)
	})
})
