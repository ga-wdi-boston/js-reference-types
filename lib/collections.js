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
let words = [];

// The word list normalized (all uppercase with punctuation removed)
let normalizedWords = [];

// The words stored as keys of a dictionary
let uniqueWordsAsKeys = {};

// The keys pulled out into a list
let uniqueWords = [];

// The words as keys and the values the count of each word
let wordFrequencies = {};

module.exports = {
  normalizedWords,
  uniqueWords,
  wordFrequencies,
};
