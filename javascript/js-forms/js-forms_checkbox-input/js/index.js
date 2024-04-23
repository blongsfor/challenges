console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
let isChecked = null;

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(isChecked);
  // --v-- write your code here --v--
  if (isChecked === true) {
    return alert("Form submitted");
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});

const checkBox = document.querySelector('[data-js="tos"]');

checkBox.addEventListener("input", (event) => {
  event.preventDefault();
  isChecked = event.target.checked;
  console.log("is it checked: ", event.target.checked);
  if (isChecked === true) {
    hideTosError();
  } else {
    showTosError();
  }
});
