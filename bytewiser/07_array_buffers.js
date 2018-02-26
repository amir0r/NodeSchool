const num = Number(process.argv[2])
const tab32 = new Uint32Array(1)
tab32[0] = num
const tab16 = new Uint16Array(tab32.buffer)

console.log(JSON.stringify(tab16))