import {
    findDuplicateValues
} from './script';

describe("Find duplicate values in an array: ", (() => {
    it("if no element in the array is duplicated, return empty array", () => {
        let duplicateValues = findDuplicateValues([1, "ab", 2, 3, "c"]);
        expect(duplicateValues).toEqual([]);
    });
    it("if each values in the array is duplicated, return each value once", () => {
        let duplicateValues = findDuplicateValues([1, 1]);
        expect(duplicateValues).toEqual([1]);
    });
    it("if there are both duplicated and single values in the array, return duplicated values once", () => {
        let duplicateValues = findDuplicateValues([1, 1, 2, 3, 3]);
        expect(duplicateValues).toEqual([1, 3]);
    });
    it("if elements are of different types, return all duplicated values regardless of a type", () => {
        let duplicateValues = findDuplicateValues(["a", 12, "bb", "bb", "abc", "a", 12, 13]);
        expect(duplicateValues).toEqual(["bb", "a", 12]);
    });
    it("duplicated items are returned in the order of first occurrence of a duplicate", () => {
        let duplicateValues = findDuplicateValues([1, 2, 2, 1]);
        expect(duplicateValues).toEqual([2, 1]);
    });
}));