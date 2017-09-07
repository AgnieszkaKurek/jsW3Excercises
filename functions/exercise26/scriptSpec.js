/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getLongestSubstringsWithoutRepeatingCharacters*/

describe(" Find longest substring in a given a string without repeating characters", (() => {

    it("If the string consists of one word 'elephant', then the longest substring without repeating characters is 'lephant'", (() => {
        let substringsWithoutRepeatingCharacters = getLongestSubstringsWithoutRepeatingCharacters("elephant");
        expect(substringsWithoutRepeatingCharacters).toEqual(["lephant"]);
    }));

    it("If the string consists of one word 'abba', then the longest substrings without repeating characters are 'ab' 'ba'", (() => {
        let substringsWithoutRepeatingCharacters = getLongestSubstringsWithoutRepeatingCharacters("abba");
        expect(substringsWithoutRepeatingCharacters).toEqual(["ab", "ba"]);
    }));
    it("If the string consists of lowercase and uppercase'aA', then the two  longest substrings without repeating characters are 'a' 'A'", (() => {
        let substringsWithoutRepeatingCharacters = getLongestSubstringsWithoutRepeatingCharacters("aA");
        expect(substringsWithoutRepeatingCharacters).toEqual(["a", "A"]);
    }));

    it("If string is empty (does not contain any characters), then are not  any longest substrings", (() => {
        let substringsWithoutRepeatingCharacters = getLongestSubstringsWithoutRepeatingCharacters("");
        expect(substringsWithoutRepeatingCharacters).toEqual([]);
    }));
}));