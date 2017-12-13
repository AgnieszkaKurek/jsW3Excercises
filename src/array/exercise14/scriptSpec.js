import {
    removeDuplicateItems
} from './script';

describe("Remove duplicate items from an array (ignore case sensitivity): ", (() => {
    it("if array is empty, return also empty array", () => {
        let singleItems = removeDuplicateItems([]);
        expect(singleItems ).toEqual([]);
    });
    it("if each elements in the array are dublicate, return empty array ", () => {
        let singleItems = removeDuplicateItems(["ab", "bb", "ab","bb","ab"]);
        expect(singleItems ).toEqual([]);
    });
    it("if in the array are only single items, return all items", () => {
        let singleItems = removeDuplicateItems(["a", "bb", "abc"]);
        expect(singleItems ).toEqual(["a", "bb", "abc"]);
    });
    it("if in the array are single items and  dublicate items, return single items", () => {
        let singleItems = removeDuplicateItems(["ab", "ab", "bb","abc","ab","abc", "c"]);
        expect(singleItems ).toEqual(["bb", "c"]);
    });
    it("if items are string and number , return all single items(string and number)", () => {
        let singleItems = removeDuplicateItems(["a", 12, "bb", "bb", "abc", "a", 12 ,1]);
        expect(singleItems ).toEqual(["abc", 1]);
    });
})); 