// https://www.codewars.com/kata/recover-a-secret-string-from-random-triplets/train/javascript

const recoverSecret = triplets => {
  let firstLetter = ''
  let possibleFirstLetters = triplets.map(triplet => triplet[0])
  for (let triplet of triplets) {
    for (let i = 1; i < triplet.length; i++) {
      const letter = triplet[i]
      possibleFirstLetters = possibleFirstLetters.filter(l => l !== letter)
    }
  }
  possibleFirstLetters = possibleFirstLetters.filter(
    letter => letter !== undefined
  )
  if (!possibleFirstLetters.length) return ''
  firstLetter = possibleFirstLetters[0]
  triplets = triplets.map(triplet =>
    triplet.filter(letter => letter !== firstLetter)
  )
  return firstLetter + recoverSecret(triplets)
}
