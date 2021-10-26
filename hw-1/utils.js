const isPrime = require('prime-number')

function getPrimesArray (num1, num2) {
  const primes = []

  for (let i = num1; i <= num2; i++) {
    isPrime(i) ? primes.push(i) : null
  }

  if (primes.length === 0) {
    return console.log('There are no primes in this interval'.bgRed)
  }

  return primes
}

function logColorArray (arr) {
  if (!Array.isArray(arr)) {
    return console.log('Not an Array'.bgRed)
  }

  const count = arr.length
  if (count === 0) {
    return console.log('Array is empty'.bgYellow)
  }

  let colorIndex = 0

  for (let i = 0; i < count; i++) {
    if (colorIndex === 0) {
      greenLog(arr[i])
    } else if (colorIndex === 1) {
      yellowLog(arr[i])
    } else {
      redLog(arr[i])
    }

    colorIndex < 2
      ? colorIndex += 1
      : colorIndex = 0
  }
}

function greenLog (item) {
  console.log(item.toString().green)
}

function yellowLog (item) {
  console.log(item.toString().yellow)
}

function redLog (item) {
  console.log(item.toString().red)
}

module.exports = { getPrimesArray, logColorArray }
