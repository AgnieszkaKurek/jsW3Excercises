import {
    checkIfNumberIsHappy
} from './script';

describe("Check if number is happy (Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.)", (() => {
    it("13 is happy number", (() => {
        let happyNumber = checkIfNumberIsHappy(13);
        expect(happyNumber).toEqual();
    }));

    it("622 is happy number", (() => {
        let happyNumber = checkIfNumberIsHappy(622);
        expect(happyNumber).toEqual();
    }));

    it("7528 isn't happy number", (() => {
        let happyNumber = checkIfNumberIsHappy(7528);
        expect(happyNumber).toEqual();
    }));
}));


