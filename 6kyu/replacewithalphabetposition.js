// https://www.codewars.com/kata/replace-with-alphabet-position/train/javascript

function alphabetPosition(text) {
  return text
    .split('')
    .map(c => {
      let code = c.charCodeAt(0)
      if (code > 64 && code < 91) code -= 64
      else if (code > 96 && code < 123) code -= 96
      else return ''
      return code
    })
    .filter(c => c !== '')
    .join(' ')
}
