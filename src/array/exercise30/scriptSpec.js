import {
    mergeArraysAndRemoveDuplicatedItems
} from './script';

describe("Merge two arrays and remove all duplicates elements:", (() => {
    it("if two arrays are empty, result is an empty array", () => {
        const result = mergeArraysAndRemoveDuplicatedItems([], []);
        expect(result).toEqual([]);
    });
    it("if all elements in arrays are duplicates, result is array where all duplicates are removed", () => {
        const result = mergeArraysAndRemoveDuplicatedItems([1, 2, 3], [3, 2, 1]);
        expect(result).toEqual([1, 2, 3]);
    });
    it("if all elements in arrays are unique, result of merging arrays has all elements", () => {
        const result = mergeArraysAndRemoveDuplicatedItems([1, 2, 3], [4, 5, 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
}));