import { getRandomChars } from './script';

describe("Getting the a string of specified length of random characters", function () {
    it("If the specified length is 1, will be return one random character", function () {
        var stringIdOfRandomChar = getRandomChars(1);
        expect(stringIdOfRandomChar.length).toEqual(1);
    });
    it("If the specified length is 25, will be return 25 random characters", function () {
        var stringIdOfRandomChar = getRandomChars(25);
        expect(stringIdOfRandomChar.length).toEqual(25);
    });
});
