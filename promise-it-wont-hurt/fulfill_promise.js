const p = new Promise(success => setTimeout(() => success('FULFILLED!'), 300))

/*p.then(data => console.log(data))*/ // also works
p.then(console.log)