// DATA
var strategies = require('../strategies')

// UTILS
var pickRandomIndex = require('../src/pickRandomIndex')
var pickRandomStrategy = require('../src/pickRandomStrategy')
var formatStrategy = require('../src/formatStrategy')

function testStrategyFormat() {
  var randIndex = pickRandomIndex( strategies )
  var randomStrategy = pickRandomStrategy( strategies, randIndex )
  var strategyObject = formatStrategy( randomStrategy, 16 )
  return strategyObject
}

console.log(
  testStrategyFormat()
)