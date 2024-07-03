// Description: John is really excited about coffee. He wrote some text messages earlier,
// but he's worried that they didn't convey his enthusiasm for coffee, so he's decided to resend them with coffee in all-caps:

// COFFEE

// Task: Write a function "coffee" that accepts a string as a parameter and returns that string with every instance of coffee in all caps.

// Input: string. The word "coffee" may occur more than once. It may have some capital letters or already be in all-caps.
// There may be punctuation in the string too. It will not be part of another word like "Coffeeburger", which isn't a word anyway.

// Output: string with all instances of coffee in all-caps:

// Examples:

// Input: "Did I only have two cups of coffee this morning? I need more."
// Output: "Did I only have two cups of COFFEE this morning? I need more."

// Input: "Coffee! Buy me a COFFEE!" Output: "COFFEE! Buy me a COFFEE!"

// Good luck!

// go over the string and split it at every " "
// search for the word coffee
// take the coffee and make it capital letters
// create the new sentence with the COFFEE

function coffee(str) {
  const allWords = str.split(" ");
  const coffeeWord = "coffee";

  for (let i = 0; i < allWords.length; i++) {
    const word = allWords[i];
    if (word.toLowerCase() === coffeeWord.toLowerCase()) {
      allWords[i] = word.toUpperCase();
    }
  }

  return allWords.join(" ");
}

// doenst work because if the sentence includes a ! directly after a coffee it doesnt get split
// instead its much easier with this:

function coffee(str) {
  return str.replace(/coffee/gi, "COFFEE"); // g for global and i for ignore casesensitivty
}
