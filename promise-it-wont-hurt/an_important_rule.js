const alwaysThrows = () => {
	throw new Error('OH NOES')
}

const onReject = (err) => console.log(err.message)

const iterate = nb => {
	console.log(nb)
	return nb + 1
}

Promise
	.resolve(1)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(alwaysThrows)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.catch(onReject)