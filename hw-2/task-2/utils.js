

function getArgs() {
  const args = []
  const length = process.argv.length

  for (let i = 2; i < length; i++) {
    args.push(process.argv[i])
  }

  return args
}

module.exports = {
  getArgs
}
