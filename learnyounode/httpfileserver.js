const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const filePath = process.argv[3]

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'content-type': 'text/plain' })

  	fs.createReadStream(process.argv[3]).pipe(res)
})
server.listen(port)