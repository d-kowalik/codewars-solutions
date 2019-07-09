// https://www.codewars.com/kata/string-incrementer/train/javascript

function incrementString(strng) {
  const indexOfFirstNumber = strng.search(/[0-9]/)
  if (indexOfFirstNumber === -1) return strng + '1'
  const number = strng.slice(indexOfFirstNumber)
  let numberWithoutZeroes = number
    .split('')
    .filter(n => n !== '0')
    .join('')
  let numOfZeroes = number.length - numberWithoutZeroes.length
  if (number[number.length - 1] === '9' || numberWithoutZeroes === '')
    numOfZeroes -= 1
  if (numberWithoutZeroes === '') numberWithoutZeroes = 1
  else numberWithoutZeroes = parseInt(numberWithoutZeroes) + 1
  return (
    strng.slice(0, indexOfFirstNumber) +
    '0'.repeat(numOfZeroes < 0 ? 0 : numOfZeroes) +
    numberWithoutZeroes
  )
}
