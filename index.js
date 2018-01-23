const chalk = require('chalk')

const success = (...strs) => {
  const str = strs.join(' ')
  return `${chalk.reset.inverse.bold.green(' SUCESS ')} ${str}`
}

const info = (...strs) => {
  const str = strs.join(' ')
  return `${chalk.reset.inverse.bold.blue(' INFO ')} ${str}`
}

const warning = (...strs) => {
  const str = strs.join(' ')
  return `${chalk.reset.inverse.bold.yellow(' WARN ')} ${str}`
}

const error = (...strs) => {
  const str = strs.join(' ')
  return `${chalk.reset.inverse.bold.red(' ERROR ')} ${str}`
}

const logPad = (fn, ...strs) => {
  console.log(`\n${fn(...strs)}\n`)
}

module.exports = {
  chalk,
  success,
  info,
  warning,
  error,
  logPad
}
