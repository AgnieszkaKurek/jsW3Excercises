/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals formatPhrase*/

describe("Check if phrase is consist only of letters", function () {
  it("white space ' ' is an exception", function () {
    expect(function () { formatPhrase(" "); }).toThrow(new Error("The parameter should be consist only of letters - not use white space"));
  });
  it("number '1' is an exception", function () {
    expect(function () { formatPhrase(1); }).toThrow(new Error("The parameter should be consist only of letters - not use a number"));
  });
  it("number '1' is an exception", function () {
    expect(function () { formatPhrase("1"); }).toThrow(new Error("The parameter should be consist only of letters - not use a number"));
  });
  it("punctuation mark '!' is an exception", function () {
    expect(function () { formatPhrase("!"); }).toThrow(new Error("The parameter should be consist only of letters - not use punctuation mark"));
  });
});