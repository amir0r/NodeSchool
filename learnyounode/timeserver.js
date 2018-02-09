const net = require('net')

const port = process.argv[2]
const fixMin10 = n => (n < 10 ? '0' : '') + n

const server = net.createServer((socket) => {
	date = new Date()
	year = date.getFullYear()
	month = fixMin10(date.getMonth() + 1)
	day = fixMin10(date.getDate())
	hours = date.getHours()
	minutes = date.getMinutes()
	//socket.write(data)
	socket.end(year + '-' + month + '-' + day + ' ' + hours + ':' +  minutes + '\n')
})
server.listen(port)