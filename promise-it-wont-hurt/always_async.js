const p = new Promise(s => s('PROMISE VALUE'))

p.then(console.log)

console.log('MAIN PROGRAM')