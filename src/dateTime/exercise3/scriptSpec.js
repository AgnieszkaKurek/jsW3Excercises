import {
    getNumberOfDaysInMonth
} from './script';

describe("Get the number of days in a month:", (() => {
    it("January has 31 days", () => {
        let numberOfDays = getNumberOfDaysInMonth(1, 2012);
        expect(numberOfDays).toEqual(31);
    });
    it("February in non-leap year has 28 days", () => {
        let numberOfDays = getNumberOfDaysInMonth(2, 2014);
        expect(numberOfDays).toEqual(28);
    });
    it("February in leap year has 29 days", () => {
        let numberOfDays = getNumberOfDaysInMonth(2, 2020);
        expect(numberOfDays).toEqual(29);
    });
}));