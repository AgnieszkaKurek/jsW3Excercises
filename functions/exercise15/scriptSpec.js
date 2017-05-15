/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals exponentiation*/

describe("Exponentiation of number", function () {
     it("1 raised to the power of 0  is 0", function () {
        var result = exponentiation(1,0);
        expect(result).toEqual(0);
    });
   
  });