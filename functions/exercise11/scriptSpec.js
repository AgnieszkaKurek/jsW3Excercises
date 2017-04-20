/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getSecondLowestAndSecondGreatestNumbers*/

describe("Getting second lowest and second gratest numbers with array", function () {
    it("numerical sequence [1, 2, 3, 4, 5] get second lowest number 2 and second grates number 4", function () {
        var numbers =  getSecondLowestAndSecondGreatestNumbers([1, 2, 3, 4, 5]);
        expect(numbers.SecondSmallest).toEqual(2);
        expect(numbers.SecondLargest).toEqual(4);
    });
   it("numerical sequence [1,9] get second lowest number 9 and second grates number 1", function () {
        var numbers =  getSecondLowestAndSecondGreatestNumbers([1,9]);
        expect(numbers.SecondSmallest).toEqual(9);
        expect(numbers.SecondLargest).toEqual(1);
    });
    it("numerical sequence [13] get second lowest number 13 and second grates number 13", function () {
        var numbers =  getSecondLowestAndSecondGreatestNumbers([13]);
        expect(numbers.SecondSmallest).toEqual(13);
        expect(numbers.SecondLargest).toEqual(13);
    });
});