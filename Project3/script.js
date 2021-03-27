"use strict";

const score_0 = document.querySelector("#score0");
const score_1 = document.querySelector("#score1");
const diceElement = document.querySelector("#dice");
const btn_reset = document.querySelector("#btn-reset");
const btn_dice = document.querySelector("#btn-dice");
const btn_roll = document.querySelector("#btn-hold");
const current_score_p0 = document.querySelector("#current-score-p0");
const current_score_p1 = document.querySelector("#current-score-p1");
const player_1 = document.querySelector(".player-0");
const player_2 = document.querySelector(".player-1");

score_0.innerText = 0;
score_1.innerText = 0;
current_score_p0.innerText = 0;
let currentScore = Number(current_score_p0.innerText);
let activePlayer = 0;
const scores = [0, 0];

diceElement.classList.add("hidden");

btn_dice.addEventListener("click", function () {
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
    currentScore = 0;
    document.querySelector(
      `#current-score-p${activePlayer}`
    ).innerText = currentScore;

    activePlayer = activePlayer === 0 ? 1 : 0;

    player_1.classList.toggle("active-player");
    player_2.classList.toggle("active-player");
  }
});
