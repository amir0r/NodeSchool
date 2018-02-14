const through = require('through2')

function write(buf, encoding, next){
	/*console.log(this)*/
	this.push(String(buf).toUpperCase())
	next()
}
const end = done => done()

const stream = through(write, end)
process.stdin
	.pipe(stream)
	.pipe(process.stdout)