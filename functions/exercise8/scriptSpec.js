/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals isPrimeNumber*/

describe("Checking if number is prime:", function () {
    it("number '1' isn' a prime", function () {
        var testNumber = isPrimeNumber(1);
        expect(testNumber).toBe(false);
    });
     it("number '2' is a prime", function () {
        var testNumber = isPrimeNumber(2);
        expect(testNumber).toBe(true);
    });
    it("number '3' is a prime", function () {
        var testNumber = isPrimeNumber(3);
        expect(testNumber).toBe(true);
    });
    it("number '4' isn't a prime", function () {
        var testNumber = isPrimeNumber(4);
        expect(testNumber).toBe(false);
    });
    it("number '547' is a prime", function () {
        var result = isPrimeNumber(547);
        expect(result).toBe(true);
    });
    it("number '666' isn't a prime", function () {
        var result = isPrimeNumber(666);
        expect(result).toBe(false);
    });
    it("number '15485053' is a prime", function () {
        var result = isPrimeNumber(15485053);
        expect(result).toBe(true);
    });
    it("number '77777777' isn't a prime", function () {
        var result = isPrimeNumber(77777777);
        expect(result).toBe(false);
    });
}); 