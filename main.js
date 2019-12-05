(function() {
  var clearButton = document.querySelector('#clear-button')
  var challengerInputField = document.querySelectorAll('.game-input')
  var submitButton = document.querySelector('#submit-button')

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
    clearButton.removeAttribute('disabled')
    }

  function disableSubmitButton() {}

  function clearFields() {
    for (var i = 0; i < challengerInputField.length; i++) {
      challengerInputField[i].value = ' '
    }
    clearButton.setAttribute('disabled', true)
    submitButton.setAttribute('disabled', true)
  }

  challengerInputField[0].addEventListener('keyup', enableSubmitButton)
  challengerInputField[1].addEventListener('keyup', enableSubmitButton)
  challengerInputField[2].addEventListener('keyup', enableSubmitButton)
  challengerInputField[3].addEventListener('keyup', enableSubmitButton)
  challengerInputField[0].addEventListener('input', enableButton)
  challengerInputField[1].addEventListener('input', enableButton)
  challengerInputField[2].addEventListener('input', enableButton)
  challengerInputField[3].addEventListener('input', enableButton)
  clearButton.addEventListener('click', clearFields)
}());
