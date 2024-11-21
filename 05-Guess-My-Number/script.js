'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Answer !';
// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 123;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('Not number !');
  } else if (guess === secretNumber) {
    displayMessage('Correct Answer !');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'To high! ' : 'To low! ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game !');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
