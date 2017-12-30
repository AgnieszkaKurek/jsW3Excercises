import {
    longestCommonStartingSubstring
} from './script';

describe("Find the longest common starting substring in a set of strings: ", (() => {
    it("if no strings provided then common substring is empty", () => {
        let longestCommonStartingSubstring = longestCommonStartingSubstring([]);
        expect(longestCommonStartingSubstring).toEqual("");
    });

    it("if one string provided, it is the longest substring", () => {
        let longestCommonStartingSubstring = longestCommonStartingSubstring(["pig"]);
        expect(longestCommonStartingSubstring).toEqual("pig");
    });

    it("if many substrings provided, get maximum substring for all of them", () => {
        let longestCommonStartingSubstring = longestCommonStartingSubstring(["bee", "be", "beer", "bear"]);
        expect(longestCommonStartingSubstring).toEqual("be");
    });
    it("if strings do not start with the same, return empty substring", () => {
        let longestCommonStartingSubstring = longestCommonStartingSubstring(["ab", "cd", "abb"]);
        expect(longestCommonStartingSubstring).toEqual("");
    });

}));