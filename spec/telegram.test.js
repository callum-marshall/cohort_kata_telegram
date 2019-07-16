const { Telegram } = require('../src/telegram')

describe('Telegram', () => {

  let tenCharTelegram

  beforeEach(() => {
    tenCharTelegram = new Telegram(10)
  })

  test('can specify character limit', () => {
    expect(tenCharTelegram.getCharLimit()).toBe(10)
  })

  test('it returns given text when under the character limit', () => {
    expect(tenCharTelegram.getText('dog')).toBe('dog')
  })

  test('it returns a single word even when it is over the character limit', () => {
    expect(tenCharTelegram.getText('catdogfishbird')).toBe('catdogfishbird')
  })

  test('it removes any additional words after the character limit', () => {
    expect(tenCharTelegram.getText('fire water')).toBe('fire water')
    expect(tenCharTelegram.getText('a frenchman')).toBe('a')
  })

})
