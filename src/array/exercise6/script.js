export function insertDashesBetweenEachTwoEvenNumbers(notFormattedNumber) {
    let currentDigit = "";
    let digits = notFormattedNumber.toString().split("");
    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];
        let nextDigit = digits[i + 1];
        if (digit % 2 === 0 && nextDigit % 2 === 0) {
            currentDigit += digit + "-";
        } else {
            currentDigit += digit;
        }
    }
    return currentDigit;
}