/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getStringIdOfRandomChars*/

describe("Getting the a string id (specified length) of random characters", function () {
    it("If the specified length is 1, will be return one random character", function () {
        var randomCharacters = getStringIdOfRandomChars(1);
        expect(randomCharacters).toEqual([
            { characters: Text, stringLenght: 1 },
        ]);
    });
});