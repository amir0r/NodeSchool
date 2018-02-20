const duckCount = (...args) => args
    	.filter(arg => Object.hasOwnProperty.call(arg, 'quack'))
    	.length

module.exports = duckCount