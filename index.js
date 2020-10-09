var five = require('johnny-five')
var tessel = require('tessel-io')
var strategies = require('./strategies.js')

var board = new five.Board({
  io: new tessel()
})

function pickRandom() {
  var length = strategies.length
  var random = Math.floor( Math.random() * length)
  return random
}

board.on('ready', function() {
  var lcd = new five.LCD({
    pins: ['b2', 'b3', 'b4', 'b5', 'b6', 'b7']
  })

  var button = new five.Button('a3')

  button.on('release', function() {
    
    var randomIndex = pickRandom()

    lcd.cursor(0, 0).print(
      strategies[ randomIndex ]
    )
    
  })

})