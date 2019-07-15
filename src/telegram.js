class Telegram {
  constructor () {
    this.charLimit = 0
    this.minimumWords = 1
  }

  setCharLimit (num) {
    this.charLimit = num
    return num
  }

  getText (text) {
    const trimmedText = text.trim()
    if (trimmedText.length <= this.charLimit) return trimmedText
    if (trimmedText.split(' ').length === this.minimumWords) return trimmedText
    return this.shortenedText(trimmedText)
  }

  shortenedText (text) {
    const words = text.split(' ')
    const newText = []
    let limitCheck = 0
    let spaces = 0
    let short = ''
    words.forEach((word) => {
      limitCheck += word.length
      if ((limitCheck + spaces) >= this.charLimit) short = newText.join(' ')
      newText.push(word)
      spaces += 1
    })
    return short
  }

}

module.exports = {
  Telegram
}

// for each word
// add to newText
// unless newText.length and word.length > this.charlimit
// return newText.join(' ')
