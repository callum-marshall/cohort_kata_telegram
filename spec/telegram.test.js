const { Telegram } = require('../src/telegram')

describe('Telegram', () => {

  let telegram

  beforeEach(() => {
    telegram = new Telegram()
  })

  test('can specify character limit', () => {
    expect(telegram.setCharLimit(10)).toBe(10)
  })

  test('it returns given text when under the character limit', () => {
    telegram.setCharLimit(10)
    expect(telegram.getText('dog')).toBe('dog')
  })

})
