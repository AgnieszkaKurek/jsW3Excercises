/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getElementLargerThanANumber*/

describe("Getting elements larger than a number.", function () {
    it("in numbers array 2, 5, 10, 15, 20, 30 larger than 10 are 15, 20, 30  ", function () {
        var elementLargerThanANumber = getElementLargerThanANumber(10);
        expect(elementLargerThanANumber).toEqual([15, 20, 30]);
    });
});
