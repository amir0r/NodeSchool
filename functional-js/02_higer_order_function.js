const abs = num => num < 0 ? - num : num
const repeat = (fn, num) => {
	if (abs(num) === 0)
		return 
	fn()
	return repeat(fn, abs(num) - 1)
}

module.exports = repeat