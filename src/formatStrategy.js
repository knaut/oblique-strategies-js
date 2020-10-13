module.exports = function formatStrategy(strategy) {
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