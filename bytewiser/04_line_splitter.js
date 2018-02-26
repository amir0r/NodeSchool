const fs = require('fs')
const fileName = process.argv[2]
const file = fs.readFileSync(fileName)
let offset = 0

file.forEach((part, i) => {
  if (part === '\n'.charCodeAt()) {
    console.log(file.slice(offset, i))
    offset = i + 1
  }
})

console.log(file.slice(offset, file.length))