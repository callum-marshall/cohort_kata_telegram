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

  test('it returns a single word even when it is over the character limit', () => {
    telegram.setCharLimit(10)
    expect(telegram.getText('catdogfishbird')).toBe('catdogfishbird')
  })

  test('it removes any additional words after the character limit', () => {
    telegram.setCharLimit(10)
    expect(telegram.getText('fire water')).toBe('fire water')
    expect(telegram.getText('a frenchman')).toBe('a')
  })

})
