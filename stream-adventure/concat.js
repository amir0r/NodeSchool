const concat = require('concat-stream')

const reverse = buf => console.log(String(buf).split('').reverse().join(''))
process.stdin
    .pipe(concat(reverse))