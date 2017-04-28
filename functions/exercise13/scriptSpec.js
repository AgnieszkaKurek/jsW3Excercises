/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getFactorsOfPositiveInteger*/


describe("Getting factors of a positive integer", function () {
    it("factor numbers 1 is 1", function () {
        var factors = getFactorsOfPositiveInteger(1);
        expect(factors).toEqual(1);
    });
    it("factors numbers 10 are 1,2,5,10", function () {
        var factors = getFactorsOfPositiveInteger(10);
        expect(factors).toEqual([1,2,5,10]);
    });
});
