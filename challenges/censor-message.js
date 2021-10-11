/**
 * Replace banned words in a message with '*****'
 * @param {string} message - input message to be censored
 * @param {array} banList - array containing banned words
 * @returns {string} of the original message with banned words replaces with '*****'
 */

function censorMessage(message, banList) {
  const rawWords = message.split(" ");
  let scrubbedWords = [];
  for (let i = 0; i < rawWords.length; i++) {
    let lowercaseWord = rawWords[i].toLowerCase();
    if (banList.includes(lowercaseWord)) {
      scrubbedWords.push("*****");
    } else {
      scrubbedWords.push(rawWords[i]);
    }
  }
  const scrubbedMessage = scrubbedWords.join(" ");
  return scrubbedMessage;
}

console.log(
  `censorMessage("don't mess with cats", ["mess"]):`,
  censorMessage("don't mess with cats", ["mess"]),
  `should be don't ***** with cats`
);
