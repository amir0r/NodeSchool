const split = require('split')
const through = require('through2')

let nbLine = 0
function displayLines(buf, _, next) {
   line = buf.toString()
   nbLine++ % 2 ?
        this.push(line.toUpperCase() + '\n')
        : this.push(line.toLowerCase() + '\n')
    next()
}

process.stdin
	.pipe(split())
	.pipe(through(displayLines))
	.pipe(process.stdout)