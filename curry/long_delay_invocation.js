let result = 0
const total = a => a ? (result += a) && total : result 

module.exports = total