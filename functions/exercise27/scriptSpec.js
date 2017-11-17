/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getLongestPalindrome*/


describe("Get longest palindrome in a given phrase", (() => {
    
        it("If phrase has uppercase, they are treated as lowercase, so Eye and eye is the same palindrome", (() => {
            let longestPalindrome = getLongestPalindrome("an Eye for an eye");
            expect(longestPalindrome).toEqual(["eye"]);
        }));
        it("If phrase has two different lengths palindrome, ther is one longest palindrome", (() => {
            let longestPalindrome = getLongestPalindrome("you refer to her aibohphobia");
            expect(longestPalindrome).toEqual(["aibohphobia"]);
        }));
        it("If there are three palindroms of the same length in the phrase, there are three longest palindoms", (() => {
            let longestPalindrome = getLongestPalindrome("words kayak, level and radar are palindromes");
            expect(longestPalindrome).toEqual(["kayak", "level", "radar"]);
        }));
    
    
    }));