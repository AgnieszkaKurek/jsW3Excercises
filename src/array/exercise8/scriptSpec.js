import {
    findMostFrequentItem
} from './script';

describe("Find the most frequent item of an array: ", (() => {
    it("If in the array is one item, it is most frequent item", () => {
        let mostFrequentItems = findMostFrequentItem(["a"]);
        expect(mostFrequentItems).toEqual([{
            item: "a",
            quantity: 1
        }]);
    });
    it("If in the array are two items, both are most frequent items", () => {
        let mostFrequentItems = findMostFrequentItem([1, 2]);
        expect(mostFrequentItems).toEqual([{
            item: 1,
            quantity: 1
        }, {
            item: 2,
            quantity: 1
        }]);
    });
    it("If in the  array are a lot items but one appears most often, it is most frequent items", () => {
        let mostFrequentItems = findMostFrequentItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
        expect(mostFrequentItems).toEqual([{
            item: "a",
            quantity: 5
        }]);
    });
}));