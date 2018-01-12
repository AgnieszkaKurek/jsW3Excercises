import {
    compareDates
} from './script';

describe("Compare two dates", (() => {
    it("if two dates are the same, return 0", () => {
        let result = compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'));
        expect(result).toEqual(0);
    });
    it("if first data is bigger than second data, return 1", () => {
        let result = compareDates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'));
        expect(result).toEqual(1);
    });
    it("if first data is smaller than second data, return -1", () => {
        let result = compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'));
        expect(result).toEqual(-1);
    });
}));