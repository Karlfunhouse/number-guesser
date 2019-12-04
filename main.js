(function() {
  var clearButton = document.querySelector('#clear-button')
  var input = document.querySelectorAll('.game-input')

  function enableButton() {
    clearButton.removeAttribute('disabled')
    }

  function clearFields() {
    for (var i = 0; i < input.length; i++) {
      input[i].value = " "
    }
    clearButton.setAttribute('disabled', true)
  }

  input[0].addEventListener('input', enableButton)
  input[1].addEventListener('input', enableButton)
  input[2].addEventListener('input', enableButton)
  input[3].addEventListener('input', enableButton)
  clearButton.addEventListener('click', clearFields)
}());
