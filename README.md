## Telegram

Write a program that outputs lines of text no longer than a given number of characters.

### Requirements

The program takes a number `n`, then accepts lines of text and outputs lines of text, where the output lines have as many words as possible but are never longer than `n` characters. Words may not be split, but you may assume that no single word is too long for a line.

### Acceptance Criteria

telegram.setCharLimit(10)
telegram.getText("dog") # => "dog"

telegram.setCharLimit(10)
telegram.getText("catdogfishbird") # => "catdogfishbird"

telegram.setCharLimit(10)
telegram.getText("cat dog fish") # => "cat dog fish"

telegram.setCharLimit(10)
telegram.getText("cat dog fish bird") # => "cat dog fish"

### Edge Cases

telegram.getText("catdogfishbird") # => error "please specify a character length greater than 0"

telegram.setCharLimit(10)
telegram.getText(3) # => "input must be a string"

telegram.setCharLimit(10)
telegram.getText(null) # => "input must be a string"

### Instructions

1. Clone this repo
2. run `npm install`
