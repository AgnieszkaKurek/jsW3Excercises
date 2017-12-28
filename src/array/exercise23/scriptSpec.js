
import {
    differenceOfArrays
} from './script';

describe("Find the difference of two arrays:", (() => {
    it("there is no difference between two empty arrays", () => {
        let difference = differenceOfArrays([], []);
        expect(difference).toEqual([]);
    });
    it("empty array and non empty array results in array of items from second array", () => {
        let difference = differenceOfArrays([], [1, 2, 3]);
        expect(difference).toEqual([1, 2, 3]);
    });
    it("there is no difference between two the same not empty arrays", () => {
        let difference = differenceOfArrays([1, 2, 3], [1, 2, 3]);
        expect(difference).toEqual([]);
    });
    it("the order of items in inpuit array does not matter", () => {
        let difference = differenceOfArrays([1, 2, 3], [3, 1, 2]);
        expect(difference).toEqual([]);
    });
    it("difference array is sorted ascending", () => {
        let difference = differenceOfArrays([1, 2, 3], [100, 2, 1, 10]);
        expect(difference).toEqual([3, 10, 100]);
    });
    it("input arrays are flattened befor getting the difference", () => {
        let difference = differenceOfArrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]);
        expect(difference).toEqual([6]);
    });
}));