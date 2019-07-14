// https://www.codewars.com/kata/esolang-interpreters-number-3-custom-paintf-star-star-k-interpreter/train/javascript

function represent(tape) {
  let res = ''
  for (let line of tape) {
    res += line.join('') + '\r\n'
  }
  return res.slice(0, res.length - 2)
}

function interpreter(code, iterations, width, height) {
  code = code.split('').filter(c => 'nesw*[]'.includes(c))
  const tape = []
  for (let i = 0; i < height; i++) {
    tape.push(Array(width).fill(0))
  }

  let iter = 0
  let x = 0
  let y = 0
  for (let i = 0; i < code.length; i++) {
    if (iter === iterations) return represent(tape)
    iter++
    let brackets = 0
    switch (code[i]) {
      case 'n':
        x--
        if (x < 0) x = height - 1
        break
      case 's':
        x++
        if (x >= height) x = 0
        break
      case 'e':
        y++
        if (y >= width) y = 0
        break
      case 'w':
        y--
        if (y < 0) y = width - 1
        break
      case '*':
        tape[x][y] = tape[x][y] === 0 ? 1 : 0
        break
      case '[':
        if (tape[x][y]) break
        for (let j = i + 1; j < code.length; j++) {
          if (code[j] === ']') {
            if (!brackets) {
              i = j
              break
            } else brackets--
          } else if (code[j] === '[') brackets++
        }
        break
      case ']':
        if (!tape[x][y]) break
        for (let j = i - 1; j >= 0; j--) {
          if (code[j] === '[') {
            if (!brackets) {
              i = j
              break
            } else brackets--
          } else if (code[j] === ']') brackets++
        }
        break
      default:
        break
    }
  }

  return represent(tape)
}
