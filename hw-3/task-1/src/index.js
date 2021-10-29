// Напишите программу, которая находит в этом файле все записи
// с ip-адресами 89.123.1.41 и 34.48.240.111,
// а также сохраняет их в отдельные файлы с названием “%ip-адрес%_requests.log”.

const fs = require('fs')
const path = require('path')
const { PassThrough } = require('stream')
const readline = require('readline')

const { getArgs } = require('./utils')

const args = getArgs()

for (let i = 0; i < args.length; i++) {
  const arg = args[i]
  const re = new RegExp(`^${arg}`)

  const readStream = fs.createReadStream(path.join(__dirname, 'access2.log'), 'utf-8')
  const writeStream = fs.createWriteStream(path.join(__dirname, `%${arg}%_requests.log`))

  const rl = readline.createInterface({
    input: readStream,
    output: writeStream
  })

  rl.on('line', function (line) {
    if (re.test(line)) {
      this.output.write(`${line}\n`)
    }
  })

  rl.on('close', function () {
    console.log(`Created "${this.output.path}"`)
  })
}
