const parsePromised = (jsonContent) => new Promise((s, f) => {
	try {
		s(JSON.parse(jsonContent))
	} catch(e) {
		f(e.message)
	}
})

parsePromised(process.argv[2])
	.then(console.log, console.log)