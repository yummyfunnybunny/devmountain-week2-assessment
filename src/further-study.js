// Unit 2 Assessment: further-study.js

// Return a sequence of words arranged according to the rules below.
//
// The sequence starts with the first word in the given array. The next word
// will start with the last letter of the preceding word. For example, these
// are all valid sequences of words:
//
//   king, goblin, nose, eat
//   cute, etcetera, antsy, yak, karat
//
// Sometimes, you'll get a word where there are mutliple candidates for the
// next word. For example, if the words are:
//
//   noon, naan, nun
//
// Then the first word in the sequence is 'noon'.
//
//   noon
//
// And the word after that should be the *first* word that starts with 'n'. So,
// even though both 'naan' and 'nun' start with 'n', the next word should be
// 'naan' because 'naan' appears before 'nun'. The final sequence of words will
// be:
//
//   noon, naan, nun
//
// The sequence will continue in this fashion until it runs out of words or it
// can't find words that'll fit the pattern.
//
// Ex.:
//   buildWordChain(['zoo', 'sour', 'racket', 'octos']);
//   => ['zoo', 'octos', 'sour', 'racket']
function buildWordChain(words) {
  const wordCount = words.length;
  const orderedWords = [];

  for (let i = 0; i < words.length; i++) {
    // save first word
    if (i === 0) {
      orderedWords.push(words[i]);
      words.shift();
    } else {
      // Find next word in sequence
      console.log(words);
    }
  }
}

function buildWordChain2(words) {
  console.log(words);
  const wordsCopy = words;

  // check for empty array
  if (words.length === 0) return [];

  const newOrder = [];
  // newOrder.push(words[0]);

  let firstWord = words[0];
  console.log(firstWord);

  let lastLetter = firstWord[firstWord.length - 1];
  console.log(lastLetter);

  let currentWord = "";

  for (var i = 0; i < words.length; i++) {
    currentWord = words[i];

    if (i === 0) {
      newOrder.push(words[i]);
      lastLetter = currentWord[currentWord.length - 1];
      wordsCopy.shift();
    } else if (currentWord[0] === lastLetter) {
      newOrder.push(words[i]);
      lastLetter = currentWord[currentWord.length - 1];
      wordsCopy.shift();
    }
  }

  for (let i = 0; i < wordsCopy.length; i++) {
    currentWord = wordsCopy[i];
    if (currentWord[0] === lastLetter) {
      newOrder.push(words[i]);
      lastLetter = currentWord[currentWord.length - 1];
    }
  }
  console.log(newOrder);
  return newOrder;
}

// Recursively
// function buildWordChain3(words) {
//   if (words.length === 1) {
//     // last iteration, stop the recursion
//   } else {
//     for (var i = 0; i < words.length; i++) {}
//   }
// }

export { buildWordChain };
