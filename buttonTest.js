var five = require('johnny-five')
var tessel = require('tessel-io')
var board = new five.Board({
  io: new tessel()
})

board.on('ready', function() {

  var button = new five.Button('a3')

  button.on('press', function() {
    console.log('button pressed')
  })

  button.on('release', function() {
    console.log('button released')
  })

})