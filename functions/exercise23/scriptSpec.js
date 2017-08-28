/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals findFirstNotRepeatedCharacter*/

describe("Find the first not repeated character in string", (() => {
    
        it("In the string 'abacddbec' first  not repeated character  is e", (() => {
            let firstNotRepeatedCharacter = findFirstNotRepeatedCharacter("abacddbec");
            expect(firstNotRepeatedCharacter).toEqual("e");
        }));
        it("In the string 'blackwhite' any characters repeat, we get ''", (() => {
            let firstNotRepeatedCharacter = findFirstNotRepeatedCharacter("blackwhite");
            expect(firstNotRepeatedCharacter).toEqual("");
        }));

    }));