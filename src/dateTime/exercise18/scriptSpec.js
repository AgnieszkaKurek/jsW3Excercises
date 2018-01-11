import {
    calculateAge
} from './script';

describe("Calculate the age based on the date of birth.", (() => {
    it("A person born on 22 February in 2000, it is 18 years old", () => {
        let age = calculateAge("2000, 2, 22");
        expect(age).toEqual(18);
    });
    it("A person born on 20 April in 1986, it is 32 years old", () => {
        let age = calculateAge("1986, 4, 20");
        expect(age).toEqual(32);
    });
    it("A person born on 1 January, in 1962, it is 56 years old", () => {
        let age = calculateAge("1962, 1, 1");
        expect(age).toEqual(56);
    });
}));