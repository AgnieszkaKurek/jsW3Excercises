/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getAllCombinationsOfLetters*/

describe("With a letters, located in string", function () {
    it("'dog'can generated 6 Combination", function () {
        var result = getAllCombinationsOfLetters("dog");
        expect(result).toContain("d", "do", "dog", "o","og","g");
    });
     it("'house'can generated 6 Combination", function () {
        var result = getAllCombinationsOfLetters("house");
        expect(result).toContain("h", "ho", "hou", "hous", "house", "ou", "ous", "use", "ouse", "se", "e");
    });
    it("''can generated 6 Combination", function () {
        var result = getAllCombinationsOfLetters("dog");
        expect(result).toContain("");
    });
    it("' 'can generated 6 Combination", function () {
        var result = getAllCombinationsOfLetters("dog");
        expect(result).toContain(" ");
    });
});