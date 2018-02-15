const attachTitle = name => 'DR. ' + name

Promise
	.resolve('MANHATTAN')
	.then(attachTitle)
	.then(console.log)