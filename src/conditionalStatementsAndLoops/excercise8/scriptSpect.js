import {
    isHappyNumber
} from './script';

describe("Check if number is happy: ", (() => {
    it("13 is happy number", (() => {
        let happyNumber = isHappyNumber(13);
        expect(happyNumber).toBe(true);
    }));

    it("622 is a happy number", (() => {
        let happyNumber = isHappyNumber(622);
        expect(happyNumber).toBe(true);
    }));

    it("14 isn't a happy number", (() => {
        let happyNumber = isHappyNumber(14);
        expect(happyNumber).toBe(false);
    }));

    it("7528 isn't a happy number", (() => {
        let happyNumber = isHappyNumber(7528);
        expect(happyNumber).toBe(false);
    }));
}));