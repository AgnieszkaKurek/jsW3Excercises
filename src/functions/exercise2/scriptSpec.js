import {isPalindrome} from './script';

describe("Checking if word is palindrome: ", function () {
    it("phrase 'tenet' is a palindrome", function () {
        var result = isPalindrome("tenet");
        expect(result).toBeTruthy();
    });
    it("phrase 'dog' isn't a palindrome", function () {
        var result = isPalindrome("dog");
        expect(result).toBeFalsy();
    });
    it("if after palidromem is space 'kayak ', it is a palidrome", function () {
        var result = isPalindrome("kayak ");
        expect(result).toBeTruthy();
    });
    it("if before palindrome is space ' kayak', it is a palidrome", function () {
        var result = isPalindrome(" kayak");
        expect(result).toBeTruthy();
    });
    it("palindrome may contain white spaces, like in phrase 'kayak kayak'", function () {
        var result = isPalindrome("kayak kayak");
        expect(result).toBeTruthy();
    });
    it("phrase is composed of different palindromes separated white spaces, like 'kayak eye', is not a palidrome", function () {
        var result = isPalindrome("kayak eye");
        expect(result).toBeFalsy();
    });
    it("if phrase has uppercase, they are treated as lowercase, so phrase 'eyE' is a palidrome", function () {
        var result = isPalindrome("eyE");
        expect(result).toBeTruthy();
    });
    it("if phrase consists of palidromes separated white spaces asymmetrically, like in phrase 'kayakkayak kayak', is itn't a palidrome ", function () {
        var result = isPalindrome("kayakkayak kayak");
        expect(result).toBeFalsy();
    });
    it("One letter, 'a' is a palindrome", function () {
        var result = isPalindrome("a");
        expect(result).toBeTruthy();
    });
    it("One letter surrounded with white spaces, ' a  ' is a palindrome", function () {
        var result = isPalindrome(" a  ");
        expect(result).toBeTruthy();
    });
    it("no letters, '' is an exception", function () {
        expect(function () { isPalindrome(""); }).toThrow(new Error("Parameter must contain at least one letter - not use white space"));
    });
    it("space, ' ' is an exception", function () {
        expect(function () { isPalindrome(" "); }).toThrow(new Error("Parameter must contain at least one letter - not use white space"));
    });
    it("space, '  ' is an exception", function () {
        expect(function () { isPalindrome("  "); }).toThrow(new Error("Parameter must contain at least one letter - not use white space"));
    });
});