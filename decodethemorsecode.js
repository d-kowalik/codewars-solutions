// https://www.codewars.com/kata/decode-the-morse-code/train/javascript

const decodeMorse = morseCode => {
  morseCode = morseCode.trim()
  let words = morseCode.split('   ')
  let res = ''
  for (let word of words) {
    res +=
      word
        .split(' ')
        .map(letter => MORSE_CODE[letter])
        .join('') + ' '
  }

  return res.trim()
}
