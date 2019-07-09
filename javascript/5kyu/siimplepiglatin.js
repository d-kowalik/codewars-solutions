// https://www.codewars.com/kata/simple-pig-latin/train/javascript

pigIt = s =>
  s
    .split(' ')
    .map(w =>
      w !== '!' && w !== '?' && w !== '.'
        ? w
            .split('')
            .slice(1)
            .concat([w[0], 'a', 'y'])
            .join('')
        : w
    )
    .join(' ')
