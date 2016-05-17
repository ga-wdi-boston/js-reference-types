'use strict';

const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

// The paragraph split into a list
let words = paragraph.split(' ');

// The word list normalized (all uppercase with punctuation removed)
const normalize = function (word) {
  return word.replace(/\W+/,'').toUpperCase();
};

let normalizedWords = words.map(normalize);

// The words stored as keys of a dictionary
let uniqueWordsAsKeys = function (array) {
  let result = {};

  array.forEach(function (word) {
    result[word] = null;
  });

  return result;
};

// The keys pulled out into a list
let uniqueWords = Object.keys(uniqueWordsAsKeys(normalizedWords));

// The words as keys and the values the count of each word
let wordFrequencies = {};

normalizedWords.forEach(function (word) {
  // wordFrequencies[word] = wordFrequencies[word] + 1;
  if (wordFrequencies[word]) {
    wordFrequencies[word] += 1;
  } else {
    wordFrequencies[word] = 1;
  }
});

module.exports = {
  normalizedWords,
  uniqueWords,
  wordFrequencies,
};
