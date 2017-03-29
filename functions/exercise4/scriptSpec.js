/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals formatPhrase*/

describe("Check if", function () {
  it("phrase is number ", function () {
    expect(function () { formatPhrase(" "); }).toThrow(new Error("The parameter should be consist only of letters - not use white space"));
  });
  it("phrase is number ", function () {
    expect(function () { formatPhrase(1); }).toThrow(new Error("The parameter should be consist only of letters - not use a numbers"));
  });
  it("phrase is number ", function () {
    expect(function () { formatPhrase("1"); }).toThrow(new Error("The parameter should be consist only of letters - not use a numbers"));
  });
  it("phrase is number ", function () {
    expect(function () { formatPhrase("!"); }).toThrow(new Error("The parameter should be consist only of letters - not use punctuation marks"));
  });
});