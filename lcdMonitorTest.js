var five = require('johnny-five')
var tessel = require('tessel-io')
var board = new five.Board({
  io: new tessel()
})

board.on('ready', function() {
  var lcd = new five.LCD({
    pins: ['b2', 'b3', 'b4', 'b5', 'b6', 'b7']
  })

  lcd.cursor(1, 0).print('world on a turtle')

})