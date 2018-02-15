const qio = require('q-io/http')

qio.read('http://localhost:1337')
	.then(data => JSON.parse(data))
	.then(console.log)
	.catch(err => console.log(err.message))