import {
    isArmstrongNumber
} from './script';

describe("Check if number is Armstrong number: ", (() => {
    it("371 is Armstrong number", (() => {
        let armstrongNumber = isArmstrongNumber(371);
        expect(armstrongNumber).toBe(true);
    }));
    it("153 is Armstrong number", (() => {
        let armstrongNumber = isArmstrongNumber(153);
        expect(armstrongNumber).toBe(true);
    }));
    it("333 isn't Armstrong number", (() => {
        let armstrongNumber = isArmstrongNumber(333);
        expect(armstrongNumber).toBe(false);
    }));
}));