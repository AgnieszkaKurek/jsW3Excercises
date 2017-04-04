/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals findTheLongestWordWithinTheSentence*/

describe("Finding the longest word within the sentence", function () {
    it("empty string '' gives  empty string ''", function () {
        var theLongestWord = findTheLongestWordWithinTheSentence("");
        expect(theLongestWord).toEqual("");
 });
    it("string 'pig' gives  word 'pig'", function () {
        var theLongestWord = findTheLongestWordWithinTheSentence("pig");
        expect(theLongestWord).toEqual("pig");
    });

    it("string 'pig pig' gives  word 'pig'", function () {
        var theLongestWord = findTheLongestWordWithinTheSentence("pig pig");
        expect(theLongestWord).toEqual("pig");
    });

    it("sentence 'pink pig' gives  word 'pink'", function () {
        var theLongestWord = findTheLongestWordWithinTheSentence("pink pig");
        expect(theLongestWord).toEqual("pink");
    });

    it("sentence 'pink piglet' gives  word 'piglet'", function () {
        var theLongestWord = findTheLongestWordWithinTheSentence("pink piglet");
        expect(theLongestWord).toEqual("piglet");
    });
    it("sentence 'web development tutorial' gives  word 'development'", function () {
        var theLongestWord = findTheLongestWordWithinTheSentence("web development tutorial");
        expect(theLongestWord).toEqual("development");
    });
}); 