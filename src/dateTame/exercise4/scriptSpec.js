import {
    getTheMonthNameFromDate
} from './script';

describe("Get the month name from a particular date:", (() => {
    it("eleventh month is November", () => {
        let monthName = getTheMonthNameFromDate("2009/11/10");
        expect(monthName).toEqual("November");
    });
    it("fourth month is April", () => {
        let monthName =  getTheMonthNameFromDate("1986/04/20");
        expect(monthName).toEqual("April");
    });
    it("first month is January", () => {
        let monthName =  getTheMonthNameFromDate("2018/01/05");
        expect(monthName).toEqual("January");
    });
}));