const callAndApply = {
	caller: (obj, fn, ...args) => {
		obj.fn = fn
		obj.fn(...args)
		delete obj.fn
	},
	applier: (obj, fn, arrayOfargs) => {
		obj.fn = fn
		obj.fn(...arrayOfargs)
		delete obj.fn
	}
}


module.exports = callAndApply