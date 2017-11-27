export function findGreatestCommonDivisor(firstNumber, secondNumber) {
    validateIfNumberIsPositiveInteger(firstNumber);
    validateIfNumberIsPositiveInteger(secondNumber);
    while (secondNumber != 0) {
        if (firstNumber > secondNumber)
            firstNumber = firstNumber - secondNumber;
        else
            secondNumber = secondNumber - firstNumber;
    }
    return firstNumber;
}

function validateIfNumberIsPositiveInteger(number) {
    if (!Number.isInteger(number) || number < 1) {
        throw new Error("Both numbers must be positive integers");
    }
}