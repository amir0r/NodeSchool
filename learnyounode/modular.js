const fls = require('./filtered-ls')

const folder = process.argv[2]
const ext = process.argv[3]
const print = console.log

fls(folder, ext, (err, files) => err ? print(err) : files.forEach(f => print(f)))