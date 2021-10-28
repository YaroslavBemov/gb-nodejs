class Handler {
  static setTimer(payload) {
    const title = payload.title
    let count = Number(payload.count)

    const intervalId = setInterval(() => {
      if (count === 0) {
        console.log(`Timer ${title} finish`)
        clearInterval(intervalId)
      } else {
        console.log(`Timer ${title} - remain ${count--} seconds...`)
      }
    }, 1000)
  }
}

module.exports = {Handler}
