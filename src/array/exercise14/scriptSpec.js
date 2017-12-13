import {
    removeDuplicateItems
} from './script';

describe("Remove duplicate items from an array (ignore case sensitivity): ", (() => {
    it("if array is empty, return empty array", () => {
        let singleItems = removeDuplicateItems([]);
        expect(singleItems ).toEqual([]);
    });
    it("if each elements in the array are dublicate, return all element (remove dublicatate) ", () => {
        let singleItems = removeDuplicateItems(["ab", "bb", "ab","bb","ab"]);
        expect(singleItems ).toEqual(["ab", "bb",]);
    });
    it("if in the array are only single element, return all element", () => {
        let singleItems = removeDuplicateItems(["a", "bb", "abc"]);
        expect(singleItems ).toEqual(["a", "bb", "abc"]);
    });
    it("if elements are string and number , return all single elements(string and number)", () => {
        let singleItems = removeDuplicateItems(["a", 12, "bb", "bb", "abc", "a", 12 ,1]);
        expect(singleItems ).toEqual(["a", 12, "bb", "abc", 1]);
    });
})); 