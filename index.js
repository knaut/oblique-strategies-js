var five = require('johnny-five')
var tessel = require('tessel-io')
var strategies = require('./strategies.js')

var board = new five.Board({
  io: new tessel()
})

var lcdLimit = 16

function pickRandomIndex() {
  var length = strategies.length
  var random = Math.floor( Math.random() * length)
  return random
}

function pickRandomStrategy() {
  var randomIndex = pickRandomIndex()
  var strategy = strategies[ randomIndex ]
  return strategy
}

function formatStrategy(strategy) {
  // the LCD monitor only has 16 places per row.
  // split the strategy so it's not truncated if it's too long.

  // TODO edge case: some strategies are longer than 16 places,
  // but have no spaces (like π)

  var firstRowArray = []
  var secondRowArray = []
  var hasOverflow = false

  for (var i = 0; strategy.length > i; ++i) {
    var strategyChar = strategy[i]

    if (i < lcdLimit) {
      firstRowArray.push(strategyChar)
    } else if (i < lcdLimit * 2) {
      secondRowArray.push(strategyChar)
    } else {
      // TODO: make the text scroll across the screen if it doesn't fit
      hasOverflow = true
    }
  }

  // if (firstRowArray.length < lcdLimit) {
  //   // TODO: replace empty chars with spaces
  // }

  var firstRowString = firstRowArray.join('')
  var secondRowString = secondRowArray.join('')

  return {
    firstRowString: firstRowString,
    secondRowString: secondRowString,
    hasOverflow: hasOverflow
  }

}

board.on('ready', function() {
  var lcd = new five.LCD({
    pins: ['b2', 'b3', 'b4', 'b5', 'b6', 'b7']
  })

  var button = new five.Button('a3')

  button.on('release', function() {
    // the lcd monitor needs to be cleared before the next
    // display, otherwise the prior text gets "stuck".
    
    // this method might be buggy
    // TODO: replace empty chars with spaces
    lcd.clear()
    
    var randomStrategy = pickRandomStrategy()
    var strategyObject = formatStrategy( randomStrategy )

    // debug
    // console.log(strategyObject)

    lcd.cursor(0, 0).print(
      strategyObject.firstRowString
    )

    if (strategyObject.secondRowString.length) {
      lcd.cursor(1, 0).print(
        strategyObject.secondRowString
      )
    }

  })

})