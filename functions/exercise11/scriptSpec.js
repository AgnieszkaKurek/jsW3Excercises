/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getSecondLowestAndSecondGreatestNumbers*/

describe("Getting second lowest and second gratest numbers with array", function () {
    it("numerical sequence [1, 2, 3, 4, 5] get second lowest number 2 and second grates number 4", function () {
        var number =  getSecondLowestAndSecondGreatestNumbers([1, 2, 3, 4, 5]);
        expect(number.SecondSmallest).toEqual(2);
        expect(number.SecondLargest).toEqual(4);
    });
});