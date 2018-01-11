import {
    dateIsWeekend
} from './script';

describe("Test whether a date is a weekend:", (() => {
    it("if checked date is Saturday,then date is weekend", () => {
        let result = dateIsWeekend(new Date("11/15/2014"));
        expect(result).toBe(true);
    });
    it("if checked date is Sunday, then date is weekend ", () => {
        let result = dateIsWeekend(new Date("11/16/2014"));
        expect(result).toBe(true);
    });
    it("if checked date is Monday, then date isn't weekend", () => {
        let result = dateIsWeekend(new Date("11/17/2014"));
        expect(result).toBe(false);
    });
    it("if checked date is Wednesday,then date isn't weekend", () => {
        let result = dateIsWeekend(new Date("11/19/2014"));
        expect(result).toBe(false);
    });
})); 