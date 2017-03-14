/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals checkPalindrome*/

describe("Checking if word is palindrome: ", function(){
    it("word tenet is a palindrome", function(){
        var wordFromTheRear = checkPalindrome("tenet");
        expect(wordFromTheRear).toBeTruthy();
    });
    it("word kayak is a palindrome", function(){
        var wordFromTheRear = checkPalindrome("civic");
        expect(wordFromTheRear).toBeTruthy();
    });    
    it("word dog is a palindrome", function(){
        var wordFromTheRear = checkPalindrome("dog");
        expect(wordFromTheRear).toBeFalsy();
    });     
    it("that a is a palindrome", function(){
        var wordFromTheRear = checkPalindrome("a");
        expect(wordFromTheRear).toBeFalsy();
    });     
    it("that ' ' is a palindrome", function(){
        var wordFromTheRear = checkPalindrome(" ");
        expect(wordFromTheRear).toBeFalsy();
    });     
});
