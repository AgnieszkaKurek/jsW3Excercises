/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getNumberOfOccurrencesOfLetters*/

describe("Getting the number of occurrences of each letters in specified phrase", function () {
    it("phrase 'a' give one letter 'a'", function () {
        var numbersOfLetters = getNumberOfOccurrencesOfLetters(["a"]);
        expect(numbersOfLetters.letter.a).toEqual([1]);
    });
});
/// object
/// var numbersOfLetters = {
///    "letter": "a",
///    "quantity": 1
/// };
