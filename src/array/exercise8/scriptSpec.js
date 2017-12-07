import {
    findTheMostFrequentItems,
    //findTheMostFrequentItemsUsingMap
} from './script';

describe("Find the most frequent item of an array: ", (() => {
    it("If array is empty, result is empty array", () => {
        let mostFrequentItems = findTheMostFrequentItems([]);
        expect(mostFrequentItems).toEqual([]);
    });
    it("If in the array is one item, it is most frequent item", () => {
        let mostFrequentItems = findTheMostFrequentItems(["a"]);
        expect(mostFrequentItems).toEqual([{
            item: "a",
            quantity: 1
        }]);
    });
    it("If in the array are two items, both are most frequent items", () => {
        let mostFrequentItems = findTheMostFrequentItems([1, 2]);
        expect(mostFrequentItems).toEqual([{
            item: 1,
            quantity: 1
        }, {
            item: 2,
            quantity: 1
        }]);
    });
    it("If in the array consists of a lot of items but one appears most often, it is the most frequent item", () => {
        let mostFrequentItems = findTheMostFrequentItems([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
        expect(mostFrequentItems).toEqual([{
            item: "a",
            quantity: 5
        }]);
    });
}));

// describe("Find the most frequent item of an array using map: ", (() => {
//     it("If array is empty, result is empty array", () => {
//         let mostFrequentItems = findTheMostFrequentItemsUsingMap([]);
//         expect(mostFrequentItems).toEqual([]);
//     });
// it("If in the array is one item, it is most frequent item", () => {
//     let mostFrequentItems = findTheMostFrequentItemsUsingMap(["a"]);
//     expect(mostFrequentItems).toEqual([{
//         item: "a",
//         quantity: 1
//     }]);
// });
// it("If in the array are two items, both are most frequent items", () => {
//     let mostFrequentItems = findTheMostFrequentItemsUsingMap([1, 2]);
//     expect(mostFrequentItems).toEqual([{
//         item: 1,
//         quantity: 1
//     }, {
//         item: 2,
//         quantity: 1
//     }]);
// });
// it("If in the array consists of a lot of items but one appears most often, it is the most frequent item", () => {
//     let mostFrequentItems = findTheMostFrequentItemsUsingMap([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
//     expect(mostFrequentItems).toEqual([{
//         item: "a",
//         quantity: 5
//     }]);
// });
//}));