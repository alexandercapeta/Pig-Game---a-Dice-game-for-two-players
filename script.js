'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  // Switchings players
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality.
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll.
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display the dice.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for a roll 1: If true switch to next player.
    if (dice !== 1) {
      // Add the roll value to the current score.
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // Test if the game is still in play.
  if (playing) {
    // 1. Add curent score to the score of the active player.
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if score is >= 100;
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      querySelector(`.player--${activePlayer}`).classList.remove(
        'player--active'
      );
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  // Setting the scores to zero
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;

  document.getElementById('score--0').textContent = scores[0];
  document.getElementById('score--1').textContent = scores[1];
  document.getElementById('current--0').textContent = currentScore;
  document.getElementById('current--1').textContent = currentScore;

  // Removing the winner class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  // Changing the active player to player 1.
  if (activePlayer == 1) {
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
  activePlayer = 0;
});
