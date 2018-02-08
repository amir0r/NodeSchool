const fs = require('fs')
const buffer = fs.readFileSync(process.argv[2])
const fileContent = String(buffer)
const lines = fileContent.split('\n').length - 1

console.log(lines)
