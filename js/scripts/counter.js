const counterElement = document.getElementById("counter");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

let counter = 0;

function updateCounter() {
  counterElement.textContent = counter.toLocaleString();
}

incrementBtn.addEventListener("click", () => {
  counter++;
  updateCounter();
});

decrementBtn.addEventListener("click", () => {
  counter--;
  updateCounter();
});