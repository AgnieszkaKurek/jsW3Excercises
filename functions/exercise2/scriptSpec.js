/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals checkPalindrome*/

describe("Check if word is palindrome", function () {
    it("tenet read from the back is tenet", function () {
        var wordFromTheRear = checkPalindrome("tenet");
        expect(wordFromTheRear).toBe("tenet");
       });
       it("civic read from the back is civic", function () {
        var wordFromTheRear = checkPalindrome("civic");
        expect(wordFromTheRear).toBe("civic");
       });
       it("kayak read from the back is kayak", function () {
        var wordFromTheRear = checkPalindrome("kayak");
        expect(wordFromTheRear).toBe("kayak");
       });
}); 
