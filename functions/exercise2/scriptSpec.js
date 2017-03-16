/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals isPalindrome*/

describe("Checking if word is palindrome: ", function () {
    it("phrase 'tenet' is a palindrome", function () {
        var isPalindrome = isPalindrome("tenet");
        expect(isPalindrome).toBeTruthy();
    });
    it("phrase 'dog' isn't a palindrome", function () {
        var isPalindrome = isPalindrome("dog");
        expect(isPalindrome).toBeFalsy();
    });
    it("if after palidromem is space 'kayak ', it is palidrome too", function () {
        var isPalindrome = isPalindrome("kayak ");
        expect(isPalindrome).toBeTruthy();
    });
    it("if before palindrome is space ' kayak', it is palidrome too", function () {
        var isPhrasePalindrom = isPalindrome(" kayak");
        expect(isPhrasePalindrom).toBeTruthy();
    });
    it("palindrome may contain white spaces, like in phrase 'kayak kayak'", function () {
        var isPhrasePalindrom = isPalindrome("kayak kayak");
        expect(isPhrasePalindrom).toBeTruthy();
    });
    it("phrase is composed of different palindromes separated white spaces, like 'kayak eye', is not palidrome", function () {
        var isPhrasePalindrome = isPhrasePalindrome("kayak eye");
        expect(isPhrasePalindrome).toBeFalsy();
    });
    it("One letter, 'a' is palindrome", function () {
        var isPhrasePalindrome = isPalindrome("a");
        expect(isPhrasePalindrome).toBeTruthy();
    });
    it("no letters, '' is exception", function () {
        expect(function () { isPalindrome(""); }).toThrow(new Error("Parameter must contain at least one letter - not use white space"));
    });
    it("space, ' ' is exception", function () {
        expect(function () { isPalindrome(" "); }).toThrow(new Error("Parameter must contain at least one letter - not use white space"));
    });
});