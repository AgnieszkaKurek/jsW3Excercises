import {
    flattenNestedArray
} from './script';

describe("Flatten a nested array: ", (() => {
    it("empty array is flattened as empty array", () => {
        let flattedArray = flattenNestedArray([]);
        expect(flattedArray).toEqual([]);
    });
    it("if flattened deeply, every item directly in returned array", () => {
        let flattedArray = flattenNestedArray([1, [2], [3, [[4]]], [5,6]]);
        expect(flattedArray).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it("If flattened deeply explicitly, every item directly in returned array", () => {
        let flattedArray = flattenNestedArray([1, [2], [3, [[4]]], [5,6]], false);
        expect(flattedArray).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it("If flattened shallow, the array will only be flattened a single level", () => {
        let flattedArray = flattenNestedArray([1, [2], [3, [[4]]], [5,6]], true);
        expect(flattedArray).toEqual([1, 2, 3, [[4]], 5, 6]);
    });
}));