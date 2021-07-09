// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;
    needToRestart = false;

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

restartGame(); // initialize the game with a fresh restart

// Listen for Guess
UIguessBtn.addEventListener('click', function() {
  let guess = parseInt(UIguessInput.value);

  // Handle restart first
  if (needToRestart) {
    restartGame();
  }
  // Validate input
  else if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    // setTimeout(setMessage(''), 3000);
  }
  else if (guess === winningNum) {
    // Correct guess
    gameOver(true);
  }
  else {
    // Incorrect guess
    guessesLeft -= 1;
    UIguessInput.value = '';  // clear their guess
    UIguessInput.style.borderColor = 'red';
    setMessage(`Nope, that's not it, try again. Remaining guesses: ${guessesLeft}`, 'red');

    if (guessesLeft <= 0) {
      gameOver(false);
    }
  }
})

// Set message
function setMessage(message, color) {
  UImessage.style.color = color;
  UImessage.textContent = message;
}

function gameOver(won) {
  let color = 'black';
  let message = '';
  if (won === true) {
    color = 'green';
    message = 'YOU WIN!! High five you awesome person!'
  } else {
    color = 'red';
    message = `YOU LOSE...  The correct number was ${winningNum}.`;
  }
  UIguessInput.disabled = true;
  UIguessInput.style.borderColor = color;
  setMessage(message, color);
  UIguessBtn.value = 'Try again?';
  needToRestart = true;
}

// Restart game
function restartGame() {
  UIguessInput.disabled = false;
  UIguessInput.value = '';  // clear their guess
  UIguessInput.style.borderColor = 'gray';
  setMessage('', 'black');
  UIguessBtn.value = 'Submit';
  guessesLeft = 3;
  winningNum = Math.floor(Math.random()*(max-min+1)+min);
  // setMessage(`psstt...the winning number is ${winningNum}`, 'lightgray')
  needToRestart = false;
}