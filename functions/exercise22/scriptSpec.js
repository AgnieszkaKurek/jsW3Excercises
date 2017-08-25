/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals countNumberOccurrencesOfSpecifiedLetterWithinString*/


describe("Count the number of occurrences of the specified letter within the string", (() => {

    it("Within the string there are 2 letters o", (() => {
        let numberOccurrencesLetter = countNumberOccurrencesOfSpecifiedLetterWithinString("wresourcecom", "o");
        expect(numberOccurrencesLetter).toEqual(2);
    }));

    it("Within the string there are 3 letters p", (() => {
        let numberOccurrencesLetter = countNumberOccurrencesOfSpecifiedLetterWithinString("small pink piglets are so pink and soft", "p");
        expect(numberOccurrencesLetter).toEqual(3);
    }));

}));


