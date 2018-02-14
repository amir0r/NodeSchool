const fs = require('fs')

const fileName = process.argv[2]

fs.createReadStream(fileName)
	.pipe(process.stdout)