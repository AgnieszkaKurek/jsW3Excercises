/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals calculateFactorialOfNumber*/

describe("Calculate the factorial of a number", (() => {
    it("Factorial of 2 is 2", (() => {
        let factorialOfNumber = calculateFactorialOfNumber(2);
        expect(factorialOfNumber).toEqual(2);
    }));
    it("Factorial of 5 is 120", (() => {
        let factorialOfNumber = calculateFactorialOfNumber(5);
        expect(factorialOfNumber).toEqual(120);
    }));
}));