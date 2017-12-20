import {
    findDuplicateValuesUseSet
} from './script';

describe("Find duplicate values in an array: ", (() => {
    it("if no element in the array is duplicated, return empty array", () => {
        let duplicateValues = findDuplicateValuesUseSet([1, "ab", 2, 3, "c"]);
        expect(duplicateValues).toEqual(new Set([]));
    });
    it("if each values in the array is duplicated, return each value once", () => {
        let duplicateValues = findDuplicateValuesUseSet([1, 1]);
        expect(duplicateValues).toEqual(new Set([1]));
    });
    it("if there are both duplicated and single values in the array, return duplicated values once", () => {
        let duplicateValues = findDuplicateValuesUseSet([1, 1, 2, 3, 3]);
        expect(duplicateValues).toEqual(new Set([1, 3]));
    });
    it("if elements are of different types, return all duplicated values regardless of a type", () => {
        let duplicateValues = findDuplicateValuesUseSet(["a", 12, "bb", "bb", "abc", "a", 12, 13]);
        expect(duplicateValues).toEqual(new Set(["bb", "a", 12]));
    });
    it("duplicated items are returned in the order of first occurrence of a duplicate", () => {
        let duplicateValues = findDuplicateValuesUseSet([1, 2, 2, 1]);
        expect(duplicateValues).toEqual(new Set([2, 1]));
    });
}));