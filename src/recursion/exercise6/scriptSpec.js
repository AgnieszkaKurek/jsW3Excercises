import {
    getFirstFibonacciNumbersWithWhile,
    getFirstFibonacciNumbersWithSelfCall
} from './script';

describe("Get the first Fibonacci numbers using function with while", (() => {
    it("Number must be greater than 1", (() => {
        expect(() => getFirstFibonacciNumbersWithWhile(1)).toThrow(new Error("Number must be greater than 1"));
    }));

    it("If Fibonacci numbers contain 2 elements first n are 0, 1", (() => {
        let firstFibonacciNumbers = getFirstFibonacciNumbersWithWhile(2);
        expect(firstFibonacciNumbers).toEqual([0, 1]);
    }));

    it("If Fibonacci numbers contain 5 elements first n are 0, 1, 1, 2, 3", (() => {
        let firstFibonacciNumbers = getFirstFibonacciNumbersWithWhile(5);
        expect(firstFibonacciNumbers).toEqual([0, 1, 1, 2, 3]);
    }));

    it("If Fibonacci numbers contain 7 elements first n are 0, 1, 1, 2, 3, 5, 8", (() => {
        let firstFibonacciNumbers = getFirstFibonacciNumbersWithWhile(7);
        expect(firstFibonacciNumbers).toEqual([0, 1, 1, 2, 3, 5, 8]);
    }));
}));

describe("Get the first Fibonacci numbers using function with self call", (() => {
    it("Number must be greater than 1", (() => {
        expect(() => getFirstFibonacciNumbersWithSelfCall(1)).toThrow(new Error("Number must be greater than 1"));
    }));

    it("If Fibonacci numbers contain 2 elements first n are 0, 1", (() => {
        let firstFibonacciNumbers = getFirstFibonacciNumbersWithSelfCall(2);
        expect(firstFibonacciNumbers).toEqual([0, 1]);
    }));

    it("If Fibonacci numbers contain 5 elements first n are 0, 1, 1, 2, 3", (() => {
        let firstFibonacciNumbers = getFirstFibonacciNumbersWithSelfCall(5);
        expect(firstFibonacciNumbers).toEqual([0, 1, 1, 2, 3]);
    }));

    it("If Fibonacci numbers contain 7 elements first n are 0, 1, 1, 2, 3, 5, 8", (() => {
        let firstFibonacciNumbers = getFirstFibonacciNumbersWithSelfCall(7);
        expect(firstFibonacciNumbers).toEqual([0, 1, 1, 2, 3, 5, 8]);
    }));
}));