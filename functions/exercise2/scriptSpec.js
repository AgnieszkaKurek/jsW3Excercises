/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals isPalindrome*/

describe("Checking if word is palindrome: ", function () {
    it("phrase 'tenet' is a palindrome", function () {
        var isPhreasePalindrome = isPalindrome("tenet");
        expect(isPhreasePalindrome).toBeTruthy();
    });
    it("phrase 'dog' isn't a palindrome", function () {
        var isPhrasePalindrome = isPalindrome("dog");
        expect(isPhrasePalindrome).toBeFalsy();
    });
    it("if after palidromem is space 'kayak ', it isn't palidrome", function () {
        var isPhrasePalindrome = isPalindrome("kayak ");
        expect(isPhrasePalindrome).toBeFalsy();
    });
    it("if before palindrome is space ' kayak', it isn't palidrome", function () {
        var isPhrasePalindrom = isPalindrome(" kayak");
        expect(isPhrasePalindrom).toBeFalsy();
    });
    it("palindrome may contain white spaces, like in phrase 'kayak kayak'", function () {
        var isPhrasePalindrom = isPalindrome("kayak kayak");
        expect(isPhrasePalindrom).toBeTruthy();
    });
    it("phrase is composed of different palindromes separated white spaces, like 'kayak eye', is not palidrome", function () {
        var isPhrasePalindrome = isPalindrome("kayak eye");
        expect(isPhrasePalindrome).toBeFalsy();
    });
    it("if phrase has uppercase, they are treated as lowercase, so phrase 'eyE' is a palidrome", function () {
        var isPhrasePalindrome = isPalindrome("eyE");
        expect(isPhrasePalindrome).toBeTruthy();
       }); 
       it("if phrase consists of palidromes separated white spaces asymmetrically, like in phrase 'kayakkayak kayak', is itn't palidrome ", function () {
        var isPhrasePalindrome = isPalindrome("kayakkayak kayak");
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