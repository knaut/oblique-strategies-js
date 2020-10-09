var five = require('johnny-five')
var tessel = require('tessel-io')
var strategies = require('./strategies.js')

var board = new five.Board({
  io: new tessel()
})

board.on('ready', function() {
  var lcd = new five.LCD({
    pins: ['b2', 'b3', 'b4', 'b5', 'b6', 'b7']
  })

  lcd.cursor(0, 0).print(
    strategies[0]
  )

})