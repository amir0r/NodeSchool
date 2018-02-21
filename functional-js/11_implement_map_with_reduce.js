const arrayMap = (arr, fn) => {
	const result = []
	arr.reduce((acc, current) => {
		result.push(fn(current))
	}, [])
	return result
}

module.exports = arrayMap