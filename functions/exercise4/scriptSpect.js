/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals validatePhrase*/

describe("Check if", function () {
  it("phrase is number ", function () {
    expect(function () { validatePhrase(Number); }).toThrow(new Error("Phrase can't be number"));
  });
});