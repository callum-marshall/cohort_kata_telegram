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
    text = text.trim()
    if (text.length <= this.charLimit) return text
    if (text.split(' ').length === this.minimumWords) return text
    return this.shortenedText(text)
  }

  shortenedText (text) {
    const words = text.split(' ')
    const newText = []
    let limitCheck = 0
    words.forEach((word) => {
      limitCheck += word.length
      if ((limitCheck) <= this.charLimit) newText.push(word)
      limitCheck += 1
    })
    return newText.join(' ')
  }

}

module.exports = {
  Telegram
}

// for each word
// add to newText
// unless newText.length and word.length > this.charlimit
// return newText.join(' ')
