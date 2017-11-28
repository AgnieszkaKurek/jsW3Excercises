import {sumOfAnArrayOfIntegers} from './script';   

describe("Sum of an array of integers. ", (() => {
    
    it("If all integers of an array are positive summationResult is positive ", (() => {
        let summationResult = sumOfAnArrayOfIntegers([1, 2, 3, 4, 5, 6]);
        expect(summationResult).toEqual(21);
    }));

    it("If all integers of an array are negative summationResult is negative ", (() => {
        let summationResult = sumOfAnArrayOfIntegers([-3, -2, -1]);
        expect(summationResult).toEqual(-6);
    }));

    it("If all integers of an array are negative and positive summationResult can negative or positive ", (() => {
        let summationResult = sumOfAnArrayOfIntegers([-2, -1, 0, 1, 2, 3]);
        expect(summationResult).toEqual(3);
    }));

    it("If the array is empty, summationResult is 0 ", (() => {
        let summationResult = sumOfAnArrayOfIntegers([]);
        expect(summationResult).toEqual(0);
    }));

    it("Number must be integers ", (() => {
        expect(() => sumOfAnArrayOfIntegers([1, 1.5, 2, 2.2])).toThrow(new Error("Array must contain integers only"));
    }));

    it("Only numbers can be sum ", (() => {
        expect(() => sumOfAnArrayOfIntegers(['ab1', 1, 2])).toThrow(new Error("Array must contain integers only"));
    }));

}));
