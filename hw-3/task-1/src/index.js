// Напишите программу, которая находит в этом файле все записи
// с ip-адресами 89.123.1.41 и 34.48.240.111,
// а также сохраняет их в отдельные файлы с названием “%ip-адрес%_requests.log”.

const fs = require('fs')
const path = require('path')
const {PassThrough} = require('stream')

// const {getArgs} = require('./utils')

// const args = getArgs()

// for (let i = 0; i < args.length; i++) {
//   const writeStream = fs.createWriteStream(path.join(__dirname, `%${args[i]}%_requests.log`), {
//     flags: 'a',
//     encoding: 'utf8'
//   })
//
//   // writeStream.write(log1)
//
//   // writeStream.end(() => console.log(`File writing finished`))
// }

const readStream = fs.createReadStream(path.join(__dirname, 'access2.log'), 'utf-8')
const writeStream = fs.createWriteStream(path.join(__dirname, '%ip-адрес%_requests.log'))
const tunnel = new PassThrough()

tunnel.on('data', (chunk) => {
  console.log(chunk.toString())
})

readStream.pipe(tunnel).pipe(writeStream)


readStream.on('open', () => {
  console.log('Read stream start...')
})

// readStream.on('data', (chunk) => {
//   console.log(chunk)
// })

readStream.on('close', () => {
  console.log('Read stream close...')
})


// import stream from 'stream';
//
// const duplex = new stream.Duplex({
//   write: (chunk, encoding, next) {
//   // Do something with the chunk and then call next() to indicate
//   // that the chunk has been processed. The write() fn will handle
//   // data piped into this duplex stream. After the write() has
//   // finished, the data will be processed by the read() below.
//   next();
// },
// read: ( size ) {
//   // Add new data to be read by streams piped from this duplex
//   this.push( "some data" )
// }
// })
