/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals isPerfectNumber*/

describe("Checking if number is perfect number:", function () {
    it("number '6' is perfect number", function () {
        var testNumber = isPerfectNumber(6);
        expect(testNumber).toBe(true);
    });
});