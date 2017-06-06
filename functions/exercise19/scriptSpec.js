/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals returnElementsLargerThanNumber*/

describe("Returning array elements larger than a number", function () {
    it("empty array aren't any elements  larger than referenc number", function () {
        var elementsLargerThanANumber = returnElementsLargerThanNumber(10, []);
        expect(elementsLargerThanANumber).toEqual([]);
    });
    
    it("array can have numeric values only - in the array are only items different than numeric value", function () {
        expect(function () { returnElementsLargerThanNumber(10, ["a"]); }).toThrow(new Error("Array can have numeric values only."));
    });

    it("array can have numeric values only - in the array are also items different than numeric value", function () {
        expect(function () { returnElementsLargerThanNumber(10, [12, "ab"]); }).toThrow(new Error("Array can have numeric values only."));
    });

    it("if in the array is only  referenc number, any elements are larger than referenc number ", function () {
        var elementsLargerThanANumber = returnElementsLargerThanNumber(10, [10]);
        expect(elementsLargerThanANumber).toEqual([]);
    });

    it("if in the array there are only numbers smaller than the reference number, all items are not larger", function () {
        var elementsLargerThanANumber = returnElementsLargerThanNumber(10, [2, 5, 10]);
        expect(elementsLargerThanANumber).toEqual([]);
    });

    it("if in the array are negative values (they are also important here)  will be returned items larger than referenc number", function () {
        var elementsLargerThanNumber = returnElementsLargerThanNumber(10, [-2, -5, 10, 15]);
        expect(elementsLargerThanNumber).toEqual([15]);
    });

    it("if in the array there are number smaller, larger  and the same like referens number, will be returned items larger", function () {
        var elementsLargerThanNumber = returnElementsLargerThanNumber(10, [2, 5, 10, 15, 20, 30]);
        expect(elementsLargerThanNumber).toEqual([15, 20, 30]);
    });

    it("if in the array there are only numbers larger than the reference number, all items are larger", function () {
        var elementsLargerThanNumber = returnElementsLargerThanNumber(10, [20, 30, 99 ,120]);
        expect(elementsLargerThanNumber).toEqual([20, 30, 99 ,120]);
    });
    
    it("if array does not to be sorted, thought will be returned items larger than referenc number", function () {
        var elementsLargerThanNumber = returnElementsLargerThanNumber(10, [13, 2, 250, 1, 3, 99]);
        expect(elementsLargerThanNumber).toEqual([13, 250, 99]);
    });
});
