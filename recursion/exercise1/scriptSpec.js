/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals factorialOfNumber*/

describe("Calculate the factorial of a number", (() => {
    it("Factorial of 2 is 2", (() => {
        let factorial = factorialOfNumber(2);
        expect(factorial).toEqual(2);
    }));
    it("Factorial of 5 is 120", (() => {
        let factorial = factorialOfNumber(5);
        expect(factorial).toEqual(120);
    }));
}));