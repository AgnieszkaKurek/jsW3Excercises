/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals convertWordFirstLetterInUpperCase*/
describe("Converted the first letter of word of the string in upper case:", function () {
  it("empty string '' gives empty string ''", function () {
    var stringInUpperCase = convertWordFirstLetterInUpperCase("");
    expect(stringInUpperCase).toEqual("");
  });
  it("string 'c' gives  string 'C'", function () {
    var stringInUpperCase = convertWordFirstLetterInUpperCase("");
    expect(stringInUpperCase).toEqual("C");
  });
  it("string 'piglet' gives  string 'Piglet'", function () {
    var stringInUpperCase = convertWordFirstLetterInUpperCase("");
    expect(stringInUpperCase).toEqual("Piglet");
  });
   it("string 'the quick brown fox' gives  string 'The Quick Brown Fox'", function () {
    var stringInUpperCase = convertWordFirstLetterInUpperCase("");
    expect(stringInUpperCase).toEqual("The Quick Brown Fox");
  });
}); 