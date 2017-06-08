/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getStringIdOfRandomChars*/

describe("Getting the a string id (specified length) of random characters", function () {
    it("If the specified length is 1, will be return one random character", function () {
        var stringIdOfRandomChars = getStringIdOfRandomChars();
        expect(stringIdOfRandomChars).toEqual(String,1);
    });
    it("If the specified length is 25, will be return 25 random characters", function () {
        var stringIdOfRandomChars = getStringIdOfRandomChars(25);
        expect(stringIdOfRandomChars).toEqual(String,25);
    });
});