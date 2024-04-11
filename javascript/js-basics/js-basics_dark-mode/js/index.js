console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const buttonDarkMode = document.querySelector('[data-js="dark-mode-button"]');
const buttonLightMode = document.querySelector('[data-js="light-mode-button"]');
const buttonToggleMode = document.querySelector('[data-js="toggle-button"]');

buttonDarkMode.addEventListener("click", darkMode);
buttonLightMode.addEventListener("click", lightMode);
buttonToggleMode.addEventListener("click", toggle);

function darkMode() {
  bodyElement.classList.add("dark");
}

function lightMode() {
  bodyElement.classList.remove("dark");
}

function toggle() {
  bodyElement.classList.toggle("dark");
}
