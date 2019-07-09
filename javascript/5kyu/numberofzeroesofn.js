// https://www.codewars.com/kata/number-of-trailing-zeros-of-n/train/javascript

function zeros(n) {
  let res = 0
  let d = 1
  for (let pow = 1; d < n; pow++) {
    d = Math.pow(5, pow)
    res += Math.floor(n / d)
  }
  return res
}
