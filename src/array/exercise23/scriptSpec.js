import {
    findTheDifference
} from './script';

describe("Find the difference of two arrays:", (() => {
    it("two empty arrays give to an empty array", () => {
        let difference = findTheDifference([], []);
        expect(difference).toEqual([]);
    });
    it("empty array and non empty array give to array of items from second array", () => {
        let difference = findTheDifference([], [1, 2, 3]);
        expect(difference).toEqual([1, 2, 3]);
    });
    it("two the same array give empty array", () => {
        let difference = findTheDifference([1, 2, 3], [1, 2, 3]);
        expect(difference).toEqual([]);
    });
    it("result array should have difference sorted items", () => {
        let difference = findTheDifference([1, 2, 3], [100, 2, 1, 10]);
        expect(difference).toEqual([3, 10, 100]);
    });
    it("result should be flattened array", () => {
        let difference = findTheDifference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]);
        expect(difference).toEqual([6]);
    });
}));