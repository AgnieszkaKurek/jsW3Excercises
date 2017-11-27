import {getLongestPalindromeInPhrase} from './script';

describe("Get longest palindrome in a given phrase", (() => {
    it("Empty phrase gives an empty palindrome", (() => {
        let longestPalindrome = getLongestPalindromeInPhrase("");
        expect(longestPalindrome).toEqual([]);
    }));

    it("If we have multiple white spaces between words we ignore them", (() => {
        let longestPalindrome = getLongestPalindromeInPhrase("  eye aa abc");
        expect(longestPalindrome).toEqual(["eye"]);
    }));

    it("One letter is a palindrome", (() => {
        let longestPalindrome = getLongestPalindromeInPhrase("a");
        expect(longestPalindrome).toEqual(["a"]);
    }));

    it("If we have one palidrome, we return it as a single result", (() => {
        let longestPalindrome = getLongestPalindromeInPhrase("aibohphobia");
        expect(longestPalindrome).toEqual(["aibohphobia"]);
    }));

    it("If we have several palindromes with the same length, then we return all of them", (() => {
        let longestPalindrome = getLongestPalindromeInPhrase("aba abc eye");
        expect(longestPalindrome).toEqual(["aba", "eye"]);
    }));

    it("If we have same palindromes being repeated we return all instances of this palindrome", (() => {
        let longestPalindrome = getLongestPalindromeInPhrase("eye abc eye");
        expect(longestPalindrome).toEqual(["eye", "eye"]);
    }));

    it("Palindrome verification is case insensitive", (() => {
        let longestPalindrome = getLongestPalindromeInPhrase("an Eye for an eye");
        expect(longestPalindrome).toEqual(["Eye", "eye"]);
    }));

    it("If phrase has two different lengths palindrome, ther is one longest palindrome", (() => {
        let longestPalindrome = getLongestPalindromeInPhrase("you refer to her aibohphobia");
        expect(longestPalindrome).toEqual(["aibohphobia"]);
    }));

    it("If there are three palindroms of the same length in the phrase, there are three longest palindoms", (() => {
        let longestPalindrome = getLongestPalindromeInPhrase("words kayak, level and radar are palindromes");
        expect(longestPalindrome).toEqual(["kayak", "level", "radar"]);
    }));

    it("We treat as palindromes phrases with letters only", (() => {
        let longestPalindrome = getLongestPalindromeInPhrase("a1a");
        expect(longestPalindrome).toEqual([]);
    }));

}));