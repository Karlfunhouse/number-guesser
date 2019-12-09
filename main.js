var challengerGuesses = document.querySelectorAll('.guess');
var challengerInputField = document.querySelectorAll('.game-input');
var challengerNames = document.querySelectorAll('.player');
var clearButton = document.querySelector('#clear-button');
var errorMessage = document.querySelectorAll('.error');
var gameResetButton = document.querySelector('#reset-button');
var guessHint = document.querySelectorAll('.guess-clue');
var guessOneDisplay = document.querySelector('#guess-1-in-game');
var guessTwoDisplay = document.querySelector('#guess-2-in-game');
var inputForGame = document.querySelector('#input-for-game');
var inputForRange = document.querySelector('#set-range-box');
var maxRange = document.querySelector('#max-range-input');
var minRange = document.querySelector('#min-range-input');
var playerOneDisplay = document.querySelector('#challenger-1-in-game');
var playerTwoDisplay = document.querySelector('#challenger-2-in-game');
var rangeView = document.querySelectorAll('.range-view-js');
var submitButton = document.querySelector('#submit-button');
var updateButton = document.querySelector('#update-button');
var winningSide = document.querySelector('#winning-side');
var numberOfGuesses = 0;
var deleteWinnerCard;
var randomNumber = createNumber();
var minNumber = 0;
var maxNumber = 100;
var startTime = null
var totalTime

function createNumber() {
  return Math.round(Math.random() * 100);
}

function startTimer() {
  if (startTime === null) {
    startTime = new Date().getTime();
  }

}

function calculateTimer() {
  var elapsedTime = (new Date().getTime() - startTime)
  var minutes = Math.floor(elapsedTime / 60000);
  var seconds = ((elapsedTime % 60000) / 1000).toFixed(0);
  startTime = null;
  totalTime = `${minutes} MINUTES ${seconds} SECONDS`
}

function disableButtons() {
  submitButton.setAttribute('disabled', true);
  updateButton.setAttribute('disabled', true);
  clearButton.setAttribute('disabled', true);
}

function resetGame() {
  minRange.value = 0;
  maxRange.value = 100;
  setRange()
  minRange.removeAttribute('disabled');
  maxRange.removeAttribute('disabled');
  for (var i = 0; i < challengerNames.length; i++) {
    challengerNames[i].removeAttribute('disabled');
  };
  clearInputFields();
  gameResetButton.setAttribute('disabled', true);
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
  minNumber = parseInt(minRange.value);
  maxNumber = parseInt(maxRange.value);
  randomNumber = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
  console.log(randomNumber);
  minRange.value = '';
  maxRange.value = '';
}

function enableSubmitButton() {
  if (challengerInputField[0].value.length !== 0 &&
    challengerInputField[1].value.length !== 0 &&
    challengerInputField[2].value.length !== 0 &&
    challengerInputField[3].value.length !== 0) {
    submitButton.removeAttribute('disabled');
    guessErrorMessage()
  } else {
    submitButton.setAttribute('disabled', true);
  }
}

function enableUpdateButton() {
  if (minRange.value.length !== 0 &&
    maxRange.value.length !== 0) {
    checkMaxGreaterMin()
  }
}

function checkMaxGreaterMin() {
  if (parseInt(maxRange.value) < parseInt(minRange.value)) {
        errorMessage[0].style.display = ('initial')
        updateButton.setAttribute('disabled', true);
        maxRange.classList.add('error-box');
  } else {
    updateButton.removeAttribute('disabled');
    errorMessage[0].style.display = ('none');
    maxRange.classList.remove('error-box');
  }
}

function enableClearButton() {
  clearButton.removeAttribute('disabled');
}

function clearInputFields() {
  if (challengerNames[0].hasAttribute('disabled')) {
    challengerInputField[1].value = ''
    challengerInputField[3].value = ''
  } else {
    for (var i = 0; i < challengerInputField.length; i++) {
      challengerInputField[i].value = ''
    }
  }

  submitButton.setAttribute('disabled', true);
}

function displayChallengerInputs() {
  startTimer()
  changeDisplays()
  disableInput()
  checkGuesses()
  clearInputFields()
  disableButtons()
  gameResetButton.removeAttribute('d isabled')
}

function changeDisplays() {
  playerOneDisplay.innerText = challengerNames[0].value;
  playerTwoDisplay.innerText = challengerNames[1].value;
  guessOneDisplay.innerText = challengerGuesses[0].value;
  guessTwoDisplay.innerText = challengerGuesses[1].value;
}

function guessErrorMessage() {
  if (parseInt(challengerGuesses[0].value) > maxNumber ||
      parseInt(challengerGuesses[0].value) < minNumber ||
      parseInt(challengerGuesses[1].value) > maxNumber ||
      parseInt(challengerGuesses[1].value) < minNumber) {
      submitButton.setAttribute('disabled', true);
      errorMessage[1].style.display = ('initial');
  } else {
    errorMessage[1].style.display = ('none');
  }
}


function checkGuesses() {
  numberOfGuesses += 2;
  var guess1 = checkGuess(challengerGuesses[0], guessHint[0]);
  var guess2 = checkGuess(challengerGuesses[1], guessHint[1]);
  if (guess1 == randomNumber) {
    gameWinner(challengerNames[0].value);
  } else if (guess2 == randomNumber) {
    gameWinner(challengerNames[1].value);
  }
}

function checkGuess(who, display) {
    if (parseInt(who.value) < randomNumber) {
    display.innerText = 'Too Low!';
  } else if (parseInt(who.value) > randomNumber) {
    display.innerText = 'Too High!';
  } else {
    display.innerText = 'BOOM BABY!';
  }
  return parseInt(who.value);
}

function gameWinner(winner) {
  var winnerCard = document.createElement('section')
  winnerCard.classList.add('game-box')
  winnerCard.classList.add('winner-card')
  var winnerInfo = `<section class="challenger-names">
          <h4 id='playerOneDisplay' class="challenger1-name bold" >${challengerNames[0].value}</h4>vs.
          <h4 id='playerTwoDisplay' class="challenger2-name bold">${challengerNames[1].value}</h4>
        </section>
        <hr>
        <section class="winner-box">
          <h2 class="winner-name">${winner}</h2>
        </section>
        <section>
          <h4 class="winner-box winner ">WINNER</h4>
        </section>
        <hr>
        <section class="card-bottom">
          <p id="guesses"><span class="bold">${numberOfGuesses}</span> GUESSES</p>
          <p id="timer"><span class="bold">1</span> MINUTE <span class="bold">37</span> SECONDS</p>
          <input type="button" class="close-button" id="x-button" />
        </section>
        `
  deleteWinnerCard = document.querySelector('.close-button');
  winnerCard.innerHTML = winnerInfo
  winningSide.prepend(winnerCard)
  resetGame()
}

function closeCard(event) {
  if (event.target.type == 'button') {
    event.target.parentElement.parentElement.remove();
  };
}

winningSide.addEventListener('click', closeCard);
inputForRange.addEventListener('input', enableUpdateButton);
updateButton.addEventListener('click', setRange);
submitButton.addEventListener('click', displayChallengerInputs);
inputForGame.addEventListener('input', enableClearButton);
inputForGame.addEventListener('input', enableSubmitButton);
clearButton.addEventListener('click', clearInputFields);
gameResetButton.addEventListener('click', resetGame)
