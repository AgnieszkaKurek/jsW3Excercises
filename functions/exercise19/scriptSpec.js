/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals returnElementsLargerThanNumber*/

describe("Returning array elements larger than a number", function () {
    it("empty array aren't any elements larger than 10", function () {
        var elementsLargerThanANumber = returnElementsLargerThanNumber(10, []);
        expect(elementsLargerThanANumber).toEqual([]);
    });
    it("in the array whit white space [ ]  aren't any elements larger than 10", function () {
        var elementsLargerThanANumber = returnElementsLargerThanNumber(10, []);
        expect(elementsLargerThanANumber).toEqual([]);
    });
    it("white space [ ] is an exception ", function () {
        expect(function () { returnElementsLargerThanNumber(" "); }).toThrow(new Error("Parameter must contain at least one number - not use white space"));
    });
    it("letter is an exception ", function () {
        expect(function () { returnElementsLargerThanNumber("a"); }).toThrow(new Error("Parameter must contain at least one number - not use letters"));
    });
    it("in the array [10] aren't any elements larger than 10", function () {
        var elementsLargerThanANumber = returnElementsLargerThanNumber(10, [10]);
        expect(elementsLargerThanANumber).toEqual([]);
    });

    it("in the array [2, 5, 10] aren't any elements larger than 10 ", function () {
        var elementsLargerThanANumber = returnElementsLargerThanNumber(10, [2, 5, 10]);
        expect(elementsLargerThanANumber).toEqual([]);
    });
    it("in the array [-2, -5, 10, 15] elements larger than 10 are [15]", function () {
        var elementsLargerThanNumber = returnElementsLargerThanNumber(10, [-2, -5, 10, 15]);
        expect(elementsLargerThanNumber).toEqual([15]);
    });
    it("in the array [2, 5, 10, 15, 20, 30] elements larger than 10 are [15, 20, 30]", function () {
        var elementsLargerThanNumber = returnElementsLargerThanNumber(10, [2, 5, 10, 15, 20, 30]);
        expect(elementsLargerThanNumber).toEqual([15, 20, 30]);
    });
    it("in the array [20, 30, 99 ,120] elements larger than 10 are [20, 30, 99 ,120]", function () {
        var elementsLargerThanNumber = returnElementsLargerThanNumber(10, [20, 30, 99 ,120]);
        expect(elementsLargerThanNumber).toEqual([20, 30, 99 ,120]);
    });
    it("in the array [13, 2, 250, 1, 3, 99] elements larger than 10 are [13, 250, 99]", function () {
        var elementsLargerThanNumber = returnElementsLargerThanNumber(10, [13, 2, 250, 1, 3, 99]);
        expect(elementsLargerThanNumber).toEqual([13, 250, 99]);
    });
});
