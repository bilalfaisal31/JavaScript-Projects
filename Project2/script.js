"use strict";
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector(".count");
const total = document.querySelector(".price");
const movieSelect = document.getElementById("movie");
let ticketPrice = Number(movieSelect.value);

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }

  updateSelectedSeats();
});

function updateSelectedSeats() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const countSelectedSeats = selectedSeats.length;
  count.innerText = countSelectedSeats;
  total.innerText = ticketPrice * countSelectedSeats;
}

movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedSeats();
});
