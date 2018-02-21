const logger = (namespace) => (...args) => console.log(namespace, ...args)

module.exports = logger

// I didn't Function.apply(...)
// However it has been validated

// Here's their solution :

/*var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger*/