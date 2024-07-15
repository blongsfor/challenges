// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing
// second character of the final pair with an underscore ('_').

// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// split every 2 characters and turn into array
// if length of str % 2 === 0
// if length of str % 2 === 1 last pair consists of letter + _
// if no str return empty array

function solution(str) {
  const parts = str.match(/[\s\S]{1,2}/g) || [];

  if (parts.length > 0 && parts[parts.length - 1].length === 1) {
    parts[parts.length - 1] += "_";
  }

  return parts;
}
