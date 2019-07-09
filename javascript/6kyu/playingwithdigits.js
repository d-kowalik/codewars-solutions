// https://www.codewars.com/kata/playing-with-digits/train/javascript

function digPow(n, p) {
  const digits = n.toString()
  let sum = 0
  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(parseInt(digits[i]), i + p)
  }
  return Number.isInteger(sum / n) ? sum / n : -1
}
