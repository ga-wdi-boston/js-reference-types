'use strict';

var paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

// The paragraph split into a list
var words = [];

// The word list normalized (all lower case with punctuation removed)
var normalizedWords = [];

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};

// The keys pulled out into a list
var uniqueWords = [];

// The words as keys and the values the count of each word
var wordFrequencies = {};

module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  wordFrequencies: wordFrequencies
};
