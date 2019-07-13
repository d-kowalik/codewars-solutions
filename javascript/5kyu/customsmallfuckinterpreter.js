// https://www.codewars.com/kata/esolang-interpreters-number-2-custom-smallfuck-interpreter/train/javascript

function interpreter(code, tape) {
  code = code.split('')
  tape = tape.split('').map(c => parseInt(c))
  let ptr = 0
  for (let i = 0; i < code.length; i++) {
    if (ptr >= tape.length || ptr < 0) break
    const instr = code[i]
    let bracketCount
    switch (instr) {
      case '>':
        ptr++
        break
      case '<':
        ptr--
        break
      case '*':
        tape[ptr] = tape[ptr] === 0 ? 1 : 0
        break
      case '[':
        if (tape[ptr]) break
        bracketCount = 0
        for (let j = i + 1; j < code.length; j++) {
          if (code[j] === '[') bracketCount++
          else if (code[j] === ']') {
            if (!bracketCount) {
              i = j
              break
            } else bracketCount--
          }
        }
        break
      case ']':
        if (!tape[ptr]) break
        bracketCount = 0
        for (let j = i - 1; j >= 0; j--) {
          if (code[j] === ']') bracketCount++
          else if (code[j] === '[') {
            if (!bracketCount) {
              i = j
              break
            } else bracketCount--
          }
        }
        break
      default:
        console.log('Unsupported symbol')
        break
    }
  }

  return tape.join('')
}
