// https://www.codewars.com/kata/tribonacci-sequence/train/javascript

function tribonacci(signature, n) {
  if (n < 4) return signature.slice(0, n)

  for (let i = 2; i < n - 1; i++) {
    signature = signature.concat(
      signature.slice(i - 2, i + 1).reduce((a, b) => a + b)
    )
  }

  return signature
}
