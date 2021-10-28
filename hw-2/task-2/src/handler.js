const colors = require('colors')
const moment = require('moment')

class Handler {
  static setTimer(payload) {
    const title = payload.title
    let count = Number(payload.count)

    const intervalId = setInterval(() => {
      if (count === 0) {
        console.log(`Timer ${title} finish`.red)
        clearInterval(intervalId)
      } else {
        const hour = moment(count).format('hh')
        const minute = moment(count).format('mm')
        const second = moment(count).format('ss')
        console.log(`Timer ${title} - remain ${hour} hours ${minute} minutes ${second} seconds...`.green)
        count -= 1000
      }
    }, 1000)
  }
}

module.exports = {Handler}
