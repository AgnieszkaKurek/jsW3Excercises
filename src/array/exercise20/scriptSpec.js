import {
    findDuplicateValues
} from './script';

describe(" Find duplicate values in a array.:", (() => {
    it("if no element in the array is duplicated, return empty array", () => {
        let duplicateValues = findDuplicateValues([1, "ab", 2, 3, "c"]);
        expect(duplicateValues).toEqual([]);
    });
    it("if each values in the array is duplicated, return each vaues", () => {
        let duplicateValues = findDuplicateValues([1, 1]);
        expect(duplicateValues).toEqual([1]);
    });
    it("if in thee array are duplicated and single values , return duplicate values", () => {
        let duplicateValues = findDuplicateValues([1, 1, 2, 3, 3]);
        expect(duplicateValues).toEqual([1, 3]);
    });
    it("if elements are of different types, return all duplicate values regardless of type", () => {
        let duplicateValues = findDuplicateValues(["a", 12, "bb", "bb", "abc", "a", 12, 13]);
        expect(duplicateValues).toEqual([ "bb", "a" , 12]);
    });
}));