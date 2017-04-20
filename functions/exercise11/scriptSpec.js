/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getSecondLowestAndSecondGreatestNumbers*/

describe("Getting second lowest and second gratest numbers with array", function () {
    it("numerical sequence [1, 2, 3, 4, 5] get second lowest number 2 and second grates number 4", function () {
        var secondLowestNumbers = getSecondLowestAndSecondGreatestNumbers([1, 2, 3, 4, 5]);
        var secondGreatestNumbers = getSecondLowestAndSecondGreatestNumbers([1, 2, 3, 4, 5]);
        expect(secondLowestNumbers).toEqual(2);
        expect(secondGreatestNumbers).toEqual(4);
    });
     it("numerical sequence [2, 4, 6, 8] get second lowest number 2 and second grates number 4", function () {
       var secondLowestNumbers = getSecondLowestAndSecondGreatestNumbers([2, 4, 6, 8]);
        var secondGreatestNumbers = getSecondLowestAndSecondGreatestNumbers([2, 4, 6, 8]);
        expect(secondLowestNumbers).toEqual(4);
        expect(secondGreatestNumbers).toEqual(8);
    });
     it("numerical sequence [1,2] get second lowest number 2 and second grates number 4", function () {
       var secondLowestNumbers = getSecondLowestAndSecondGreatestNumbers([1, 2]);
        var secondGreatestNumbers = getSecondLowestAndSecondGreatestNumbers([1, 2]);
        expect(secondLowestNumbers).toEqual(2);
        expect(secondGreatestNumbers).toEqual(1);
});