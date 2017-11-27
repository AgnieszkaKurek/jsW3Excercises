import { getSecondLowestAndSecondGreatestNumbers } from './script';

describe("Getting second lowest and second gratest numbers with array", function () {
    it("numerical sequence [1, 2, 3, 4, 5] get second lowest number 2 and second grates number 4", function () {
        var numbers = getSecondLowestAndSecondGreatestNumbers([1, 2, 3, 4, 5]);
        expect(numbers.secondSmallest).toEqual(2);
        expect(numbers.secondLargest).toEqual(4);
    });
    it("numerical sequence [1,9] get second lowest number 9 and second grates number 1", function () {
        var numbers = getSecondLowestAndSecondGreatestNumbers([1, 9]);
        expect(numbers.secondSmallest).toEqual(9);
        expect(numbers.secondLargest).toEqual(1);
    });
    it("numerical sequence [9,1] get second lowest number 9 and second grates number 1 - order of items does not matter", function () {
        var numbers = getSecondLowestAndSecondGreatestNumbers([9, 1]);
        expect(numbers.secondSmallest).toEqual(9);
        expect(numbers.secondLargest).toEqual(1);
    });
    it("numerical sequence [13] second lowest number is undefined  and second grates undefined", function () {
        var numbers = getSecondLowestAndSecondGreatestNumbers([13]);
        expect(numbers.secondSmallest).toEqual(undefined);
        expect(numbers.secondLargest).toEqual(undefined);
    });
    it("numerical sequence [4,1,2,5,3] get second lowest number 4 and second grates number 2 - sorting does not matter", function () {
        var numbers = getSecondLowestAndSecondGreatestNumbers([4, 1, 2, 5, 3]);
        expect(numbers.secondSmallest).toEqual(2);
        expect(numbers.secondLargest).toEqual(4);
    });
    it("numerical sequence [1,1,2,3,3] get second lowest number 2 and second grates number 2", function () {
        var numbers = getSecondLowestAndSecondGreatestNumbers([1, 1, 2, 3, 3]);
        expect(numbers.secondSmallest).toEqual(2);
        expect(numbers.secondLargest).toEqual(2);
    });
});