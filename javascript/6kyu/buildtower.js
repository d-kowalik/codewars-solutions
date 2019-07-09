// https://www.codewars.com/kata/build-tower/train/javascript

function towerBuilder(nFloors) {
  let result = []
  let currentWidth = nFloors * 2 - 1
  let spaces = 0
  while (currentWidth > 0) {
    result.unshift(
      ' '.repeat(spaces) + '*'.repeat(currentWidth) + ' '.repeat(spaces)
    )
    spaces += 1
    currentWidth -= 2
  }
  return result
}
