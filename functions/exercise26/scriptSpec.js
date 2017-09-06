/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getLongestSubstringsWithoutRepeatingCharacters*/

describe(" Find longest substring in a given a string without repeating characters", (() => {

    it("If the string consists of one word 'elephant', then the longest substring without repeating characters is 'lephant'", (() => {
        let substringsWithoutRepeatingCharacters = getLongestSubstringsWithoutRepeatingCharacters("elephant");
        expect(substringsWithoutRepeatingCharacters).toEqual(["lephant"]);
    }));

    it("If the string consists of one word 'abba', then the longest substrings without repeating characters are 'ab' 'ba'", (() => {
        let substringWithoutRepeatingCharacters = getLongestSubstringsWithoutRepeatingCharacters("abba");
        expect(substringWithoutRepeatingCharacters).toEqual(["ab", "ba"]);
    }));
}));