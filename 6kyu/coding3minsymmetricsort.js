//www.codewars.com/kata/coding-3min-symmetric-sort/train/javascript

// More readable solution
function sc(array) {
  array = array.sort((a, b) => a - b)
  let copy = array.slice()

  array = array.filter((_, idx) => idx % 2 === 0)
  copy = copy.filter((_, idx) => idx % 2 !== 0)
  copy.reverse()
  return array.concat(copy)
}

// Fancier solution
const sc = array =>
  array
    .sort((a, b) => a - b)
    .filter((_, idx) => idx % 2 === 0)
    .concat(
      array
        .sort((a, b) => a - b)
        .filter((_, idx) => idx % 2 !== 0)
        .reverse()
    )
