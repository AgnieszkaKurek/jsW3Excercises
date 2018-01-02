import {
    longestCommonStartingSubstring
} from './script';

describe("Find the longest common starting substring in a set of strings: ", (() => {
    it("if no strings provided then common substring is empty", () => {
        let result = longestCommonStartingSubstring([]);
        expect(result).toEqual("");
    });
    it("if one string provided, it is the longest substring", () => {
        let result = longestCommonStartingSubstring(["pig"]);
        expect(result).toEqual("pig");
    });
    it("if many substrings provided, get maximum substring for all of them", () => {
        let result = longestCommonStartingSubstring(["bee", "be", "beer", "bear"]);
        expect(result).toEqual("be");
    });
    it("if strings do not start with the same, return empty substring", () => {
        let result = longestCommonStartingSubstring(["ab", "cd", "abb"]);
        expect(result).toEqual("");
    });
    it("if many substrings are provided and they all start with the same letter and have different second letter, this letter is the longest substring", () => {
        let result = longestCommonStartingSubstring(["bald", "be", "beer", "bear"]);
        expect(result).toEqual("b");
    });
}));