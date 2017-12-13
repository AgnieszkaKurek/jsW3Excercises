import {
    changeCaseSize
} from './script';

describe("Change the case of each character in the phrase: ", (() => {
    it("if in the phrase all characters are lowercased, in the formatted phrase all characters are uppercased", () => {
        let formattedPhrase = changeCaseSize("the little pink piggy");
        expect(formattedPhrase).toEqual("THE LITTLE PINK PIGGY");
    });
    it("if in the phrase  all characters are uppercased, in the formatted phrase all characters are lowercased", () => {
        let formattedPhrase = changeCaseSize("THE BIG BLACK BOAR");
        expect(formattedPhrase).toEqual("the big black boar");
    });
    it("if in the phrase character are upper and lowercased, uppercase characters change to lowercase and lowercase characters change to uppercase", () => {
        let formattedPhrase = changeCaseSize("The Quick Brown Fox");
        expect(formattedPhrase).toEqual("tHE qUICK bROWN fOX");
    });
    it("white spaces and extra characters are ignored", () => {
        let formattedPhrase = changeCaseSize(" aBBa!");
        expect(formattedPhrase).toEqual(" AbbA!");
    });

}));