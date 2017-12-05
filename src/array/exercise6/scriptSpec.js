import {
    insertDashesBetweenEachTwoEvenNumbers
} from './script';

describe("Insert dashes between each two even numbers: ", (() => {
    it('If number contains only one digit it will not have dash inserted', () => {
        let formattedNumber = insertDashesBetweenEachTwoEvenNumbers(1);
        expect(formattedNumber).toEqual("1");
    });
    it("If number contains only odd digits, then no dash is added", (() => {
        let formattedNumber = insertDashesBetweenEachTwoEvenNumbers(135577);
        expect(formattedNumber).toEqual("135577");
    }));
    it("If number contains only even digits, then every digit is separated with dash", (() => {
        let formattedNumber = insertDashesBetweenEachTwoEvenNumbers(246826);
        expect(formattedNumber).toEqual("2-4-6-8-2-6");
    }));
    it("If we have odd and even digits, then we separate only even digits", (() => {
        let formattedNumber = insertDashesBetweenEachTwoEvenNumbers(254680);
        expect(formattedNumber).toEqual("254-6-8-0");
    }));
}));