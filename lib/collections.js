'use strict'

const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.'

// The paragraph split into a list
const words = []

// The word list normalized (all uppercase with punctuation removed)
const normalizedWords = []

// The words stored as keys of a dictionary
const uniqueWordsAsKeys = {}

// The keys pulled out into a list
const uniqueWords = []

// The words as keys and the values the count of each word
const wordFrequencies = {}

module.exports = {
  normalizedWords,
  uniqueWords,
  wordFrequencies
}
