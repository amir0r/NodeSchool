const fs = require('fs')
const cat = require('cat-picture')
const image = require('lightning-image-poly')
const remote = require('electron').remote

const src = cat.src
const viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})

cat.remove()

const errorMessage = err => 'error generating pdf! ' + err.message

const notify = err => err ? alert(errorMessage()) : alert('pdf saved!')

const genereFile = (err, data) => fs.writeFile('annotation.pdf', data, notify)

const save = () => remote
	.getCurrentWebContents()
	.printToPDF({ portrait: true }, genereFile)

window.addEventListener('keydown', e => e.keyCode == 80 ? save() : '')