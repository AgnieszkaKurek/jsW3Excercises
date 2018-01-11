import {
    testDateIsWeekend
} from './script';

describe("Test whether a date is a weekend:", (() => {
    it("if checked date is Saturday,then date is weekend", () => {
        let result = testDateIsWeekend("Nov 15, 2014");
        expect(result).toBe(true);
    });
    it("if checked date is Sunday, then date is weekend ", () => {
        let result = testDateIsWeekend("Nov 16, 2014");
        expect(result).toBe(true);
    });
    it("if checked date is Monday, then date isn't weekend", () => {
        let result = testDateIsWeekend("Nov 17, 2014");
        expect(result).toBe(false);
    });
    it("if checked date is Wednesday,then date isn't weekend", () => {
        let result = testDateIsWeekend("Nov 19, 2014");
        expect(result).toBe(false);
    });
})); 