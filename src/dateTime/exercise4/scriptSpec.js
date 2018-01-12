import {
    getTheMonthNameFromDate
} from './script';

describe("Get the month name from a particular date:", (() => {
    it("tenth month is October", () => {
        let monthName = getTheMonthNameFromDate(new Date("10/11/2009"));
        expect(monthName).toEqual("October");
    });
    it("eleventh month is November", () => {
        let monthName = getTheMonthNameFromDate(new Date("11/13/2014"));
        expect(monthName).toEqual("November");
    });

    it("tenth month is October", () => {
        let monthName = getTheMonthNameFromDate(new Date("10/11/2009"), "pl-pl");
        expect(monthName).toEqual("październik");
    });
    it("eleventh month is November", () => {
        let monthName = getTheMonthNameFromDate(new Date("11/13/2014"), "pl-pl");
        expect(monthName).toEqual("listopad");
    });
})); 