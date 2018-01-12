import {
    getTheLastDayOfMonth
} from './script';

describe("Get the last day of a month.", (() => {
    it("The last day of the first month in 2014 is 31.", () => {
        let lastDayOfMonth = getTheLastDayOfMonth(2014, 0);
        expect(lastDayOfMonth).toEqual(31);
    });
    it("The last day of the second month in 2014 is 28.", () => {
        let lastDayOfMonth = getTheLastDayOfMonth(2014, 1);
        expect(lastDayOfMonth).toEqual(28);
    });
    it("The last day of the twelfth month in 2014 is 31.", () => {
        let lastDayOfMonth = getTheLastDayOfMonth(2014, 11);
        expect(lastDayOfMonth).toEqual(31);
    });
}));