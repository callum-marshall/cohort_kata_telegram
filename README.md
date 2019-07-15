## Telegram

Write a program that outputs lines of text no longer than a given number of characters.

###Requirements

The program takes a number `n`, then accepts lines of text and outputs lines of text, where the output lines have as many words as possible but are never longer than `n` characters. Words may not be split, but you may assume that no single word is too long for a line.

###Acceptance Criteria

telegram.char_length(10)
telegram.text("dog") # => "dog"

telegram.char_length(10)
telegram.text("catdogfishbird") # => "catdogfishbird"

telegram.char_length(10)
telegram.text("cat dog fish bird") # => "cat dog fish"

###Edge Cases

telegram.text("catdogfishbird") # => error "please specify a character length greater than 0"

###Instructions

1. Clone this repo
2. 
