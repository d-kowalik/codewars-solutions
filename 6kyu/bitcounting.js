// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

// Initial solution
const toBin = n => {
  let res = ''
  while (n > 0) {
    res += n % 2
    n = Math.floor(n / 2)
  }
  return res
}

let countBits = function(n) {
  if (n === 0) return 0
  return toBin(n)
    .split('')
    .map(s => parseInt(s))
    .reduce((prev, curr) => prev + curr)
}

// Better solution
countBits = n =>
  n
    .toString(2)
    .split('0')
    .join('').length
