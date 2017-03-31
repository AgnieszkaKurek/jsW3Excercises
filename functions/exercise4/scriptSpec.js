/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals validateAsPhraseConsistsOfLettersOnly*/
/*globals sortLettersInThePhrase*/


describe("Check if phrase consists of letters only:", function () {
  it("phrase 'pig' is correct", function () {
    var result = validateAsPhraseConsistsOfLettersOnly("pig");
    expect(result).toEqual(true);
  });
  it("white space ' ' is an exception", function () {
    expect(function () { validateAsPhraseConsistsOfLettersOnly(" "); }).toThrow(new Error("The parameter should be consist only of letters."));
  });
  it("number 1 is an exception", function () {
    expect(function () { validateAsPhraseConsistsOfLettersOnly(1); }).toThrow(new Error("The parameter should be consist only of letters."));
  });
  it("number '1' is an exception", function () {
    expect(function () { validateAsPhraseConsistsOfLettersOnly("1"); }).toThrow(new Error("The parameter should be consist only of letters."));
  });
  it("punctuation mark '!' is an exception", function () {
    expect(function () { validateAsPhraseConsistsOfLettersOnly("!"); }).toThrow(new Error("The parameter should be consist only of letters."));
  });
});

describe("Sorted alphabetical order:", function () {
  it("empty phrase '' gives empty phrase ''", function () {
    var phraseInAlphabeticalOrder = sortLettersInThePhrase("");
    expect(phraseInAlphabeticalOrder).toEqual("");
  });
  it(" phrase 'd' gives phrase 'd'", function () {
    var phraseInAlphabeticalOrder = sortLettersInThePhrase("d");
    expect(phraseInAlphabeticalOrder).toEqual("d");
  });
  it("phrase 'pig' gives 'gip'", function () {
    var phraseInAlphabeticalOrder = sortLettersInThePhrase("pig");
    expect(phraseInAlphabeticalOrder).toEqual("gip");
  });
  it(" phrase 'interview' gives phrase 'eeiinrtvw'", function () {
    var phraseIsAlphabeticalOrder = sortLettersInThePhrase("interview");
    expect(phraseIsAlphabeticalOrder).toEqual("eeiinrtvw");
  });
  it("number '1' is an exception", function () {
    expect(function () { sortLettersInThePhrase("1"); }).toThrow(new Error("The parameter should be consist only of letters."));
  });
  it("white space ' ' is an exception", function () {
    expect(function () { sortLettersInThePhrase(" "); }).toThrow(new Error("The parameter should be consist only of letters."));
  });
  it("punctuation mark '!' is an exception", function () {
    expect(function () { sortLettersInThePhrase("!"); }).toThrow(new Error("The parameter should be consist only of letters."));
  });
}); 