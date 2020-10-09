var tessel = require('tessel')

var testLED = tessel.led[2]

setInterval(function() {
  testLED.toggle(function (error) {
    if (error) {
      console.log('There was an error with toggling the led.', error);
    } else {
      console.log('The green led is now on OR off!');
    }
  });
}, 200)