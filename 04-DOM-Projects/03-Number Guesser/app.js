// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const UIgame = document.getElementById('game');
const UIminNum = document.querySelector('.min-num');
const UImaxNum = document.querySelector('.max-num');
const UIguessInput = document.querySelector('#guess-input');
const UIguessBtn = document.querySelector('#guess-btn');
const UImessage = document.querySelector('.message');

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Listen for Guess
UIguessBtn.addEventListener('click', function() {
  let guess = parseInt(UIguessInput.value);

  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    // setTimeout(setMessage(''), 3000);
  }
  else if (guess === winningNum) {
    UIguessInput.disabled = true;
    setMessage("YOU WIN!! High five you awesome person!", 'green');
  }
})

// Set message
function setMessage(message, color) {
  UImessage.style.color = color;
  UImessage.textContent = message;
}
