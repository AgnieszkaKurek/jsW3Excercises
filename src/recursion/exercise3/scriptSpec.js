import {getTheIntegersInRangeExcluding} from './script';

describe("Get the integers in range between two numbers excluding. ", (() => {
    it("The first number must be less than or equal to the second", (() => {
        expect(() => getTheIntegersInRangeExcluding(3, 1)).toThrow(new Error("The first number must be less than or equal to the second"));
    }));

    it("Number of range must be integers", (() => {
        expect(() => getTheIntegersInRangeExcluding(1.2, 3.5)).toThrow(new Error("Number of range must be integers"));
    }));

    it("If borders are negative, then range is also negative", (() => {
        let integersInRange = getTheIntegersInRangeExcluding(-5, -2);
        expect(integersInRange).toEqual([-4, -3]);
    }));

    it("If first integer is negative and second is positive, then we get range that might have both positive and negative integers", (() => {
        let integersInRange = getTheIntegersInRangeExcluding(-4, 1);
        expect(integersInRange).toEqual([-3, -2, -1, 0]);
    }));

    it("If the difference between borders is 2, then we have only 1 value in a range", (() => {
        let integersInRange = getTheIntegersInRangeExcluding(1, 3);
        expect(integersInRange).toEqual([2]);
    }));

    it("If the difference between borders is 1, then we have no values in a range", (() => {
        let integersInRange = getTheIntegersInRangeExcluding(3, 4);
        expect(integersInRange).toEqual([]);
    }));

    it("If borders are the same, then we have no values in a range", (() => {
        let integersInRange = getTheIntegersInRangeExcluding(3, 3);
        expect(integersInRange).toEqual([]);
    }));

}));