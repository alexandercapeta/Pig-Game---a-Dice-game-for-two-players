'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--new');

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality.
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll.
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display the dice.
  //diceEl.classList.remove('hidden');
  //diceEl.src = `dice-${dice}.png`;
  // 3. Check for a roll 1: If true switch to next player.
  /*if (dice !== 1) {
    // Add the roll value to the current score.
    currentScore += dice;
  } else {
  }*/
});
