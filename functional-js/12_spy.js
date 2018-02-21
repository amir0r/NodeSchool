const Spy = (target, method) => {
  const originalFunction = target[method]

  const result = { count: 0 }

  target[method] = function(...args) {
    result.count++
    return originalFunction.apply(this, arguments)
  }

  return result
}


module.exports = Spy