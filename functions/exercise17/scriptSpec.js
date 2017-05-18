/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getQuantityOfLetters*/

describe("Getting the quantity of occurrences of each letter in a phrase", function () {
    it("phrase 'a' gives one letter", function () {
        var quantityOfLetters = getQuantityOfLetters("a");
        expect(quantityOfLetters).toEqual([
            { letter: "a", quantity: 1 },
        ]);
    });
    it("phrase 'Aa' gives two letter 'a'- if phrase has uppercase, they are treated as lowercase", function () {
        var quantityOfLetters = getQuantityOfLetters("a");
        expect(quantityOfLetters).toEqual([
            { letter: "a", quantity: 2 },
        ]);
    });
    it("in the phrase 'pig' each letter occurs once", function () {
        var quantityOfLetters = getQuantityOfLetters("pig");
        expect(quantityOfLetters).toEqual([
            { letter: "p", quantity: 1 },
            { letter: "i", quantity: 1 },
            { letter: "g", quantity: 1 },
        ]);
    });
    it("in the phrase 'piggip' each letter occurs twice", function () {
        var quantityOfLetters = getQuantityOfLetters("piggip");
        expect(quantityOfLetters).toEqual([
            { letter: "p", quantity: 2 },
            { letter: "i", quantity: 2 },
            { letter: "g", quantity: 2 },
        ]);
    });
    it("in the phrase 'pigs and piglets' letter 'p','i','g','s' occurs twice and  the rest of the letters occurs once - white spaces aren't taken into account", function () {
        var quantityOfLetters = getQuantityOfLetters("pigs and piglets");
        expect(quantityOfLetters).toEqual([
            { letter: "p", quantity: 2 },
            { letter: "i", quantity: 2 },
            { letter: "g", quantity: 2 },
            { letter: "s", quantity: 2 },
            { letter: "a", quantity: 1 },
            { letter: "n", quantity: 1 },
            { letter: "d", quantity: 1 },
            { letter: "l", quantity: 1 },
            { letter: "e", quantity: 1 },
            { letter: "t", quantity: 1 },
        ]);
    });
});