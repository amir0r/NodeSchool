const replaceDot = c => c === '.'.charCodeAt() ? '!'.charCodeAt() : c
process.stdin.on('data', (buff) => console.log(buff.map(replaceDot)))