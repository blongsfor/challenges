// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased,
// and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even,
// therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' ').
//  Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

// take the string and make it into an array and split them at space
// take even indexes and make them upper case
// take all odd indexes make them lower case
// index 0 = upper case
// turn arrays back to string

function toWeirdCase(string) {
  return string
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, index) =>
          index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
