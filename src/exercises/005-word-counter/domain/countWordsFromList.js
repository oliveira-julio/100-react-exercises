const countWordsFromList = (words) => {
    if (!words) {
        return {}
    }
    return words.reduce((counter, word) => {
        counter[word] = (counter[word] || 0) + 1
        return counter
    }, {})
}

export default countWordsFromList