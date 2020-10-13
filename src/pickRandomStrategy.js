var pickRandomIndex = require('./pickRandomIndex')

module.exports = function pickRandomStrategy() {
  var randomIndex = pickRandomIndex()
  var strategy = strategies[ randomIndex ]
  return strategy
}
