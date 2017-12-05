import {
    insertDashesBetweenEachTwoEvenNumbers
} from './script';

describe("Insert dashes between each two even numbers: ", (() => {
    it("If to number 254680, insert dashes, will be 254-6-8-0", (() => {
        let formattedNumber = insertDashesBetweenEachTwoEvenNumbers(254680);
        expect(formattedNumber).toEqual("254-6-8-0");
    })); 
    it("If to number 135577, insert dashes, will be 135577", (() => {
        let formattedNumber = insertDashesBetweenEachTwoEvenNumbers(135577);
        expect(formattedNumber).toEqual("135577");
    })); 
    it("If to number 246826, insert dashes, will be 2-4-6-8-2-6", (() => {
        let formattedNumber = insertDashesBetweenEachTwoEvenNumbers(246826);
        expect(formattedNumber).toEqual("2-4-6-8-2-6");
    })); 
}));  