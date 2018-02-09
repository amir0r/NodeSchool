const http = require('http')
const url = require('url')

const port = process.argv[2]

const routes = {
	"/api/parsetime": (time) => { 
		const date = new Date(time)
		const hour = date.getHours()
		const minute = date.getMinutes()
		const second = date.getSeconds()
		return { hour, minute, second }
	},
	"/api/unixtime": (time) => ({ unixtime: new Date(time).getTime() })
}

const server = http.createServer((req, res) => {
	if (req.method == "GET") {
		parseURL = url.parse(req.url, true)
		result = routes[parseURL.pathname]
		if (result) {
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(JSON.stringify(result(parseURL.query.iso)))
		} else {
			res.writeHead('404')
			res.end()
		}
	}
})
server.listen(port)
