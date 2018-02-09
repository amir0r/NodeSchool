const add = (a, b) => a + b

const sum = process.argv
			.slice(2)
			.map(arg => Number(arg))
			.reduce(add)

console.log(sum)