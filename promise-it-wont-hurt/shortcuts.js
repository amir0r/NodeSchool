const promise = new Promise((s, f) => f('THERE IS AN ERROR!!!'))
// Instead of writing this...

promise.then(null, console.error)

// You could simply write
promise.catch(console.error)

// Introducing: Promise.resolve & Promise.reject

let p = new Promise(fulfill => fulfill('SECRET VALUE'))

p.then(console.log)
// It does the exact same thing as above:

Promise.resolve('SECRET VALUE')

// Likewise...

p = new Promise((fulfill, reject) => reject('SECRET VALUE'))

p.catch(console.log)
Promise.reject(new Error('SECRET VALUE'))