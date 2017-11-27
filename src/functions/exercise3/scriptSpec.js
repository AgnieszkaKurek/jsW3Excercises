import { getAllSubStringsOf } from './script';

describe("Getting all substrings:", function () {
    it("empty phrase has 0 substrings", function () {
        var substrings = getAllSubStringsOf("");
        expect(substrings).toEqual([]);
    });
    it("white spaces are treated as standard characters", function () {
        var substrings = getAllSubStringsOf(" ");
        expect(substrings).toEqual([" "]);
    });
    it("single character has 1 substring", function () {
        var substrings = getAllSubStringsOf("a");
        expect(substrings).toEqual(["a"]);
    });
    it("two characters have 3 substrings", function () {
        var substrings = getAllSubStringsOf("ab");
        expect(substrings).toEqual(["a", "ab", "b"]);
    });
    it("three characters have 6 substrings", function () {
        var substrings = getAllSubStringsOf("dog");
        expect(substrings).toEqual(["d", "do", "dog", "o", "og", "g"]);
    });
    it("four characters have 10 substrings", function () {
        var substrings = getAllSubStringsOf("home");
        expect(substrings).toEqual(["h", "ho", "hom", "home", "o", "om", "ome", "m", "me", "e"]);
    });
});