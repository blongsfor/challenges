// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// go through string and replace letters with position in alphabet
// make everything uppercase and put a space between each letter (split everything up)
// spaces remain spaces, special characters dont count (both are ignored)
// uppercase because CharCodeAt() A = 65 (also -64 then)

function alphabetPosition(text) {
  const textUppercase = text.toUpperCase();
  const splitText = textUppercase.split("").map((let) => let.charCodeAt());
  const newSplitText = splitText.filter((num) => {
    if (num > 64 && num < 91) {
      return num;
    }
  });
  const numArray = newSplitText.map((num) => num - 64);
  return numArray.join(" ");
}
