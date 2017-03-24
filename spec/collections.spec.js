'use strict'

const chai = require('chai')

const expect = chai.expect

const collections = require('../lib/collections.js')

describe('collections', () => {
  describe('normalized words', () => {
    const normalizedWords = [
      'WHEN', 'IN', 'THE', 'COURSE', 'OF', 'HUMAN', 'EVENTS', 'IT',
      'BECOMES', 'NECESSARY', 'FOR', 'ONE', 'PEOPLE', 'TO', 'DISSOLVE',
      'THE', 'POLITICAL', 'BANDS', 'WHICH', 'HAVE', 'CONNECTED', 'THEM',
      'WITH', 'ANOTHER', 'AND', 'TO', 'ASSUME', 'AMONG', 'THE',
      'POWERS', 'OF', 'THE', 'EARTH', 'THE', 'SEPARATE', 'AND', 'EQUAL',
      'STATION', 'TO', 'WHICH', 'THE', 'LAWS', 'OF', 'NATURE', 'AND',
      'OF', 'NATURES', 'GOD', 'ENTITLE', 'THEM', 'A', 'DECENT',
      'RESPECT', 'TO', 'THE', 'OPINIONS', 'OF', 'MANKIND', 'REQUIRES',
      'THAT', 'THEY', 'SHOULD', 'DECLARE', 'THE', 'CAUSES', 'WHICH',
      'IMPEL', 'THEM', 'TO', 'THE', 'SEPARATION'
    ]

    it('has the correct length', () => {
      expect(collections.normalizedWords.length).to.equal(71)
    })

    it('matches expected array', () => {
      expect(collections.normalizedWords).to.deep.equal(normalizedWords)
    })
  })

  describe('unique words', () => {
    const uniqueWords = [
      'WHEN', 'IN', 'THE', 'COURSE', 'OF', 'HUMAN', 'EVENTS', 'IT',
      'BECOMES', 'NECESSARY', 'FOR', 'ONE', 'PEOPLE', 'TO', 'DISSOLVE',
      'POLITICAL', 'BANDS', 'WHICH', 'HAVE', 'CONNECTED', 'THEM',
      'WITH', 'ANOTHER', 'AND', 'ASSUME', 'AMONG', 'POWERS', 'EARTH',
      'SEPARATE', 'EQUAL', 'STATION', 'LAWS', 'NATURE', 'NATURES',
      'GOD', 'ENTITLE', 'A', 'DECENT', 'RESPECT', 'OPINIONS', 'MANKIND',
      'REQUIRES', 'THAT', 'THEY', 'SHOULD', 'DECLARE', 'CAUSES',
      'IMPEL', 'SEPARATION'
    ]

    it('has the correct length', () => {
      expect(collections.uniqueWords.length).to.equal(49)
    })

    it('matches expected array', () => {
      expect(collections.uniqueWords).to.deep.equal(uniqueWords)
    })
  })

  describe('word frequencies', () => {
    const wordFreqsGreaterThan1 = {
      THE: 9,
      OF: 5,
      TO: 5,
      WHICH: 3,
      THEM: 3,
      AND: 3
    }

    it('has the correct length', () => {
      expect(Object.keys(collections.wordFrequencies).length).to.equal(49)
    })

    it('matches keys to expected array', () => {
      const wordFreqs = Object.assign({}, collections.wordFrequencies)
      Object.keys(wordFreqs).forEach((key) => {
        if (wordFreqs[key] < 2) {
          delete wordFreqs[key]
        }
      })
      expect(wordFreqs).to.deep.equal(wordFreqsGreaterThan1)
    })
  })
})
