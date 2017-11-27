import { findFirstNotRepeatedCharacter } from './script';

describe("Find the first not repeated character in string", (() => {

    it("In the string 'abacddbec' first  not repeated character  is e", (() => {
        let firstNotRepeatedCharacter = findFirstNotRepeatedCharacter("abacddbec");
        expect(firstNotRepeatedCharacter).toEqual("e");
    }));
    it("In the string 'abba' all characters repeated, we get ''", (() => {
        let firstNotRepeatedCharacter = findFirstNotRepeatedCharacter("abba");
        expect(firstNotRepeatedCharacter).toEqual("");
    }));

    it("In the string 'ab' all characters repeated, we get 'a'", (() => {
        let firstNotRepeatedCharacter = findFirstNotRepeatedCharacter("ab");
        expect(firstNotRepeatedCharacter).toEqual("a");
    }));

}));