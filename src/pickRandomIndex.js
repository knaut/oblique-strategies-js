module.exports = function pickRandomIndex(strategies) {
  var length = strategies.length
  var random = Math.floor( Math.random() * length)
  return random
}