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
    const timeTo = moment(item, 'hh-DD-MM-YYYY').valueOf()
    if (isNaN(timeTo)) {
      console.log('Invalid argument')
      process.exit(1)
    }
    const now = moment()

    return timeTo - now
  })
}

function getFormatTimeString (timestamp) {
  const year = moment.duration(timestamp).years()
  const month = moment.duration(timestamp).months()
  const day = moment.duration(timestamp).days()
  const hour = moment.duration(timestamp).hours()
  const minute = moment.duration(timestamp).minutes()
  const second = moment.duration(timestamp).seconds()

  const years = getWord(year, ['год', 'года', 'лет'])
  const months = getWord(month, ['месяц', 'месяца', 'месяцев'])
  const days = getWord(day, ['день', 'дня', 'дней'])
  const hours = getWord(hour, ['час', 'часа', 'часов'])
  const minutes = getWord(minute, ['минута', 'минуты', 'минут'])
  const seconds = getWord(second, ['секунда', 'секунды', 'секунд'])

  return `
   ${year === 0 ? '' : year + ' ' + years} ${month === 0 ? '' : month + ' ' + months} ${day === 0 ? '' : day + ' ' + days} ${hour === 0 ? '' : hour + ' ' + hours} ${minute === 0 ? '' : minute + ' ' + minutes} ${second === 0 ? '' : second + ' ' + seconds}...`
}

function getWord(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20)
    ? 2
    : cases[(number % 10 < 5)
      ? number % 10 : 5]]
}

module.exports = {
  getArgs,
  getSecondsToTime,
  getFormatTimeString
}
