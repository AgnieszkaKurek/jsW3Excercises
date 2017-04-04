/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals countTheNumberOfVowels*/ 

describe("Counting the number of vowels within the string", function () {
    it("in string 'pig' is 1 vowel " , function () {
        var numberOfVowels = countTheNumberOfVowels("pig");
        expect(numberOfVowels).toEqual("1");
 });
    it("in string 'hippopotamus' is 5 vowels " , function () {
        var numberOfVowels = countTheNumberOfVowels("hippopotamus");
        expect(numberOfVowels).toEqual("5");
 });
 it("in a sentence 'a herd of pink piglets' is 6 vowels " , function () {
        var numberOfVowels = countTheNumberOfVowels("a herd of pink piglets");
        expect(numberOfVowels).toEqual("6");
 });
 it("in a sentence 'you are the light at the end of the tunnel, the beacon fire in the dark' is 24 vowels " , function () {
        var numberOfVowels = countTheNumberOfVowels("you are the light at the end of the tunnel, the beacon fire in the dark");
        expect(numberOfVowels).toEqual("24");
 });
    
}); 