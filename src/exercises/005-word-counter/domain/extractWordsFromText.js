const extractWordsFromText = (text) => {
    if (!text) {
        return []
    }
  return text.match(/[\p{L}\p{N}]+/gu) || [];
}

export default extractWordsFromText