const http = require('http')
const map = require('through2-map')

const port = process.argv[2]
const up = chunk => map(chunk => chunk.toString().toUpperCase())

const server = http.createServer((req, res) => {
	if (req.method == "POST") {
		req
			.pipe(up())
			.pipe(res)
	}
})
server.listen(port)