/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getNumberOfOccurrencesOfLetter*/

describe("Getting  number of occurences of each letters  in specified phrases", function () {
    it("phrase 'a' give  1 letter 'a'", function () {
        var uniqueCharacters = getNumberOfOccurrencesOfLetter("a");
        expect(uniqueCharacters).toEqual("a,1");
    });
    it("phrase 'pig' give  1 letter 'p' ,1 letter 'i' ,1 letter 'g'", function () {
        var uniqueCharacters = getNumberOfOccurrencesOfLetter("pig");
        expect(uniqueCharacters).toEqual("p,1");
        expect(uniqueCharacters).toEqual("i,1");
        expect(uniqueCharacters).toEqual("g,1");
    });
    it("phrase 'pig' give  1 letter 'p' ,1 letter 'i' ,1 letter 'g'", function () {
        var uniqueCharacters = getNumberOfOccurrencesOfLetter("pig");
        expect(uniqueCharacters).toEqual("p,1");
        expect(uniqueCharacters).toEqual("i,1");
        expect(uniqueCharacters).toEqual("g,1");
    });
    it("phrase 'tomorrow' give  1 letter 't' ,3 letters 'o' ,1 letter 'm' ,2 letter 'r' ,1 letter 'w'", function () {
        var uniqueCharacters = getNumberOfOccurrencesOfLetter("tomorrow");
        expect(uniqueCharacters).toEqual("t,1");
        expect(uniqueCharacters).toEqual("o,3");
        expect(uniqueCharacters).toEqual("m,1");
        expect(uniqueCharacters).toEqual("r,2");
        expect(uniqueCharacters).toEqual("w,1");
    });
    it("phrase 'pigs and piglets' give  2 letter 'p' ,2 letters 'i' ,2 letter 'g' ,2 letter 's' ,1 letter 'a' ,1 letter 'n' ,1 letter 'd' ,1 letter 'l' , 1 letter 'e' ,1 letter 't'", function () {
        var uniqueCharacters = getNumberOfOccurrencesOfLetter("pigs and piglets");
        expect(uniqueCharacters).toEqual("p,2");
        expect(uniqueCharacters).toEqual("i,2");
        expect(uniqueCharacters).toEqual("g,2");
        expect(uniqueCharacters).toEqual("s,2");
        expect(uniqueCharacters).toEqual("a,1");
        expect(uniqueCharacters).toEqual("n,1");
        expect(uniqueCharacters).toEqual("d,1");
        expect(uniqueCharacters).toEqual("l,1");
        expect(uniqueCharacters).toEqual("e,1");
        expect(uniqueCharacters).toEqual("t,1");
    });
});