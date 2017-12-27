import {
    getPositionOfPairsWithSpecifiedSum
} from './script';

describe("Find pairs of items from a given array whose sum equals a specific target number: ", (() => {
    it("positions are counted from 1", () => {
        let result = getPositionOfPairsWithSpecifiedSum([10, 20], 30);
        expect(result).toEqual(new Set([{ formerPosition: 1, latterPosition: 2 }]));
    });
    it("array should have at least 2 items", () => {
        expect(() => getPositionOfPairsWithSpecifiedSum([20], 20)).toThrow(new Error("Array should have at least 2 items"));
    });
    it("if there is no pair with appropriate sum, then return empty set", () => {
        let result = getPositionOfPairsWithSpecifiedSum([10, 20, 30, 40, 50], 15);
        expect(result).toEqual(new Set());
    });
    it("if there are two matching pairs, we should return both of them", () => {
        let result = getPositionOfPairsWithSpecifiedSum([50, 10, 20, 60, 30, 40], 50);
        expect(result.size).toEqual(2);
        expect(result.has([2, 6])).toEqual(true);
        expect(result.has([3, 5])).toEqual(true);
    });
}));