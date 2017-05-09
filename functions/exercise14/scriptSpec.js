/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getAmountOfCoins*/

describe("Getting  amount of coins ", function () {
    it("in the amount of 5 is 5", function () {
        var amountOfCoins = getAmountOfCoins(5);
        expect(amountOfCoins).toEqual([5]);
    });
     it("in the amount of 30 are 25, 5", function () {
        var amountOfCoins = getAmountOfCoins(30);
        expect(amountOfCoins).toEqual([25, 5]);
    });
    it("in the amount of 46 are 25, 10, 10, 1", function () {
        var amountOfCoins = getAmountOfCoins(46);
        expect(amountOfCoins).toEqual([25, 10, 10, 1]);
    });
    it("in the amount of 101 are 25, 25, 25, 25, 1", function () {
        var amountOfCoins = getAmountOfCoins(101);
        expect(amountOfCoins).toEqual([25, 25, 25, 25, 1]);
    });
});
