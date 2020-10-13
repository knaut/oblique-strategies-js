module.exports = function pickRandomIndex() {
  var length = strategies.length
  var random = Math.floor( Math.random() * length)
  return random
}