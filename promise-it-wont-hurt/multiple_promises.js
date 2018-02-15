let counter = 0

const all = promises => new Promise((success, failure) => {
	let results = Array(promises.length)

	promises.forEach((p, i) => {

		if (p instanceof Promise) {
			
			p.then(data => {
				results[i] = data
				counter++

				if (counter == promises.length)  {
					success(results)
				}

			}, failure)
		} else {
			results[i] = p
		}
	})
	
})

all([getPromise1(), getPromise2()])
	.then(console.log)
