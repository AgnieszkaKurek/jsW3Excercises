import { exponentiation } from './script';

describe("Exponentiation of number", function () {
    it("1 raised to the power of 0  is 1", function () {
        var result = exponentiation(1, 0);
        expect(result).toEqual(1);
    });
    it("-2 raised to the power of 1  is -2", function () {
        var result = exponentiation(-2, 1);
        expect(result).toEqual(-2);
    });
    it("2 raised to the power of 3 is 8 ", function () {
        var result = exponentiation(2, 3);
        expect(result).toEqual(8);
    });
    it("5 raised to the power of 5 is 3125 ", function () {
        var result = exponentiation(5, 5);
        expect(result).toEqual(3125);
    });
});