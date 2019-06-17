// https://www.codewars.com/kata/dubstep/train/javascript

let songDecoder = song =>
  song
    .split('WUB')
    .filter(s => s !== '')
    .join(' ')
