const http = require('http')

const urls = process.argv.slice(2, 5)

const urlToContent = (url) => http.get(url, response => {
	response.setEncoding('utf-8')
	let result = "" 
	response.on("data", (data) => result += data)
	response.on("end", () => console.log(result))
	response.on("error", console.error)
})

urls.forEach(url => urlToContent(url))