console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  return currentHour === 0
    ? "12am"
    : currentHour === 12
    ? "12pm"
    : currentHour <= 11
    ? "${currentHour}am"
    : "${currentHour -12}pm";
};

const getVectorLength = (x, y, z) => {
  (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};

const cleanInput = (string) => {
  string.toLowerCase().trim();
};

/*
Rewrite the following arrow functions as classic functions.
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

function add3(a, b, c) {
  return a + b + c;
}

function repeat10(string) {
  return string.repeat(10);
}
