/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getAmountOfCoins*/

describe("Getting  amount of coins ", function () {
    it("in the amount of 5 are 5", function () {
        var amountOfCoins = getAmountOfCoins (5);
        expect(amountOfCoins).toEqual([5]);
    });
    it("in the amount of 45 are 25, 10, 10, 1", function () {
        var amountOfCoins = getAmountOfCoins (45);
        expect(amountOfCoins).toEqual([25, 10, 10, 1]);
    });
});
