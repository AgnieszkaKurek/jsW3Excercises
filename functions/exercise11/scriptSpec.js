/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getSecondLowestAndSecondGreatestNumbers*/

describe("Getting second lowest and second gratest numbers with array", function () {
    it("numerical sequence [1, 2, 3, 4, 5] get second lowest number 2 and second grates number 4", function () {
        var secondLowestAndGreatestNumbers = getSecondLowestAndSecondGreatestNumbers([1, 2, 3, 4, 5]);
        expect(secondLowestAndGreatestNumbers).toEqual(2, 4);
    });
});