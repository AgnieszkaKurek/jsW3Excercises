import {
    getFirstFibonacciNumbers
} from './script';

describe("Get the first Fibonacci numbers.", (() => {
    it("If Fibonacci numbers contain 2 elements first n are 0, 1", (() => {
        let firstFibonacciNumbers = getFirstFibonacciNumbers(2);
        expect(firstFibonacciNumbers).toEqual([0, 1]);
    }));

    it("If Fibonacci numbers contain 5 elements first n are 0, 1, 1, 2, 3", (() => {
        let firstFibonacciNumbers = getFirstFibonacciNumbers(5);
        expect(firstFibonacciNumbers).toEqual([0, 1, 1, 2, 3]);
    }));

    it("If Fibonacci numbers contain 7 elements first n are 0, 1, 1, 2, 3, 5, 8", (() => {
        let firstFibonacciNumbers = getFirstFibonacciNumbers(7);
        expect(firstFibonacciNumbers).toEqual([0, 1, 1, 2, 3, 5, 8]);
    }));
}));