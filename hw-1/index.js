const colors = require('colors')
const { getPrimesArray, logColorArray } = require('./utils')

const arg1 = Number(process.argv[2])
const arg2 = Number(process.argv[3])

if (isNaN(arg1) || isNaN(arg2)) {
  return console.log('Argument(s) is not a number'.bgRed)
}

logColorArray(getPrimesArray(arg1, arg2))
