/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getUniqueCharactersFromString*/

describe("Extract unique character from a string", function () {
    it("string 'pig' give 'pig' uniqe character", function () {
        var uniqueCharacters = getUniqueCharactersFromString("pig");
        expect(uniqueCharacters).toEqual("pig");
    });
    it("string 'dodo' give 'do' uniqe character", function () {
        var uniqueCharacters = getUniqueCharactersFromString("dodo");
        expect(uniqueCharacters).toEqual("do");
    });
    it("string 'future' give 'futre' uniqe character", function () {
        var uniqueCharacters = getUniqueCharactersFromString("future");
        expect(uniqueCharacters).toEqual("futre");
    });
    it("string 'thequickbrownfoxjumpsoverthelazydog' give 'thequickbrownfxjmpsvlazydg'uniqe character", function () {
        var uniqueCharacters = getUniqueCharactersFromString("thequickbrownfoxjumpsoverthelazydog");
        expect(uniqueCharacters).toEqual("thequickbrownfxjmpsvlazydg");
    });
});