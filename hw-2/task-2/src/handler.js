const colors = require('colors')

class Handler {
  static setTimer(payload) {
    const title = payload.title
    let count = Number(payload.count)

    const intervalId = setInterval(() => {
      if (count === 0) {
        console.log(`Timer ${title} finish`.red)
        clearInterval(intervalId)
      } else {
        console.log(`Timer ${title} - remain ${count--} seconds...`.green)
      }
    }, 1000)
  }
}

module.exports = {Handler}
