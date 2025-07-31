// script.js

document.addEventListener("DOMContentLoaded", () => {
  const transition = document.querySelector(".transition");
  setTimeout(() => {
    transition.classList.add("transition-active");
  }, 100);
});
