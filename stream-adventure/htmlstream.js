const trumpet = require('trumpet')
const through = require('through2')
const tr = trumpet()

function write(buf, encoding, next){
	this.push(String(buf).toUpperCase())
	next()
}

const loud = tr.select('.loud').createStream()

loud.pipe(through(write))
	.pipe(loud)

process.stdin
	.pipe(tr)
	.pipe(process.stdout)