var five = require('johnny-five')
var tessel = require('tessel-io')
var strategies = require('./strategies.js')

var pickRandomStrategy = require('./src/pickRandomStrategy')
var formatStrategy = require('./src/randomStrategy')




var board = new five.Board({
  io: new tessel()
})

var lcdLimit = 16


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