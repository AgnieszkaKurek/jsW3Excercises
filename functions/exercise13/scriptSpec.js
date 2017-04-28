/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getFactorsOfPositiveInteger*/


describe("Getting factors of a positive integer", function () {
    it("factors of number 1 are 1", function () {
        var factors = getFactorsOfPositiveInteger(1);
        expect(factors).toEqual([1]);
    });
    it("factors of number X are are 1,2,5,10", function () {
        var factors = getFactorsOfPositiveInteger(10);
        expect(factors).toEqual([1,2,5,10]);
    });
    it(" factors of number 12 are 1,2,3,4,6,12", function () {
        var factors = getFactorsOfPositiveInteger(12);
        expect(factors).toEqual([1,2,3,4,6,12]);
    });
     it("factors of number 25 are are 1,5,25", function () {
        var factors = getFactorsOfPositiveInteger(25);
        expect(factors).toEqual([1,5,25]);
    });
    it("factors of number 100 are 1, 2, 4, 5, 10, 20, 25, 50, 100", function () {
        var factors = getFactorsOfPositiveInteger(100);
        expect(factors).toEqual([1,2,4,5,10,20,25,50,100]);
    });
});
