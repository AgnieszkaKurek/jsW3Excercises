import {
    testDateIsWeekend
} from './script';

describe("Test whether a date is a weekend:", (() => {
    it("if date is weekend, return true ", () => {
        let result = testDateIsWeekend("Nov 15, 2014");
        expect(result).toBe(true);
    });
    it("if date isn't weekend, return false", () => {
        let result = testDateIsWeekend("Nov 17, 2014");
        expect(result).toBe(false);
    });
})); 