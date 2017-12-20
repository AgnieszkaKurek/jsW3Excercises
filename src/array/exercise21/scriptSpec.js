import {
    flattenAnestedArray
} from './script';

describe("Flatten a nested (any depth) array: ", (() => {
    it("If you pass deep, the array will be flattened to stay one main array", () => {
        let flattedArray = flattenAnestedArray([1, [2], [3, [[4]]], [5,6]]);
        expect(flattedArray).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it("If you pass shallow, the array will only be flattened a single level", () => {
        let flattedArray = flattenAnestedArray([1, [2], [3, [[4]]], [5,6]]);
        expect(flattedArray).toEqual([1, 2, 3, [[4]], 5, 6]);
    });
    
}));