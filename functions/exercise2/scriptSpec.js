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
    it("if after palidromem is spacia 'kayak ', it is palidrom too", function () {
        var palindrome = isPalindrome("kayak ");
        expect(palindrome).toBeTruthy();
    });
    it("if before palidromem is spacia ' kayak', it is palidrom too", function () {
        var palindrome = isPalindrome(" kayak");
        expect(palindrome).toBeTruthy();
    });
    it("if between two palindromes is spacia 'kayak kayak', it is a palindrome too", function () {
        var palindrome = isPalindrome("kayak kayak");
        expect(palindrome).toBeTruthy();
    });
    it("One letter, 'a' is palindrome", function () {
        var palindrome = isPalindrome("a");
        expect(palindrome).toBeTruthy();
    });
    it("no letters, '' is not a palindrome", function () {
        expect(function () { isPalindrome(""); }).toThrow("Parameter must contain at least one letter");
    });
    it("space, ' ' is not a palidrom", function () {
        expect(function () { isPalindrome(" "); }).toThrow("Parameter must contain at least one letter");
    });
});