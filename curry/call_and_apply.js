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

// Their solution is too easy : I don't like it because you just call the method that you must to rewrite
/*var callAndApply = {
  caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
    method.call(object, nameArg, ageArg, tShirtSizeArg)
  },
  applier: function (object, method, argumentsArr) {
    method.apply(object, argumentsArr);
  }
}*/