const r = require('request')
const req = r.post('http://localhost:8099')

process.stdin
	.pipe(req)
	.pipe(process.stdout)
