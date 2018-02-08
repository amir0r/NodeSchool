const fs = require('fs')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

const getExtension = file => file.slice(file.lastIndexOf('.'))

const filesMatch = (files, extension) => files
	.filter(file => getExtension(file) === ext)

const listFilesMatch = () => fs.readdir(folder, (err, result) => 
	err ? console.log(err) : 
		filesMatch(result, ext)
				.forEach(f => console.log(f))
)

module.exports = (dir, ext, callback) => {
	fs.readdir(dir, (err, files) => 
	err ? callback(err) : 
		callback(null, files.filter(file => getExtension(file) === '.' + ext))
	)
}
