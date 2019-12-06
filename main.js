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
  var inputForGame = document.querySelector('#input-for-game');
  var guessHint = document.querySelectorAll('.guess-clue');
  var randomNumber = createNumber();

  function createNumber() {
    return Math.round(Math.random() * 100);
  }

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

  function enableClearButton() {
    clearButton.removeAttribute('disabled');
  }

  function clearFields() {
    if (challengerNames[0].hasAttribute('disabled')) {
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
    checkGuess1();
    checkGuess2();
    guessOneDisplay.innerText = challengerGuesses[0].value;
    guessTwoDisplay.innerText = challengerGuesses[1].value;
      challengerGuesses[0].value = ' '
      challengerGuesses[1].value = ' '
      submitButton.setAttribute('disabled', true);
      clearButton.setAttribute('disabled', true);
  }

  function checkGuess1() {
    if (parseInt(challengerGuesses[0].value) < randomNumber){
      guessHint[0].innerText = 'Too Low!'
    }else if(parseInt(challengerGuesses[0].value) > randomNumber){
      guessHint[0].innerText = 'Too High!'
    }else{
      guessHint[0].innerText = 'BOOM BABY!'
    }
  }

  function checkGuess2() {
    if (parseInt(challengerGuesses[1].value) < randomNumber){
      guessHint[1].innerText = 'Too Low!'
      console.log("randomNumber")
    }else if(parseInt(challengerGuesses[1].value) > randomNumber){
      guessHint[1].innerText = 'Too High!'
    }else{
      guessHint[1].innerText = 'BOOM BABY!'
    }
  }

  submitButton.addEventListener('click', displayChallengerInputs);
  inputForGame.addEventListener('input', enableClearButton)
  inputForGame.addEventListener('input', enableSubmitButton)
  clearButton.addEventListener('click', clearFields);
}());
