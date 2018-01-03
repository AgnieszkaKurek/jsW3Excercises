import {
    fillArrayWithSuitableValues
} from './script';

describe("Fill an array with values (numeric, string with one character) on supplied bounds: ", (() => {
    it("if numeric is 1 ,first character in string is c ,last character in string is f, array contains all letters in the string from c to f", () => {
        let newArray = fillArrayWithSuitableValues("c", "f", 1);
        expect(newArray).toEqual(["c", "d", "e", "f"]);
    });

    it("if numeric is 3, first character in string is a, last character in string is d, array cointain 2 character a and d", () => {
        let newArray = fillArrayWithSuitableValues("a", "d", 3);
        expect(newArray).toEqual(["a", "d"]);
    });
    it("if numeric is 2, first character in string is a, last character in string is z, array cointain whole alphabet without every second letter", () => {
        let newArray = fillArrayWithSuitableValues("a", "z", 2);
        expect(newArray).toEqual(["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]);
    });

}));