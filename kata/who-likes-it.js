// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

// map over array and for each name which is in array return name likes this
const names = ["Alex", "Jacob", "Mark", "Max"];

function likes(names) {
  const numOfLikes = names.length;
  const remainingElements = names.slice(2);
  names.map((name) => {
    if (numOfLikes === 0) {
      return "no one likes this";
    }
    if (numOfLikes === 1) {
      return name + "likes this";
    }
    if (numOfLikes < 3) {
      return name + "like this";
    }
    if (numOfLikes > 3) {
      return names.slice(0, 1) + "and"`${remainingElements}` + "like this";
    }
  });
}
