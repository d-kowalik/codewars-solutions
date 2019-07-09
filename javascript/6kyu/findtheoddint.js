// https://www.codewars.com/kata/find-the-odd-int/train/javascript

function findOdd(A) {
  let count = {}
  for (let n of A) {
    const val = count[n]
    count[n] = val === undefined ? 1 : val + 1
  }

  for (let n in count) {
    if (count[n] % 2 !== 0) return parseInt(n)
  }
}
