/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals validateAsPhraseConsistsOfLettersOnly*/

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