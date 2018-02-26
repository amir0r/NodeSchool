const buffers = []

process.stdin.on('readable', () => (chunk = process.stdin.read())
	? buffers.push(chunk)
	: ''
)

process.stdin.on('end', () => console.log(Buffer.concat(buffers)))