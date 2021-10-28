const {MyEventEmitter} = require('./my-event-emitter')
const {Handler} = require('./handler')
const {getArgs} = require('./utils')

const eventEmitter = new MyEventEmitter()

eventEmitter.on('timer', Handler.setTimer)

const args = getArgs()

for (let i = 0; i < args.length; i++) {
  const payload = {
    title: i,
    count: args[i]
  }

  eventEmitter.emit('timer', payload)
}
