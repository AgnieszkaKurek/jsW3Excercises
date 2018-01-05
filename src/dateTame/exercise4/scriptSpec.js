import {
    getTheMonthNameFromDate
} from './script';

describe("Get the month name from a particular date:", (() => {
    it("eleventh month is October", () => {
        let monthName = getTheMonthNameFromDate("10/11/2009");
        expect(monthName).toEqual("October" );
    });
    it("fourth month is April", () => {
        let monthName =  getTheMonthNameFromDate("20/04/1986");
        expect(monthName).toEqual("April");
    });
    it("first month is January", () => {
        let monthName =  getTheMonthNameFromDate("05/01/2018");
        expect(monthName).toEqual("January");
    });
}));