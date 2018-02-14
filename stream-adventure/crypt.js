const crypto = require('crypto')

const decipher = (algo, passphrase) => crypto.createDecipher(algo, passphrase)
process.stdin
    .pipe(decipher('aes256', process.argv[2]))
    .pipe(process.stdout)
