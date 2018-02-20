const occByWord = (obj, word) => {
	obj[word] = ++obj[word] || 1
	return obj
}

const countWords = (inputWords) => inputWords.reduce(occByWord, {})

module.exports = countWords