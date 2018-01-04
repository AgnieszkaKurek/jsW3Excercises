import {
    removeSpecificElemFromArray
} from './script';

describe("Remove a specific element from an array:", (() => {

    it("if array is empty, expectedd result is been empty aray too", () => {
        let arrayWithoutSpecificElem = removeSpecificElemFromArray([], 1);
        expect(arrayWithoutSpecificElem).toEqual([]);
    });
    it("if all items in array are specific element, expected result is been empty array", () => {
        let arrayWithoutSpecificElem = removeSpecificElemFromArray([1, 1], 1);
        expect(arrayWithoutSpecificElem).toEqual([]);
    });
    it("if neither items in array are specific element, expected result is been array having all items orginal array", () => {
        let arrayWithoutSpecificElem = removeSpecificElemFromArray([1, 2, 3], 4);
        expect(arrayWithoutSpecificElem).toEqual([1, 2, 3]);
    });
    it("if some items are specific element, expected result is been array without this items ", () => {
        let arrayWithoutSpecificElem = removeSpecificElemFromArray([2, 5, 9, 6], 5);
        expect(arrayWithoutSpecificElem).toEqual([2, 9, 6]);
    });
}));