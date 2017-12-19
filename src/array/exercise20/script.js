export function findDuplicateValues(arr) {
    return arr.filter((value, index, array) =>
        array.indexOf(value) !== index);
}
