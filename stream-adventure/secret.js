const crypto = require('crypto')
const tar = require('tar')
const zlib = require('zlib')
const concat = require('concat-stream')

const algo = process.argv[2]
const passphrase = process.argv[3]
const parser = new tar.Parse()

parser.on('entry', (entry) => {
    if (entry.type !== 'File') return entry.resume()
    entry
		.pipe(crypto.createHash('md5', { encoding: 'hex' }))
		.pipe(concat(
			(hash) => console.log(hash + ' ' + entry.path
		)))
})

process.stdin
    .pipe(crypto.createDecipher(algo, passphrase))
    .pipe(zlib.createGunzip())
    .pipe(parser)
