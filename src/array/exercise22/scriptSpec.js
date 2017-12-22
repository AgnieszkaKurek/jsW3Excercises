import {
    computeTheUnionOfTwoArrays
} from './script';

describe("Compute the union of two arrays :", (() => {
    it("result union of two empty arrays, is empty array", () => {
        let unionArray= computeTheUnionOfTwoArrays([], []);
        expect(unionArray).toEqual([]);
    });
    it("result union of empty array and three-elements array, is  three-elements  array", () => {
        let unionArray= computeTheUnionOfTwoArrays([], [100, 2, 1]);
        expect(unionArray).toEqual([1, 2, 100]);
    });
    it("result union of two arrays with the same length and and the same elements, is the same array", () => {
        let unionArray= computeTheUnionOfTwoArrays([1], [1]);
        expect(unionArray).toEqual([1]);
    it("result union of two array with the same length but different elements, is two-elements array  ", () => {
        let unionArray= computeTheUnionOfTwoArrays([10], [100]);
        expect(unionArray).toEqual([10, 100]);
    });
    it("result union of two array whit different lenght and the same and different array , is array in which there are elements from two array, but the same elements occur only once ", () => {
        let unionArray= computeTheUnionOfTwoArrays([1, 2, 3], [100, 2, 1, 10]);
        expect(unionArray).toEqual([1, 2, 3, 10, 100]);
    });
}));