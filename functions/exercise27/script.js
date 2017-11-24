"use strict";

function getLongestPalindromeInPhrase(phrase) {
    let words = splitIntoWords(phrase);
    let palindromes = getAllPalindromes(words);
    let longestPalindromes = getLongestPalindromes(palindromes);
    return longestPalindromes;
}

function splitIntoWords(phrase) {
    return phrase.split(/[ ,]+/);
}

function getAllPalindromes(words) {
    return words.filter(word => checkIsPhraseConsistOfLetterOnly(word) && wordIsPalindrome(word));
}

function checkIsPhraseConsistOfLetterOnly(phrase) {
    return /^[a-zA-Z]+$/g.test(phrase);
}

function wordIsPalindrome(word) {
    return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
}

function getLongestPalindromes(palindromes) {
    let longestPalindrome = 0;
    let longestPalindromes = [];
    for (let palindrome of palindromes) {
        if (palindrome.length > longestPalindrome) {
            longestPalindrome = palindrome.length;
            longestPalindromes = [palindrome];
        } else if (palindrome.length === longestPalindrome) {
            longestPalindromes.push(palindrome);
        }
    }
    return longestPalindromes;
}