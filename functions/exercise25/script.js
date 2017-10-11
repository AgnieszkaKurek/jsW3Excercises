"use strict";

function getLongestSubtrings(substringsWithUniqueCharacters) {
    let longestString = 0;
    let longestSubstringWithUniqueCharacters = [];
    for (let substring of substringsWithUniqueCharacters) {
        if (substring.length > longestString) {
            longestString = substring.length;
            longestSubstringWithUniqueCharacters = [];
            longestSubstringWithUniqueCharacters.push(substring);
        } else if (substring.length === longestString) {
            longestSubstringWithUniqueCharacters.push(substring);
        }
    }
    return longestSubstringWithUniqueCharacters;
}