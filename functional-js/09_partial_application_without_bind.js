const logger = (namespace) => (...args) => console.log(namespace, ...args)

module.exports = logger