/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals isPerfectNumber*/

describe("Checking if number is perfect number:", function () {
    it("number 0 is not perfect number", function () {
        var isPerfect = isPerfectNumber(0);
        expect(isPerfect).toBe(false);
    });
    it("number 1 is not perfect number", function () {
        var isPerfect = isPerfectNumber(1);
        expect(isPerfect).toBe(false);
    });
    it("number 6 is perfect number", function () {
        var isPerfect = isPerfectNumber(6);
        expect(isPerfect).toBe(true);
    });
    it("number 20 is not perfect number", function () {
        var isPerfect = isPerfectNumber(20);
        expect(isPerfect).toBe(false);
    });
    it("number 28 is perfect number", function () {
        var isPerfect = isPerfectNumber(28);
        expect(isPerfect).toBe(true);
    });
    it("number 496 is perfect number", function () {
        var isPerfect = isPerfectNumber(496);
        expect(isPerfect).toBe(true);
    }); 
    it("number 999 is not perfect number", function () {
        var isPerfect = isPerfectNumber(999);
        expect(isPerfect).toBe(false);
    });
    it("number 7562 is not perfect number", function () {
        var isPerfect = isPerfectNumber(7562);
        expect(isPerfect).toBe(false);
    });
    it("number 8128 is perfect number", function () {
        var isPerfect = isPerfectNumber(8128);
        expect(isPerfect).toBe(true);
    });
});