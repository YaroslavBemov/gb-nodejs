const colors = require('colors')
const moment = require('moment')
const { getFormatTimeString } = require('./utils')

class Handler {
  static setTimer (payload) {
    const title = payload.title
    let count = Number(payload.count)

    const intervalId = setInterval(() => {
      if (count === 0) {
        console.log(`Timer ${title} finish`.red)
        clearInterval(intervalId)
      } else {
        console.log(`Timer ${title} - осталось ${getFormatTimeString(count)}`.green)
        count -= 1000
      }
    }, 1000)
  }

}

module.exports = { Handler }
