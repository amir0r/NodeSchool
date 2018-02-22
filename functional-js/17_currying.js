const curryN = (fn, n = fn.length) => 
	(a) => n === 1
	? fn(a)
	: curryN(fn.bind(fn, a), n - 1)


module.exports = curryN

