// https://www.codewars.com/kata/primes-in-numbers/train/javascript

const primeFactorsRecursive = n => {
  let factors = []

  for (let i = 2; i < n / 2; i++) {
    if (n % i === 0) {
      let f = primeFactorsRecursive(i)
      factors.push(...f)
      n /= i
      i = 1
    }
  }
  factors.push(n)

  return factors
}

const assembleString = factors => {
  let result = ''
  let factorsCounted = {}
  for (let factor of factors) {
    factorsCounted[factor] =
      factorsCounted[factor] === undefined ? 1 : factorsCounted[factor] + 1
  }
  for (let factor in factorsCounted) {
    let num = factorsCounted[factor]
    if (num === 1) {
      result += '(' + factor + ')'
    } else {
      result += '(' + factor + '**' + num + ')'
    }
  }
  return result
}

const primeFactors = n => assembleString(primeFactorsRecursive(n))
