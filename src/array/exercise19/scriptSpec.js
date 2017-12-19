import {
    computSumOfEachIndividualElemValue
} from './script';


describe("Compute the sum of each individual index value from the given arrays: ", (() => {
    
    it("if we add two empty arrays, the result will be an empty array", () => {
        let sumOfEachElemValue  =  computSumOfEachIndividualElemValue([], []);
        expect(sumOfEachElemValue).toEqual([]);
    });
    it("if we add empty array and one element array, the result will be one element array", () => {
        let sumOfEachElemValue  =  computSumOfEachIndividualElemValue([], [3]);
        expect(sumOfEachElemValue).toEqual([3]);
    });
    it("if we add two one element arrays, the result will one element array", () => {
        let sumOfEachElemValue  =  computSumOfEachIndividualElemValue([2], [2]);
        expect(sumOfEachElemValue).toEqual([4]);
    });
    it("if we add two elements array and five elements array, the result will be an five elements array", () => {
        let sumOfEachElemValue  =  computSumOfEachIndividualElemValue([1, 14], [1, 8, 9, 12, 15]);
        expect(sumOfEachElemValue).toEqual();
    });
    it("if we add five elements array and six elements array, the result will be an six elements array", () => {
        let sumOfEachElemValue  =  computSumOfEachIndividualElemValue([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]);
        expect(sumOfEachElemValue).toEqual([4, 5, 8, 10, 12, 13]);
    });
   
}));
