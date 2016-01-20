'use strict';

const paragraph =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';

const collFuncs = require('../lib/lab.js');

describe('collections lab', function() {

  describe('normalized words', function() {

    const normalizedWords = [
      'a', 'america', 'and', 'and', 'and', 'blessings', 'common',
      'constitution', 'defence', 'do', 'domestic', 'establish',
      'establish', 'for', 'for', 'form', 'general', 'in',
      'insure', 'justice', 'liberty', 'more', 'of', 'of', 'of',
      'ordain', 'order', 'our', 'ourselves', 'people', 'perfect',
      'posterity', 'promote', 'provide', 'secure', 'states',
      'states', 'the', 'the', 'the', 'the', 'the', 'the', 'this',
      'to', 'to', 'tranquility', 'union', 'united', 'united',
      'we', 'welfare',
    ];

    it('has the correct length', function() {
      expect(collFuncs.getNormalizedWords(paragraph).length).toBe(52);
    });

    it('matches expected array', function() {
      expect(collFuncs.getNormalizedWords(paragraph).sort())
        .toEqual(normalizedWords.sort());
    });

  });

  describe('unique words', function() {

    const sortedUniqueWords = [
      'a', 'america', 'and', 'blessings', 'common',
      'constitution', 'defence', 'do', 'domestic', 'establish',
      'for', 'form', 'general', 'in', 'insure', 'justice',
      'liberty', 'more', 'of', 'ordain', 'order', 'our',
      'ourselves', 'people', 'perfect', 'posterity', 'promote',
      'provide', 'secure', 'states', 'the', 'this', 'to',
      'tranquility', 'union', 'united', 'we', 'welfare',
    ];

    it('has the correct length', function() {
      expect(collFuncs.getUniqueWords(paragraph).length).toBe(38);
    });

    it('matches expected array', function() {
      expect(collFuncs.getUniqueWords(paragraph).sort())
        .toEqual(sortedUniqueWords);
    });

  });

  describe('word count', function() {

    it('has the correct word count', function() {
      expect(collFuncs.wordCount(paragraph)).toBe(52);
    });

    it('has the correct unique word count', function() {
      expect(collFuncs.wordCount(paragraph, true)).toBe(38);
    });

  });

});
