'use strict';

const collections = require('../lib/collections.js');

describe('collections', function() {

  describe('normalized words', function() {

    const normalizedWords = [
      'when', 'in', 'the', 'course', 'of', 'human', 'events', 'it',
      'becomes', 'necessary', 'for', 'one', 'people', 'to', 'dissolve',
      'the', 'political', 'bands', 'which', 'have', 'connected', 'them',
      'with', 'another', 'and', 'to', 'assume', 'among', 'the',
      'powers', 'of', 'the', 'earth', 'the', 'separate', 'and', 'equal',
      'station', 'to', 'which', 'the', 'laws', 'of', 'nature', 'and',
      'of', 'nature\'s', 'god', 'entitle', 'them', 'a', 'decent',
      'respect', 'to', 'the', 'opinions', 'of', 'mankind', 'requires',
      'that', 'they', 'should', 'declare', 'the', 'causes', 'which',
      'impel', 'them', 'to', 'the', 'separation',
    ];

    it('has the correct length', function() {
      expect(collections.normalizedWords.length).toBe(71);
    });

    it('matches expected array', function() {
      expect(collections.normalizedWords).toEqual(normalizedWords);
    });

  });

  describe('unique words', function() {

    const uniqueWords = [
      'when', 'in', 'the', 'course', 'of', 'human', 'events', 'it',
      'becomes', 'necessary', 'for', 'one', 'people', 'to', 'dissolve',
      'political', 'bands', 'which', 'have', 'connected', 'them',
      'with', 'another', 'and', 'assume', 'among', 'powers', 'earth',
      'separate', 'equal', 'station', 'laws', 'nature', 'nature\'s',
      'god', 'entitle', 'a', 'decent', 'respect', 'opinions', 'mankind',
      'requires', 'that', 'they', 'should', 'declare', 'causes',
      'impel', 'separation',
    ];

    it('has the correct length', function() {
      expect(collections.uniqueWords.length).toBe(49);
    });

    it('matches expected array', function() {
      expect(collections.uniqueWords).toEqual(uniqueWords);
    });

  });

  describe('word frequencies', function() {

    const wordFrequencies = {
      when: 1,
      the: 9,
      course: 1,
      of: 5,
      human: 1,
      events: 1,
      it: 1,
      becomes: 1,
      necessary: 1,
      for: 1,
      one: 1,
      people: 1,
      to: 5,
      dissolve: 1,
      political: 1,
      bands: 1,
      which: 3,
      have: 1,
      connected: 1,
      them: 3,
      with: 1,
      another: 1,
      and: 3,
      assume: 1,
      among: 1,
      powers: 1,
      earth: 1,
      separate: 1,
      equal: 1,
      station: 1,
      laws: 1,
      nature: 1,
      'nature\'s': 1,
      god: 1,
      entitle: 1,
      a: 1,
      decent: 1,
      respect: 1,
      opinions: 1,
      mankind: 1,
      requires: 1,
      that: 1,
      they: 1,
      should: 1,
      declare: 1,
      causes: 1,
      impel: 1,
      separation: 1,
    };

    wordFrequencies.in = 1; // js-beautify hack

    it('has the correct length', function() {
      expect(Object.keys(collections.wordFrequencies).length).toBe(49);
    });

    it('matches keys to expected array', function() {
      expect(collections.wordFrequencies).toEqual(wordFrequencies);
    });

  });

});
