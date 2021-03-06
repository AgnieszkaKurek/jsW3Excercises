import { convertWordFirstLetterIntoUpperCase } from './script';

describe("Converting the first letter of each word in the string into upper case", function () {
  it("empty string '' gives empty string ''", function () {
    var stringInUpperCase = convertWordFirstLetterIntoUpperCase("");
    expect(stringInUpperCase).toEqual("");
  });
  it("string 'c' gives  string 'C'", function () {
    var stringInUpperCase = convertWordFirstLetterIntoUpperCase("c");
    expect(stringInUpperCase).toEqual("C");
  });
  it("string 'piglet' gives  string 'Piglet'", function () {
    var stringInUpperCase = convertWordFirstLetterIntoUpperCase("piglet");
    expect(stringInUpperCase).toEqual("Piglet");
  });
  it("string 'pig  pig' gives  string 'Pig  Pig'", function () {
    var stringInUpperCase = convertWordFirstLetterIntoUpperCase("pig pig");
    expect(stringInUpperCase).toEqual("Pig Pig");
  });

  it("string 'the quick brown fox' gives  string 'The Quick Brown Fox'", function () {
    var stringInUpperCase = convertWordFirstLetterIntoUpperCase("the quick brown fox");
    expect(stringInUpperCase).toEqual("The Quick Brown Fox");
  });
}); 