import {
    compareDates 
} from './script';

describe("Compare two dates (i.e. greater than, less than or equal to):", (() => {
    it("if the two dates are the same, they are equal", () => {
        let result = compareDates(`2013/11/14 00:00`, `2013/11/14 00:00`);
        expect(result).toEqual("dateA = dateB");
    });
    it("if first data is the second after second date, first date is greater than second ", () => {
        let numberOfDays = compareDates(`2013/11/14 00:01`, `2013/11/14 00:00`);
        expect(numberOfDays).toEqual("dateA > dateB");
    });
    it("if second data is the second after first date, first date is less than second ", () => {
        let numberOfDays = compareDates(`2013/11/14 00:00`, `2013/11/14 00:01`);
        expect(numberOfDays).toEqual("dateA < dateB");
    });
}));