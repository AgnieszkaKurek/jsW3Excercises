/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals isPalindrome*/

describe("Checking if word is palindrome: ", function () {
    it("word 'tenet' is a palindrome", function () {
        var palindrome = isPalindrome("tenet");
        expect(palindrome).toBeTruthy();
    });
    it("word dog isn't a palindrome", function () {
        var palindrome = isPalindrome("dog");
        expect(palindrome).toBeFalsy();
    });
    it("if after palidromem is space 'kayak ', it is palidrome too", function () {
        var palindrome = isPalindrome("kayak ");
        expect(palindrome).toBeTruthy();
    });
    it("if before palindrome is space ' kayak', it is palidrome too", function () {
        var palindrome = isPalindrome(" kayak");
        expect(palindrome).toBeTruthy();
    });
    it("palindrome may contain white spaces, like in phrase 'kayak kayak'", function () {
        var palindrome = isPalindrome("kayak kayak");
        expect(palindrome).toBeTruthy();
    });
    it("phrase is composed of different palindromes separated white spaces, like 'kayak eye', is not palidrome", function () {
        var palindrome = isPalindrome("kayak eye");
        expect(palindrome).toBeFalsy();
    });
    it("One letter, 'a' is palindrome", function () {
        var palindrome = isPalindrome("a");
        expect(palindrome).toBeTruthy();
    });
    it("no letters, '' is exception", function () {
        expect(function () { isPalindrome(""); }).toThrow("Parameter must contain at least one letter - not use white space");
    });
    it("space, ' ' is exception", function () {
        expect(function () { isPalindrome(" "); }).toThrow("Parameter must contain at least one letter - not use white space");
    });
});