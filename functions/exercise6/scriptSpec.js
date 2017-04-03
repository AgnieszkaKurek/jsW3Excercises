/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals validateNumber*/

describe("Check if parameter consists of number only:", function () {
  it("phrase '1' is correct", function () {
    var result = validateNumber("1");
    expect(result).toEqual(true);
  });
  it("phrase '123' is correct", function () {
    var result = validateNumber("123");
    expect(result).toEqual(true);
  });
  it("white space ' ' is an exception", function () {
    expect(function () { validateNumber(" "); }).toThrow(new Error("The parameter should be consist only of numbers."));
  });
  
  it("number 'a' is an exception", function () {
    expect(function () { validateNumber("a"); }).toThrow(new Error("The parameter should be consist only of numbers."));
  });
  it("number 'one' is an exception", function () {
    expect(function () { validateNumber("one"); }).toThrow(new Error("The parameter should be consist only of numbers."));
  });
  it("number 'one hundred twenty two' is an exception", function () {
    expect(function () { validateNumber("one hundred twenty two"); }).toThrow(new Error("The parameter should be consist only of numbers."));
  });
  it("punctuation mark '!' is an exception", function () {
    expect(function () { validateNumber("!"); }).toThrow(new Error("The parameter should be consist only of numbers."));
  });
});