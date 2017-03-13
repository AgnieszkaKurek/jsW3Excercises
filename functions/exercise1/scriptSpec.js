/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals revertNumber*/

describe("Revert number", function () {
    it("from 5445671 to 1765445 ", function () {
        var reverseNumber = revertNumber(5445671);
        expect(reverseNumber).toBe(1765445);
    });
    it("from 12345 to 54321", function () {
        var reverseNumber = revertNumber(12345);
        expect(reverseNumber).toBe(54321);
    });
});