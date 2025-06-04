'use strict';

// Selecting elements

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
constbtnHold = document.querySelector('.btn--hold');

// Starting conditions

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');


// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      
        //add dice to current score
        currentScore += dice;
        document.getElementById(
            'current--${activePlayer}'
        }.textContent = currentScore;
    } else {
      // Switch to next player
      document.getElementById('current--${activePlayer}').textContent =0;
      currentScore = 0;
      activePlayer  = activePlayer === 0 ? 1 : 0;
      player0El.class List.toggle('player--active');
      playerIEl.classList.toggle('player--active');
    }
});

btnHold.addEventListener('click', function () {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);

    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
}
});

btnNew.addEventListener('click', init);
