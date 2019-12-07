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
  var minRange = document.querySelector('#min-range-input');
  var maxRange = document.querySelector('#max-range-input');
  var rangeView = document.querySelectorAll('.range-view-js');
  var updateButton = document.querySelector('#update-button');
  var inputForRange = document.querySelector('#set-range-box');
  var randomNumber = createNumber();
  var winningSide = document.querySelector('#winning-side');

  function createNumber() {
    return Math.round(Math.random() * 100);
  }

  function disableButtons() {
    submitButton.setAttribute('disabled', true);
    updateButton.setAttribute('disabled', true);
    clearButton.setAttribute('disabled', true);
  }

  function disableInput() {
    if (challengerNames[0].value.length !== 0) {
      for (var i = 0; i < challengerNames.length; i++) {
        challengerNames[i].setAttribute('disabled', true);
      };
    }
    minRange.setAttribute('disabled', true);
    maxRange.setAttribute('disabled', true);
  }

  function setRange() {
    rangeView[0].innerText = minRange.value;
    rangeView[1].innerText = maxRange.value;
    var min = parseInt(minRange.value)
    var max = parseInt(maxRange.value)
    randomNumber = Math.round(Math.random() * (max - min) + min);
  }

  function enableSubmitButton() {
    if (challengerInputField[0].value.length !== 0 &&
      challengerInputField[1].value.length !== 0 &&
      challengerInputField[2].value.length !== 0 &&
      challengerInputField[3].value.length !== 0) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', true);
    }
  }

  function enableUpdateButton() {
    if (minRange.value.length !== 0 &&
      maxRange.value.length !== 0) {
      updateButton.removeAttribute('disabled');
    } else {
      updateButton.setAttribute('disabled', true);
    }
  }

  function enableClearButton() {
    clearButton.removeAttribute('disabled');
  }

  function clearFields() {
    if (challengerNames[0].hasAttribute('disabled')) {
      challengerInputField[1].value = ' '
      challengerInputField[3].value = ' '
    } else {
      for (var i = 0; i < challengerInputField.length; i++) {
        challengerInputField[i].value = ' '
      }
    }

    submitButton.setAttribute('disabled', true);
  }

  function displayChallengerInputs() {
    playerOneDisplay.innerText = challengerNames[0].value;
    playerTwoDisplay.innerText = challengerNames[1].value;
    disableInput()
    checkGuesses()
    guessOneDisplay.innerText = challengerGuesses[0].value;
    guessTwoDisplay.innerText = challengerGuesses[1].value;
    clearFields()
    disableButtons()
  }

  function checkGuesses() {
    checkGuess1();
    checkGuess2();
  }

  function checkGuess1() {
    if (parseInt(challengerGuesses[0].value) < randomNumber) {
      guessHint[0].innerText = 'Too Low!'
    } else if (parseInt(challengerGuesses[0].value) > randomNumber) {
      guessHint[0].innerText = 'Too High!'
    } else {
      guessHint[0].innerText = 'BOOM BABY!'
      gameWinner()
    }
  }

  function checkGuess2() {
    if (parseInt(challengerGuesses[1].value) < randomNumber) {
      guessHint[1].innerText = 'Too Low!'
    } else if (parseInt(challengerGuesses[1].value) > randomNumber) {
      guessHint[1].innerText = 'Too High!'
    } else {
      guessHint[1].innerText = 'BOOM BABY!'
      gameWinner()
    }
  }

  function gameWinner() {
    var winnerCard = document.createElement('section')
    winnerCard.classList.add('game-box')
    winnerCard.classList.add('winner-card')
    var winnerInfo = `<section class="challenger-names">
            <h4 class="challenger1-name bold" >CHALLENGER 1 NAME</h4>vs.
            <h4 class="challenger2-name bold">CHALLENGER 2 NAME</h4>
          </section>
          <hr>
          <section class="winner-box">
            <h2 class="winner-name">CHALLENGER 2 NAME</h2>
          </section>
          <section>
            <h4 class="winner-box winner ">WINNER</h4>
          </section>
          <hr>
          <section class="card-bottom">
            <p class="guesses"><span class="bold">47</span> GUESSES</p>
            <p class="timer"><span class="bold">1</span> MINUTE <span class="bold">37</span> SECONDS</p>
            <input type="button" class="close-button" id="x-button" />
          </section>`
    winnerCard.innerHTML = winnerInfo
    winningSide.prepend(winnerCard)
  }

  inputForRange.addEventListener('input', enableUpdateButton);
  updateButton.addEventListener('click', setRange);
  submitButton.addEventListener('click', displayChallengerInputs);
  inputForGame.addEventListener('input', enableClearButton);
  inputForGame.addEventListener('input', enableSubmitButton);
  clearButton.addEventListener('click', clearFields);
}());
