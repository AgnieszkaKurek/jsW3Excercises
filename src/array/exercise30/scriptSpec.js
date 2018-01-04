import {
    mergeArraysAndRemovesDuplicateItems
} from './script';

describe("Merge two arrays and removes all duplicates elements: ", (() => {
    it("if two arrays are empty, result is to empty array", () => {
        const result = mergeArraysAndRemovesDuplicateItems([], []);
        expect(result).toEqual([]);
    });
    it("if in arrays all elements are duplicates, result is array where all duplicates are removes ", () => {
        const result = mergeArraysAndRemovesDuplicateItems([1, 2, 3], [3, 2, 1]);
        expect(result).toEqual([1, 2, 3]);
    });
    it("if in arrays all elements are unique, result merge array haves all elements", () => {
        const result = mergeArraysAndRemovesDuplicateItems([1, 2, 3], [4, 5, 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it("if in arrays all elements are unique, result merge array haves all elements", () => {
        const result = mergeArraysAndRemovesDuplicateItems([1, 2, 3], [2, 30, 1]);
        expect(result).toEqual([1, 2, 3, 30]);
    });
}));