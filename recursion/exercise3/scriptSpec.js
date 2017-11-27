/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getTheIntegersInRange*/  

describe("Get the integers in range two numbers", (() => {
    it("You can not get a result from a range of numbers 3 and 1", (() => {
        expect(() => getTheIntegersInRange(3, 1)).toThrow(new Error("The first number must be less than or equal to the second"));
    }));

    it("It is not possible find  common divisor of 1.2 and 3.5", (() => {
        expect(() => getTheIntegersInRange(1.2, 3.5)).toThrow(new Error("Number of range must be integers"));
    }));

    it("Integers in range for -5 and -2 are -4, -3", (() => {
        let integersInRange = getTheIntegersInRange(-5, -2);
        expect(integersInRange).toEqual([-4, -3]);
    }));

    it("Integers in range for -4 and 2 are -3, -2, -1, 0, 1", (() => {
        let integersInRange = getTheIntegersInRange(-4, 1);
        expect(integersInRange).toEqual([-3, -2, -1, 0, 1]);
    }));

    it("Integers in range for 1 and 3 is 2", (() => {
        let greatestCommonDivisor = getTheIntegersInRange(1, 3);
        expect(greatestCommonDivisor).toEqual([2]);
    }));

    it("Between 3 and 4 is't integer", (() => {
        let greatestCommonDivisor = getTheIntegersInRange(3, 4);
        expect(greatestCommonDivisor).toEqual([]);
    }));

}));