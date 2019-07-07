// https://www.codewars.com/kata/simple-assembler-interpreter/train/javascript

function simple_assembler(program) {
  const registers = {}
  let i = 0

  while (i < program.length) {
    const parts = program[i].split(' ')
    const ins = parts[0]
    const reg = parts[1]
    const arg = parts[2]

    switch (ins) {
      case 'mov':
        if (isNaN(parseInt(arg, 10))) {
          registers[reg] = registers[arg]
        } else {
          registers[reg] = parseInt(arg, 10)
        }
        i++
        break
      case 'inc':
        registers[reg]++
        i++
        break
      case 'dec':
        registers[reg]--
        i++
        break
      case 'jnz':
        if ((isNaN(parseInt(reg, 10)) && registers[reg]) || parseInt(reg, 10)) {
          let jump = parseInt(arg, 10)
          i += jump === 0 ? 1 : jump
        } else i++
        break
      default:
        console.log('Invalid instruction')
        break
    }
  }

  return registers
}
