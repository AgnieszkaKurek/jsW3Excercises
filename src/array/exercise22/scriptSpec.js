
import {
    mergeAndSort
} from './script';

describe("Compute the union of two arrays: ", (() => {
    it("two empty arrays compute to an empty array", () => {
        let unionArrays = mergeAndSort([], []);
        expect(unionArrays).toEqual([]);
    });
    it("empty array and non empty array compute to sorted array of items from second array", () => {
        let unionArrays = mergeAndSort([], [100, 2, 1]);
        expect(unionArrays).toEqual([1, 2, 100]);
    });
    it("cumputation of two the same arrays is the same array", () => {
        let unionArrays = mergeAndSort([1], [1]);
        expect(unionArrays).toEqual([1]);
    });
    it("result of the union of two arrays with the same length but different elements, is two-elements array", () => {
        let unionArrays = mergeAndSort([10], [100]);
        expect(unionArrays).toEqual([10, 100]);
    });
    it("result array should have unique sorted items", () => {
        let unionArrays = mergeAndSort([1, 2, 3], [100, 2, 1, 10]);
        expect(unionArrays).toEqual([1, 2, 3, 10, 100]);
    });
}));