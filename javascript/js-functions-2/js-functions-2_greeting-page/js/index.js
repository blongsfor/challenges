console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  let time = new Date().getHours();

  if (time >= 6 && time <= 12) {
    return "Good morning";
  }
  if (time >= 13 && time <= 18) {
    return "Good afternoon";
  }
  if (time >= 19 && time <= 22) {
    return "Good evening";
  } else {
    return "Good night";
  }
}

function getDayColor() {
  let day = new Date().getDay();

  if (day == 1) {
    return "darkgrey";
  }
  if (day >= 2 && day <= 5) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
