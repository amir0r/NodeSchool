const curryN = (fn, n = fn.length, args = []) => {
	if (n === 0)
		return fn(...args)
	return (a) => {
		args.push(a)
		return curryN(fn, n - 1, args)
	}
}

module.exports = curryN

