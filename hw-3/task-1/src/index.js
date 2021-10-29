const fs = require('fs')
const path = require('path')
const { PassThrough } = require('stream')
const readline = require('readline')

require('dotenv').config()

const { getArgs } = require('./utils')

const args = getArgs()

for (let i = 0; i < args.length; i++) {
  const arg = args[i]
  const re = new RegExp(`^${arg}`)

  const readStream = fs.createReadStream(path.join(__dirname, process.env.TARGET_FILE), 'utf-8')
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
