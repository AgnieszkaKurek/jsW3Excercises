/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals countNumberOccurrencesOfSpecifiedLetterWithinString*/


describe("Count the number of occurrences of the specified letter within the string", (() => {

    it("In the string the given letter occurs x times", (() => {
        let numberOccurrencesLetter = countNumberOccurrencesOfSpecifiedLetterWithinString("wresourcecom", "o");
        expect(numberOccurrencesLetter).toEqual(2);
    }));

    it("In the string the given letter occurs x times", (() => {
        let numberOccurrencesLetter = countNumberOccurrencesOfSpecifiedLetterWithinString("I like fruit waffles and whipped cream", "f");
        expect(numberOccurrencesLetter).toEqual(3);
    }));

}));


