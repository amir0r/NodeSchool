const reduce = (arr, fn, init, i = 0) => {
	if (i === arr.length)
		return init
	init = fn(init, arr[i], i, arr)
	return reduce(arr, fn, init, i + 1)
}

module.exports = reduce
