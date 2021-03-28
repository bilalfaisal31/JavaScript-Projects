"use strict";

let score_0 = document.querySelector("#score0");
let score_1 = document.querySelector("#score1");
const diceElement = document.querySelector("#dice");
const btn_reset = document.querySelector("#btn-reset");
const btn_dice = document.querySelector("#btn-dice");
const btn_hold = document.querySelector("#btn-hold");
const current_score_p0 = document.querySelector("#current-score-p0");
const current_score_p1 = document.querySelector("#current-score-p1");
const player_1 = document.querySelector(".player-0");
const player_2 = document.querySelector(".player-1");

score_0.innerText = 0;
score_1.innerText = 0;
current_score_p0.innerText = 0;
let currentScore = Number(current_score_p0.innerText);
let activePlayer = 0;
let playing = true;

diceElement.classList.add("hidden");

btn_dice.addEventListener("click", function () {
  if (playing) {
    // Generate a random no
    const diceNo = Math.trunc(Math.random() * 6) + 1;

    // Display Dice
    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${diceNo}.png`;

    // Check if 1
    if (diceNo !== 1) {
      // Add to current score
      currentScore += diceNo;
      document.querySelector(
        `#current-score-p${activePlayer}`
      ).innerText = currentScore;
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

btn_hold.addEventListener("click", function () {
  if (playing) {
    let totalScore =
      +document.querySelector(`#score${activePlayer}`).innerText + currentScore;
    document.querySelector(`#score${activePlayer}`).innerText = totalScore;

    if (totalScore >= 20) {
      playing = false;
      diceElement.classList.add("hidden");

      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

function switchPlayer() {
  currentScore = 0;
  document.querySelector(
    `#current-score-p${activePlayer}`
  ).innerText = currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player_1.classList.toggle("active-player");
  player_2.classList.toggle("active-player");
}
