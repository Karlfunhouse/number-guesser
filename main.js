(function() {
  var clearButton = document.querySelector('#clear-button');
  var challengerInputField = document.querySelectorAll('.game-input');
  var challengerGuesses = document.querySelectorAll('.guess');
  var challengerNames = document.querySelectorAll('.player');
  var playerOneDisplay = document.querySelector('#challenger-1-in-game');
  var playerTwoDisplay = document.querySelector('#challenger-2-in-game');
  var guessOneDisplay = document.querySelector('#guess-1-in-game');
  var guessTwoDisplay = document.querySelector('#guess-2-in-game');
  var submitButton = document.querySelector('#submit-button');

  function enableSubmitButton() {
    if (challengerInputField[0].value.length !== 0 &&
        challengerInputField[1].value.length !== 0 &&
        challengerInputField[2].value.length !== 0 &&
        challengerInputField[3].value.length !== 0){
        submitButton.removeAttribute('disabled');
    }else{
        submitButton.setAttribute('disabled', true);
    }
  }

  function enableButton() {
    clearButton.removeAttribute('disabled');
  }

  function clearFields() {
    if (challengerNames[0].hasAttribute('disabled') &&
        challengerNames[0].hasAttribute('disabled')) {
        challengerInputField[1].value = ' '
        challengerInputField[3].value = ' '
      }else {
        for (var i = 0; i < challengerInputField.length; i++) {
          challengerInputField[i].value = ' '
      }
    }


    clearButton.setAttribute('disabled', true);
    submitButton.setAttribute('disabled', true);
  }

  function displayChallengerInputs() {
    playerOneDisplay.innerText = challengerNames[0].value;
    playerTwoDisplay.innerText = challengerNames[1].value;
    for (var i = 0; i < challengerNames.length; i++) {
      challengerNames[i].setAttribute('disabled', true);
    };
    guessOneDisplay.innerText = challengerGuesses[0].value;
    guessTwoDisplay.innerText = challengerGuesses[1].value;
      challengerGuesses[0].value = ' '
      challengerGuesses[1].value = ' '
      submitButton.setAttribute('disabled', true);
      clearButton.setAttribute('disabled', true);
  }

  submitButton.addEventListener('click', displayChallengerInputs);
  challengerInputField[0].addEventListener('keyup', enableSubmitButton);
  challengerInputField[1].addEventListener('keyup', enableSubmitButton);
  challengerInputField[2].addEventListener('keyup', enableSubmitButton);
  challengerInputField[3].addEventListener('keyup', enableSubmitButton);
  challengerInputField[0].addEventListener('input', enableButton);
  challengerInputField[1].addEventListener('input', enableButton);
  challengerInputField[2].addEventListener('input', enableButton);
  challengerInputField[3].addEventListener('input', enableButton);
  clearButton.addEventListener('click', clearFields);
}());
