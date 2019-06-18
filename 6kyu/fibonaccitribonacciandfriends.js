// https://www.codewars.com/kata/fibonacci-tribonacci-and-friends/train/javascript

function Xbonacci(signature, n) {
  const length = signature.length
  if (n <= length) return signature.slice(0, n)
  for (let i = length - 1; i < n - 1; i++) {
    signature.push(signature.slice(-length).reduce((a, b) => a + b))
  }
  return signature
}
