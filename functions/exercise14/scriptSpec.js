/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getAmountOfCoins*/

describe("Getting  amount of coins ", function () {

    it("in the amount of 46 are 25, 10, 10, 1", function () {
        var amountOfCoins = getAmountOfCoins(46);
        expect(amountOfCoins).toEqual([25, 10, 10, 1]);
    });
  });

