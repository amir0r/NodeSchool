const curry = (fn, n = fn.length) => (...args) =>
    args.length >= n 
    ? fn.apply(null, args)
    : (...args2) => curry(fn).apply(null, args.concat(args2))

module.exports = curry