import {
    getPositionOfPairsWithSpecifiedSum, PositionPair
} from './script';

function convertToSortedArray(setOfComparableItems){
    return Array.from(setOfComparableItems).sort((a, b) => a.compare(b));
}

describe("Find pairs of items from a given array whose sum equals a specific target number: ", (() => {
    it("positions are counted from 1", () => {
        let result = getPositionOfPairsWithSpecifiedSum([10, 20], 30);
        expect(result).toEqual(new Set([new PositionPair(1, 2)]));
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
        expect(result instanceof Set).toBe(true);
        expect(result.size).toBe(2);
        let sortedResults = convertToSortedArray(result);
        expect(sortedResults[0].equals(new PositionPair(2, 6))).toBe(true);
        expect(sortedResults[1].equals(new PositionPair(3, 5))).toBe(true);
    });
    it("one item might use the same position twice", () => {
        let result = getPositionOfPairsWithSpecifiedSum([10, 10, 40], 50);
        expect(result instanceof Set).toBe(true);
        expect(result.size).toBe(2);
        let sortedResults = convertToSortedArray(result);
        expect(sortedResults[0].equals(new PositionPair(1, 3))).toBe(true);
        expect(sortedResults[1].equals(new PositionPair(2, 3))).toBe(true);
    });
}));