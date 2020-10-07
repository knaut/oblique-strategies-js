const strategies = require('./strategies.js')

const randIndex = Math.floor(Math.random() * strategies.length)

console.log(randIndex, strategies[randIndex])