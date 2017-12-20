import {
    findDuplicateValuesUseSet
} from './script';

describe("Find duplicate values in an array using set: ", (() => {
    it("if no element in the array is duplicated, return empty array", () => {
        let duplicateValues = findDuplicateValuesUseSet([]);
        expect(duplicateValues.size).toEqual(0);
    });
    it("if each values in the array is duplicated, return each value once", () => {
        let duplicateValues = findDuplicateValuesUseSet([1, 1]);
        expect(duplicateValues.size).toEqual(1);
        expect(duplicateValues.has(1)).toEqual(true);
    });
    it("if there are both duplicated and single values in the array, return duplicated values once", () => {
        let duplicateValues = findDuplicateValuesUseSet([1, 1, 2, 3, 3]);
        expect(duplicateValues.size).toEqual(2);
        expect(duplicateValues.has(1)).toEqual(true);
        expect(duplicateValues.has(3)).toEqual(true);
    });
    it("if elements are of different types, return all duplicated values regardless of a type", () => {
        let duplicateValues = findDuplicateValuesUseSet(["a", 12, "bb", "bb", "bb", "abc", "a", 12, 13]);
        expect(duplicateValues.size).toEqual(3);
        expect(duplicateValues.has("a")).toEqual(true);
        expect(duplicateValues.has("bb")).toEqual(true);
        expect(duplicateValues.has(12)).toEqual(true);
    });
}));