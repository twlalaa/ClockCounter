"use strict";

const changeCounter = () => {
  const today = new Date();
  const gradDay = new Date(2025, 5, 21);
  const sD = (gradDay - today) / 1000;
  const yearDiff = Math.floor(sD / 60 / 60 / 24 / 365);

  const dayDiff = Math.floor((sD / 60 / 60 / 24) % 365);

  const hourDiff = Math.floor((sD / 60 / 60) % 24);

  const minDiff = Math.floor((sD / 60) % 60);

  const secDiff = Math.floor(sD % 60);

  const years = document.querySelector(".years p");
  const days = document.querySelector(".days p");
  const hours = document.querySelector(".hours p");
  const minutes = document.querySelector(".minutes p");
  const seconds = document.querySelector(".seconds p");

  years.textContent = yearDiff;
  days.textContent = dayDiff;
  hours.textContent = String(hourDiff).padStart(2, 0);
  minutes.textContent = String(minDiff).padStart(2, 0);
  seconds.textContent = String(secDiff).padStart(2, 0);
};

changeCounter();
setInterval(changeCounter, 1000);
