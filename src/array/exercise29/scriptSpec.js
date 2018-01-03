import {
    getRangeOfLetters
} from './script';

describe("Get range of items", (() => {
    it('if start and end is the same then range consists of start element', () => {
        const newArray = getRangeOfLetters("c", "c", 1);
        expect(newArray).toEqual(["c"]);
    });
    it('if start is bigger then end, then get range in descending order', () => {
        const newArray = getRangeOfLetters("d", "b", 1);
        expect(newArray).toEqual(["d", "c", "b"]);
    });
    it("if step is bigger than 1, then skip some letters, even the ending one", () => {
        let newArray = getRangeOfLetters("a", "k", 3);
        expect(newArray).toEqual(["a", "d", "g", "j"]);
    });
    it("if step is bigger than 1, then skip some letters also if start is bigger then end", () => {
        let newArray = getRangeOfLetters("g", "c", 2);
        expect(newArray).toEqual(["g", "e","c"]);
    });

}));