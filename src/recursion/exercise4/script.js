export function sumOfAnArrayOfIntegers(array) {
    if (array.some(item => isNaN(item) || !Number.isInteger(item))) {
        throw new Error("Array must contain integers only");
    }
    return array.reduce((a, b) => a + b, 0);
}