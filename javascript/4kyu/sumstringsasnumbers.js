// https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript

const transform = a =>
  a
    .split('')
    .reverse()
    .map(c => parseInt(c))

const sumStrings = (a, b) => {
  a = transform(a)
  b = transform(b)

  const res = []
  const l = Math.max(a.length, b.length)
  let carry = 0

  for (let i = 0; i < l; i++) {
    let x = a[i] === undefined ? 0 : a[i]
    let y = b[i] === undefined ? 0 : b[i]
    let n = x + y + carry
    carry = Math.floor(n / 10)
    n %= 10
    res.unshift(n)
  }

  res.unshift(carry)
  return res.join('').replace(/^0+/, '') // Remove leading zeroes
}
