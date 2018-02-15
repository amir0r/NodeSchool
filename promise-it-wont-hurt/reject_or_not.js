const p = new Promise((success, failure) => {
	success('I FIRED')
	failure(new Error('I DID NOT FIRE'))
})

const onReject = error => console.log(error.message)

p.then(console.log, onReject)