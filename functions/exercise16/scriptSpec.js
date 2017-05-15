/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getUniqueCharactersFromString*/

describe("Extract unique characters from a string", function () {
    it("string 'pig' give 'pig' uniqe characters", function () {
        var uniqueCharacters = getUniqueCharactersFromString("pig");
        expect(uniqueCharacters).toEqual("pig");
    });
    it("string 'dodo' give 'do' uniqe characters", function () {
        var uniqueCharacters = getUniqueCharactersFromString("dodo");
        expect(uniqueCharacters).toEqual("do");
    });
    it("string 'future' give 'futre' uniqe characters", function () {
        var uniqueCharacters = getUniqueCharactersFromString("future");
        expect(uniqueCharacters).toEqual("futre");
    });
    it("string 'thequickbrownfoxjumpsoverthelazydog' give 'thequickbrownfxjmpsvlazydg'uniqe characters", function () {
        var uniqueCharacters = getUniqueCharactersFromString("thequickbrownfoxjumpsoverthelazydog");
        expect(uniqueCharacters).toEqual("thequickbrownfxjmpsvlazydg");
    });
});