// https://www.codewars.com/kata/sum-by-factors/train/javascript

let isPrime = n => {
  if (n < 2) return false
  if (n === 2) return true
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return true
}

let primeFactors = n => {
  n = Math.abs(n)
  let res = []
  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) res.push(i)
  }
  return res
}

function sumOfDivided(lst) {
  let primes = []
  for (let i of lst) {
    primes.push(primeFactors(i))
  }
  primes = [...new Set([].concat(...primes).sort((a, b) => a - b))]
  let res = []
  let sum = 0
  for (let prime of primes) {
    for (let i of lst) {
      if (i % prime === 0) sum += i
    }
    res.push([prime, sum])
    sum = 0
  }
  return res
}
