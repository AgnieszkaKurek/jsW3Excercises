/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getSecondLowestAndSecondGreatestNumbers*/

describe("Getting second lovest and second gratest numbers with array", function () {
    it("[1, 2, 3, 4, 5] is 2 and 4 ", function () {
        var value = getSecondLowestAndSecondGreatestNumbers([1, 2, 3, 4, 5]);
        expect(value).toEqual(2, 4);
    });
});