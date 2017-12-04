export function isHappyNumber(checkedNumber) {
    let alreadyRegisteredSumOfSquares = [];
    while (!alreadyRegisteredSumOfSquares.includes(checkedNumber)) {
        alreadyRegisteredSumOfSquares.push(checkedNumber);
        let sumOfSquares = getSumOfSquares(checkedNumber);
        if (sumOfSquares === 1) {
            return true;
        }
        checkedNumber = sumOfSquares;
    }
    return false;
}

function getSumOfSquares(n) {
    let sumOfSquares = 0;
    let digits = splitIntoDigits(n);
    for (const digit of digits) {
        sumOfSquares += digit * digit;
    }
    return sumOfSquares;
}

export function splitIntoDigits(n) {
    let digits = [];
    let stringifiedNumber = n.toString();
    for (const item of stringifiedNumber) {
        digits.push(+item);
    }
    return digits;
}