/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getStringIdOfRandomChars*/

describe("Getting the a string (specified length) of random characters", function () {
    it("If the specified length is 1, will be return one random character", function () {
        var lengthExpectString = getStringIdOfRandomChars(1);
         expect(lengthExpectString).toEqual(1);
    });
    it("If the specified length is 25, will be return 25 random characters", function () {
        var lengthExpectString = getStringIdOfRandomChars(25);
        expect(lengthExpectString).toEqual(25);
    });
});
