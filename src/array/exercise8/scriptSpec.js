import {
    findTheMostFrequentItems
} from './script';

describe("Find the most frequent item of an array: ", (() => {
    it("If array is empty, result is empty an enmpty object", () => {
        let mostFrequentItems = findTheMostFrequentItems([]);
        expect(mostFrequentItems).toEqual({quantity: 0, items: []});
    });
    it("If in the array is one item, it is most frequent item", () => {
        let mostFrequentItems = findTheMostFrequentItems(["a"]);
        expect(mostFrequentItems).toEqual({quantity: 1, items: ["a"]});
    });
    it("If in the array are two items, both are most frequent items", () => {
        let mostFrequentItems = findTheMostFrequentItems([1, 2]);
        expect(mostFrequentItems).toEqual({quantity: 1, items: [1, 2]});
    });
    it("If the array consists of a lot of items but one appears most often, it is the most frequent item", () => {
        let mostFrequentItems = findTheMostFrequentItems([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
        expect(mostFrequentItems).toEqual({quantity: 5, items: ["a"]});
    });
    it("If the array consists of a lot of items with many usages, it returns all of them", () => {
        let mostFrequentItems = findTheMostFrequentItems([1, 4, 5, 1, 6, 2, 7, 2, 3, 8, 3]);
        expect(mostFrequentItems).toEqual({quantity: 2, items: [1, 2, 3]});
    });
}));