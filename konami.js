  var konamiCodePosition = 0;
document.addEventListener('keydown', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  var key = allowedKeys[e.keyCode];
  var requiredKey = konamiCode[konamiCodePosition];

  if (key == requiredKey) {

    konamiCodePosition++;
  } else {
    konamiCodePosition = 0;
  }
  if (konamiCodePosition == konamiCode.length) {
    activateCheats();
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  document.querySelector('html').style.backgroundImage = 'url("https://i.ytimg.com/vi/UMiMlm3rsdU/maxresdefault.jpg")';

  document.querySelector('body').style.visibility = 'hidden'

  var audio = new Audio('sinister.mp3');
  audio.play();
}

function returnToGame() {
  document.querySelector('body').style.visibility = 'visible'
  document.querySelector('html').style.backgroundImage = 'none';
}

document.querySelector('html').addEventListener('click', returnToGame)
