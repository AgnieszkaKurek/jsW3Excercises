export function getOrdinalElementsPosition(colors) {
    let ordinalNumbersColorsPosition = [];
    let counter = 1;
    for (const item of colors) {
        const suffix = getOrderSuffix(counter);
        ordinalNumbersColorsPosition.push(`${counter}${suffix} choice is ${item}`);
        counter++;
    }
    return ordinalNumbersColorsPosition;
}

function getOrderSuffix(num) {
    if (isExceptionForTenthDigitOfNumber(num)) return "th";
    const restFromDivisionBy10 = num % 10;
    if (restFromDivisionBy10 === 1) return "st";
    if (restFromDivisionBy10 === 2) return "nd";
    if (restFromDivisionBy10 === 3) return "rd";
    return "th";
}

function isExceptionForTenthDigitOfNumber(num) {
    const restFromDivisionBy100 = num % 100;
    return restFromDivisionBy100 >= 11 && restFromDivisionBy100 <= 14;
}
