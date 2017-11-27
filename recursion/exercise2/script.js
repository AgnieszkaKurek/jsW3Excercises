"use strict";

function findGreatestCommonDivisor(firstNumber, secondNumber) {
    if (!Number.isInteger(firstNumber) || firstNumber < 1) {
        throw new Error("Number must be positive integers");
    }

    while (secondNumber != 0) {
        if (firstNumber > secondNumber)
            firstNumber = firstNumber - secondNumber;
        else
            secondNumber = secondNumber - firstNumber;
    }

    return firstNumber;
}