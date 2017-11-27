/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals findGreatestCommonDivisor*/

describe("Find the greatest common divisor of two positive numbers", (() => {
    it("It is not possible find  common divisor of 0 and 0", (() => {
        expect(() => findGreatestCommonDivisor(0, 0)).toThrow(new Error("Both numbers must be positive integers"));
    }));

    it("It is not possible find  common divisor of 0 and 7", (() => {
        expect(() => findGreatestCommonDivisor(0, 7)).toThrow(new Error("Both numbers must be positive integers"));
    }));

    it("It is not possible find  common divisor of 4 and 1.5", (() => {
        expect(() => findGreatestCommonDivisor(4, 1.5)).toThrow(new Error("Both numbers must be positive integers"));
    }));

    it("It is not possible find  common divisor of -1 and 3", (() => {
        expect(() => findGreatestCommonDivisor(-1, 3)).toThrow(new Error("Both numbers must be positive integers"));
    }));

    it("Greatest common divisor of 1 and 5 is 1", (() => {
        let greatestCommonDivisor = findGreatestCommonDivisor(5, 1);
        expect(greatestCommonDivisor).toEqual(1);
    }));

    it("Greatest common divisor of 25 and 10 is 5", (() => {
        let greatestCommonDivisor = findGreatestCommonDivisor(25, 10);
        expect(greatestCommonDivisor).toEqual(5);
    }));
}));
