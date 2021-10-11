/**
 *
 * @param {array} words - array of words
 * @returns {string} the longest word in the input array
 */

function longestInList(words) {
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

// TEST CASES
console.log(
  'longestInList(["England", "Wales", "Scotland", "Northern Ireland"]):',
  longestInList(["England", "Wales", "Scotland", "Northern Ireland"]),
  "should be Northern Ireland."
);
console.log(
  'longestInList(["the", "quick", "brown", "fox"]):',
  longestInList(["the", "quick", "brown", "fox"]),
  "should be quick."
);
console.log(
  'longestInList(["hello", "hi", "greetings", "hey"]):',
  longestInList(["hello", "hi", "greetings", "hey"]),
  "should be greetings."
);
