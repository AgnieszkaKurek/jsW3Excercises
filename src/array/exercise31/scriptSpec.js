import {
    removeElemFromArray
} from './script';

describe("Remove a specific element from an array:", (() => {
    it("if array is empty, expected result is an empty array", () => {
        let arrayWithoutSpecificElem = removeElemFromArray([], 1);
        expect(arrayWithoutSpecificElem).toEqual([]);
    });
    it("if all items in array are specific elements, expected result is an empty array", () => {
        let arrayWithoutSpecificElem = removeElemFromArray([1, 1], 1);
        expect(arrayWithoutSpecificElem).toEqual([]);
    });
    it("if none of items in array is a specific element, array is unchaged", () => {
        let arrayWithoutSpecificElem = removeElemFromArray([1, 2, 3], 4);
        expect(arrayWithoutSpecificElem).toEqual([1, 2, 3]);
    });
    it("if some items are specific element, expected result is an array without these items", () => {
        let arrayWithoutSpecificElem = removeElemFromArray([2, 5, 9, 5, 6], 5);
        expect(arrayWithoutSpecificElem).toEqual([2, 9, 6]);
    });
}));