const qio = require('q-io/http')

qio.read('http://localhost:7000')
	.then(user_id => qio.read('http://localhost:7001/' + String(user_id)))
	.then(object => console.log(JSON.parse(object)))
	.catch(err => console.log(err.message))