import {factorialOfNumber} from './script';

describe("Calculate the factorial of a number", (() => {
    it("Factorial of -1 is prohibited operation", (() => {
        expect(function () { factorialOfNumber(-1); }).toThrow(new Error("Number must be natural number (including 0)"));
    }));
    it("Factorial of 0 is 1", (() => {
        let factorial = factorialOfNumber(0);
        expect(factorial).toEqual(1);
    }));
    it("Factorial of 1 is 1", (() => {
        let factorial = factorialOfNumber(1);
        expect(factorial).toEqual(1);
    }));
    it("Factorial of 2 is 2", (() => {
        let factorial = factorialOfNumber(2);
        expect(factorial).toEqual(2);
    }));
    it("Factorial of 5 is 120", (() => {
        let factorial = factorialOfNumber(5);
        expect(factorial).toEqual(120);
    }));
    it("Factorial of 1.5 is prohibited operation", (() => {
        expect(function () { factorialOfNumber(1.5); }).toThrow(new Error("Number must be natural number (including 0)"));
    }));
}));