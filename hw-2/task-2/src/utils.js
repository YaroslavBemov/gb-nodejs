const moment = require('moment')

function getArgs() {
  const args = []
  const length = process.argv.length

  for (let i = 2; i < length; i++) {
    args.push(process.argv[i])
  }

  return args
}

function getSecondsToTime(arr) {
  return arr.map(item => {
    const timeTo = moment(item, 'hh-DD-MM-YYYY').valueOf() / 1000
    const now = moment().unix()

    return timeTo - now
  })
}

module.exports = {
  getArgs,
  getSecondsToTime
}
