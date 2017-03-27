/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals returnStringAlphabeticalOrder */


describe("Checking if phrase is  returned in alphabetical order: ", function () {
    it("phrase 'b' returned is a 'no'", function () {
        var result = returnStringAlphabeticalOrder("b");
        expect(result).toBeTruthy();
    });
    it("phrase 'on' returned is a 'no'", function () {
        var result = returnStringAlphabeticalOrder("no");
        expect(result).toBeTruthy();
    });
    it("phrase 'pig' returned is a 'gip'", function () {
        var result = returnStringAlphabeticalOrder("gip");
        expect(result).toBeTruthy();
    });
    it("phrase 'definitively' returned is a 'deefiiilntvy'", function () {
        var result = returnStringAlphabeticalOrder("deefiiilntvy");
        expect(result).toBeTruthy();
    });
    
    it("no letters, '' is an exception", function () {
        expect(function () { returnStringAlphabeticalOrder(""); }).toThrow(new Error("Parameter must contain at least two letter - not use white space"));
    });
    it("space, ' ' is an exception", function () {
        expect(function () { returnStringAlphabeticalOrder(" "); }).toThrow(new Error("Parameter must contain at least two letter - not use white space"));
    });
    it("space, '  ' is an exception", function () {
        expect(function () { returnStringAlphabeticalOrder("  "); }).toThrow(new Error("Parameter must contain at least two letter - not use white space"));
    });
    it("space, '12' is an exception", function () {
        expect(function () { returnStringAlphabeticalOrder("12"); }).toThrow(new Error("Parameter must contain at least two letter - not use number"));
    });
    it("space, '!' is an exception", function () {
        expect(function () { returnStringAlphabeticalOrder("!"); }).toThrow(new Error("Parameter must contain at least two letter - not use Assume punctuation"));
    });
});