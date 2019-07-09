// https://www.codewars.com/kata/shortest-code-symmetric-sort/train/javascript

let sc = a => {
  let s = a.sort((a, b) => a - b)
  return s
    .filter((_, i) => i % 2 === 0)
    .concat(s.filter((_, i) => i % 2 !== 0).reverse())
}
