(function() {
  var clearButton = document.querySelector('#clear-button')
  var challengerInputField = document.querySelectorAll('.game-input')
  var challengerGuesses = document.querySelectorAll('.guess');
  var challengerNames = document.querySelectorAll('.player');
  var gameSubmit = document.querySelector('#submit-button')
  var playerOneDisplay = document.querySelector('#challenger-1-in-game')
  var playerTwoDisplay = document.querySelector('#challenger-2-in-game')
  var guessOneDisplay = document.querySelector('#guess-1-in-game')
  var guessTwoDisplay = document.querySelector('#guess-2-in-game')

  function enableButton() {
    clearButton.removeAttribute('disabled')
  }

  function clearFields() {
    for (var i = 0; i < challengerInputField.length; i++) {
      challengerInputField[i].value = ' '
    }
    clearButton.setAttribute('disabled', true)
  }

  function displayChallengerName() {
    playerOneDisplay.innerText = challengerNames[0].value
    playerTwoDisplay.innerText = challengerNames[1].value
    for (var i = 0; i < challengerNames.length; i++) {
      challengerNames[i].setAttribute('disabled', true)
    }
    displayGuess()
  }

  function displayGuess() {

  }

  gameSubmit.addEventListener('click', displayChallengerName)
  challengerInputField[0].addEventListener('input', enableButton)
  challengerInputField[1].addEventListener('input', enableButton)
  challengerInputField[2].addEventListener('input', enableButton)
  challengerInputField[3].addEventListener('input', enableButton)
  clearButton.addEventListener('click', clearFields)
}());
