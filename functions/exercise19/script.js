export function returnElementsLargerThanNumber(referenceNumber, sequence) {
    if (sequence.some(isNaN)) {
        throw new Error("Array can have numeric values only.");
    }
    return sequence.filter(item => item > referenceNumber);
}