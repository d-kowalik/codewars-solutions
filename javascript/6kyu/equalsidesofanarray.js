// https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript
const sum = (a, b) => a + b

function findEvenIndex(arr) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    const leftSum = i === 0 ? 0 : arr.slice(0, i).reduce(sum)
    const rightSum = i === length - 1 ? 0 : arr.slice(i + 1).reduce(sum)
    if (leftSum === rightSum) return i
  }

  return -1
}
