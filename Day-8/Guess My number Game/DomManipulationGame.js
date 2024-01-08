'use strict';

// Selecting an element from the html with the class name of .message
console.log(document.querySelector('.message').textContent);

// Let's change the text of message from "Start guessing.." to "Correct Guess!"

// document.querySelector('.message').textContent = 'Something..'; // retriving the text and changing it with "="

// This is called DOM Manipulation!

// setting the value in input textbox
// document.querySelector('.guess').value = 20;

// =========== Event Listner ===============

// -> an event is something that happens on the page. For example, a mouse click, mouse moving, key press or many other events.

// -> with an event listener, we can wait for a certain event to happen, and then react to it.

let score = 20;
let highScore = 0;

// Generating a random number

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// ----- Handling click event -------

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  // Storing the value entered by user
  const guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue, typeof guessValue);

  // when the value is not entered
  if (!guessValue) {
    displayMessage('⛔Not a Number');

    // when the value is getting matched
  } else if (guessValue === secretNumber) {
    displayMessage('🎉Correct Number');

    // Making the number visible
    document.querySelector('.number').textContent = secretNumber;

    // changing the background color when player win
    document.querySelector('body').style.backgroundColor = '#60b347';

    // making the number div wider
    document.querySelector('.number').style.width = '30rem';

    // if current score is greater than highscore, set the current score value into highscore
    if (score > highScore) {
      highScore = score;
    }

    // display the highscore
    document.querySelector('.highscore').textContent = highScore;

    //when the value is greater than secret number
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessValue > secretNumber ? '📈Too High' : '📉Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😞You lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // set the score back to 20
  score = 20;

  // regenerate the rando number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // reset the secret number
  document.querySelector('.number').textContent = '?';

  // empty the input textbox
  document.querySelector('.guess').value = '';

  // change the color back to original
  document.querySelector('body').style.backgroundColor = '#222';

  // change the width back to original of secret number
  document.querySelector('.number').style.width = '15rem';

  // change the message back to original
  displayMessage('Start guessing...');

  // set the score back to 20
  document.querySelector('.score').textContent = score;
});
