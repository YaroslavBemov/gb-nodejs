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
  const year = moment(timestamp).format('YYYY')
  const month = moment(timestamp).format('MM')
  const day = moment(timestamp).format('DD')
  const hour = moment(timestamp).format('H')
  const minute = moment(timestamp).format('mm')
  const second = moment(timestamp).format('ss')

  const years = getYears(year)
  const months = getMonths(month)
  const days = getDays(day)
  const hours = getHours(hour)
  const minutes = getMinutes(minute)
  const seconds = getSeconds(second)

  return `${year} ${years} ${month} ${months} ${day} ${days} ${hour} ${hours} ${minute} ${minutes} ${second} ${seconds}...`
}

function getYears (year) {
  let years

  switch (true) {
    case Number(year) === 1 || Number(year) === 21:
      years = 'год'
      break
    case Number(year) > 1 && Number(year) <= 4 ||
    Number(year) > 21 && Number(year) <= 23:
      years = 'года'
      break
    default:
      years = 'лет'
  }

  return years
}

function getMonths (month) {
  let months

  switch (true) {
    case Number(month) === 1 || Number(month) === 21:
      months = 'месяц'
      break
    case Number(month) > 1 && Number(month) <= 4 ||
    Number(month) > 21 && Number(month) <= 23:
      months = 'месяца'
      break
    default:
      months = 'месяцев'
  }

  return months
}

function getDays (day) {
  let days

  switch (true) {
    case Number(day) === 1 || Number(day) === 21:
      days = 'день'
      break
    case Number(day) > 1 && Number(day) <= 4 ||
    Number(day) > 21 && Number(day) <= 23:
      days = 'дня'
      break
    default:
      days = 'дней'
  }

  return days
}

function getHours (hour) {
  let hours

  switch (true) {
    case Number(hour) === 1 || Number(hour) === 21:
      hours = 'час'
      break
    case Number(hour) > 1 && Number(hour) <= 4 ||
    Number(hour) > 21 && Number(hour) <= 23:
      hours = 'часа'
      break
    default:
      hours = 'часов'
  }

  return hours
}

function getMinutes (minute) {
  let minutes

  switch (true) {
    case Number(minute) === 1 ||
    Number(minute) === 21 ||
    Number(minute) === 31 ||
    Number(minute) === 41 ||
    Number(minute) === 51:
      minutes = 'минута'
      break
    case Number(minute) > 1 && Number(minute) <= 4 ||
    Number(minute) > 21 && Number(minute) <= 24 ||
    Number(minute) > 31 && Number(minute) <= 34 ||
    Number(minute) > 41 && Number(minute) <= 44 ||
    Number(minute) > 51 && Number(minute) <= 54:
      minutes = 'минуты'
      break
    default:
      minutes = 'минут'
  }

  return minutes
}

function getSeconds (second) {
  let seconds

  switch (true) {
    case Number(second) === 1 ||
    Number(second) === 21 ||
    Number(second) === 31 ||
    Number(second) === 41 ||
    Number(second) === 51:
      seconds = 'секунда'
      break
    case Number(second) > 1 && Number(second) <= 4 ||
    Number(second) > 21 && Number(second) <= 24 ||
    Number(second) > 31 && Number(second) <= 34 ||
    Number(second) > 41 && Number(second) <= 44 ||
    Number(second) > 51 && Number(second) <= 54:
      seconds = 'секунды'
      break
    default:
      seconds = 'секунд'
  }

  return seconds
}

module.exports = {
  getArgs,
  getSecondsToTime,
  getFormatTimeString
}
