'use strict';

const paragraph =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';

const collFuncs = require('../lib/lab.js');

xdescribe('collections lab', () => {

  describe('normalized words', () => {

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

    it('has the correct length', () => {
      expect(collFuncs.getNormalizedWords(paragraph).length).toBe(52);
    });

    it('matches expected array', () => {
      expect(collFuncs.getNormalizedWords(paragraph).sort())
        .toEqual(normalizedWords.sort());
    });

  });

  describe('unique words', () => {

    const sortedUniqueWords = [
      'a', 'america', 'and', 'blessings', 'common',
      'constitution', 'defence', 'do', 'domestic', 'establish',
      'for', 'form', 'general', 'in', 'insure', 'justice',
      'liberty', 'more', 'of', 'ordain', 'order', 'our',
      'ourselves', 'people', 'perfect', 'posterity', 'promote',
      'provide', 'secure', 'states', 'the', 'this', 'to',
      'tranquility', 'union', 'united', 'we', 'welfare',
    ];

    it('has the correct length', () => {
      expect(collFuncs.getUniqueWords(paragraph).length).toBe(38);
    });

    it('matches expected array', () => {
      expect(collFuncs.getUniqueWords(paragraph).sort())
        .toEqual(sortedUniqueWords);
    });

  });

  describe('word count', () => {

    it('has the correct word count', () => {
      expect(collFuncs.wordCount(paragraph)).toBe(52);
    });

    it('has the correct unique word count', () => {
      expect(collFuncs.wordCount(paragraph, true)).toBe(38);
    });

  });

});
