/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals isPalindrome*/

describe("Checking if word is palindrome: ", function () {
    it("word tenet is a palindrome", function () {
        var resultEntry = isPalindrome("tenet");
        expect(resultEntry).toBeTruthy();
    });
    it("word dog is a palindrome", function () {
        var resultEntry = isPalindrome("dog");
        expect(resultEntry).toBeFalsy();
    });
     it("word kayak is a palindrome", function () {
        var resultEntry = isPalindrome("kayak ");
        expect(resultEntry).toBeTruthy();
    });
    it("word kayak is a palindrome", function () {
        var resultEntry = isPalindrome(" kayak");
        expect(resultEntry).toBeTruthy();
    });
    it("string kayak kayak is a palindrome", function () {
        var resultEntry = isPalindrome("kayak kayak");
        expect(resultEntry).toBeTruthy();
    });

    it("word dog is a palindrome", function () {
        var resultEntry = isPalindrome("dog");
        expect(resultEntry).toBeFalsy();
    });
    it("that a is a palindrome", function () {
        var resutEntry = isPalindrome("a");
        expect(resutEntry).toBeTruthy();
    });
    it("is not palindrome", function () {
       expect(function() {isPalindrome(""); } ).toThrow("Palindrome must contain at least one letter");
        expect(function() {isPalindrome(" "); } ).toThrow("Palindrome must contain at least one letter");
    });
    
});
