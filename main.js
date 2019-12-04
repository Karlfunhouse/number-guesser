(function() {
  var clearButton = document.querySelector('#clear-button')
  var challengerInputField = document.querySelectorAll('.game-input')

  function enableButton() {
    clearButton.removeAttribute('disabled')
  }

  function clearFields() {
    for (var i = 0; i < challengerInputField.length; i++) {
      challengerInputField[i].value = " "
    }
    clearButton.setAttribute('disabled', true)
  }

  challengerInputField[0].addEventListener('input', enableButton)
  challengerInputField[1].addEventListener('input', enableButton)
  challengerInputField[2].addEventListener('input', enableButton)
  challengerInputField[3].addEventListener('input', enableButton)
  clearButton.addEventListener('click', clearFields)
}());
