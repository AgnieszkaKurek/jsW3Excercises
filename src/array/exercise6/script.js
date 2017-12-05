import {
    splitIntoDigits
} from '../../conditionalStatementsAndLoops/exercise8/script';

export function insertDashesBetweenEachTwoEvenNumbers(notFormattedNumber) {
    let formattedNumber = "";
    let previousNumberWasEven = false;
    for (const digit of splitIntoDigits(notFormattedNumber)) {
        let currentNumberIsEven = digit % 2 === 0;
        if (previousNumberWasEven && currentNumberIsEven) {
            formattedNumber += "-";
        }
        formattedNumber += digit;
        previousNumberWasEven = currentNumberIsEven;
    }
    return formattedNumber;
}