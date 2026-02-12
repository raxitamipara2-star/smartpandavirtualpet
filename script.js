document.addEventListener("DOMContentLoaded", function () {

  let hunger = 50;
  let happiness = 50;
  let energy = 50;

  const hungerBar = document.getElementById("hunger");
  const happinessBar = document.getElementById("happiness");
  const energyBar = document.getElementById("energy");

  const pet = document.getElementById("pet");
  const mood = document.getElementById("mood");

  const feedBtn = document.getElementById("feedBtn");
  const playBtn = document.getElementById("playBtn");
  const sleepBtn = document.getElementById("sleepBtn");

  function updateBars() {
    hungerBar.value = hunger;
    happinessBar.value = happiness;
    energyBar.value = energy;
  }

  function animatePet() {
    pet.style.transform = "scale(1.2)";
    setTimeout(function () {
      pet.style.transform = "scale(1)";
    }, 200);
  }

  feedBtn.addEventListener("click", function () {
    hunger = Math.min(hunger + 15, 100);
    happiness = Math.min(happiness + 5, 100);
    pet.textContent = "😋";
    mood.textContent = "Yummy! Pet is happy 😋";
    animatePet();
    updateBars();
  });

  playBtn.addEventListener("click", function () {
    happiness = Math.min(happiness + 15, 100);
    energy = Math.max(energy - 10, 0);
    pet.textContent = "😄";
    mood.textContent = "That was fun! 😄";
    animatePet();
    updateBars();
  });

  sleepBtn.addEventListener("click", function () {
    energy = Math.min(energy + 20, 100);
    hunger = Math.max(hunger - 10, 0);
    pet.textContent = "😴";
    mood.textContent = "Pet is sleeping peacefully 😴";
    animatePet();
    updateBars();
  });

});
