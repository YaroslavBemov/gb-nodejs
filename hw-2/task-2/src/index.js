const {MyEventEmitter} = require('./my-event-emitter')
const {Handler} = require('./handler')
const {getArgs, getSecondsToTime} = require('./utils')

const eventEmitter = new MyEventEmitter()

eventEmitter.on('timer', Handler.setTimer)

const args = getArgs()
const counts = getSecondsToTime(args)

for (let i = 0; i < counts.length; i++) {
  const payload = {
    title: i,
    count: counts[i]
  }

  eventEmitter.emit('timer', payload)
}
