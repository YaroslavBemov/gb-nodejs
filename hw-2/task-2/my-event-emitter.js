const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter {
  constructor() {
    super()
  }
}

module.exports = {MyEventEmitter}
