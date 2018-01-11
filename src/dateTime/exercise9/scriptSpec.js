import {
    getTheLastDayOfMonth
} from './script';

describe("Get the last day of a month.", (() => {
    it("The last day of January in 2014 is Friday.", () => {
        let lastDayOfMonth = getTheLastDayOfMonth(2014, 1);
        expect(lastDayOfMonth).toEqual("Friday");
    });
    it(" The last day of February in 2015 is Saturday.", () => {
        let lastDayOfMonth = getTheLastDayOfMonth(2015, 2);
        expect(lastDayOfMonth).toEqual("Saturday");
    });
    it("The last day of December in 2017 is Sunday.", () => {
        let lastDayOfMonth = getTheLastDayOfMonth(2017, 12);
        expect(lastDayOfMonth).toEqual("Sunday");
    });
    it("The last day of April in 2018 is Monday.", () => {
        let lastDayOfMonth = getTheLastDayOfMonth(2018, 4);
        expect(lastDayOfMonth).toEqual("Monday");
    });
}));