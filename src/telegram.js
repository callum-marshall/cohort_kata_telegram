class Telegram {
  constructor (charLimit) {
    this.charLimit = charLimit
    this._minimumWords = 1
    this.words = []
    this.result = []
  }

  getCharLimit () {
    return this.charLimit
  }

  getText (text) {
    text = text.trim()
    this.words = text.split(' ')
    if (this._isWithinCharLimit(text.length)) return text
    if (this._isWithinMinimumWords()) return text
    return this._shortenText(text)
  }

  _shortenText (text) {
    let limitCheck = 0
    this.words.forEach((word) => {
      limitCheck += word.length
      if ((limitCheck) <= this.charLimit) this.result.push(word)
      limitCheck += 1
    })
    return this.result.join(' ')
  }

  _isWithinCharLimit (chars) {
    return chars <= this.charLimit
  }

  _isWithinMinimumWords () {
    return this.words.length <= this._minimumWords
  }

}

module.exports = {
  Telegram
}
