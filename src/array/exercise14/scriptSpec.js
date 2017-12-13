import {
    removeDuplicateItems
} from './script';

describe("Remove duplicated items from an array (ignore case sensitivity): ", (() => {
    it("if array is empty, return empty array", () => {
        let singleItems = removeDuplicateItems([]);
        expect(singleItems).toEqual([]);
    });
    it("if each element in the array is duplicated, return all elements (remove duplicatates) ", () => {
        let singleItems = removeDuplicateItems(["ab", "bb", "ab", "bb", "ab"]);
        expect(singleItems).toEqual(["ab", "bb",]);
    });
    it("if there are only single elements in the array, return all elements", () => {
        let singleItems = removeDuplicateItems(["a", "bb", "abc"]);
        expect(singleItems).toEqual(["a", "bb", "abc"]);
    });
    it("if elements are of different types, return all single elements regardless of type", () => {
        let singleItems = removeDuplicateItems(["a", 12, "bb", "bb", "abc", "a", 12, 1]);
        expect(singleItems).toEqual(["a", 12, "bb", "abc", 1]);
    });
    it("if elements are of different types but convert to the same value, return all of them as they are of different type", () => {
        let singleItems = removeDuplicateItems(["1", 1]);
        expect(singleItems).toEqual(["1", 1]);
    });
})); 