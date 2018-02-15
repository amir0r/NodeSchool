const p = new Promise((success, failure) => setTimeout(() => failure(new Error('REJECTED!')), 300))

const onReject = error => console.log(error.message)

p.then(null, onReject)