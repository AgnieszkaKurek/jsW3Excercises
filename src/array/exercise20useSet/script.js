export function findDuplicateValuesUseSet(arr) {
    let uniqueValues = new Set();
    let duplicateValues = new Set();
    for (const item of arr) {
        if (uniqueValues.has(item)) {
            duplicateValues.add(item);
        } else {
            uniqueValues.add(item);
        }
    }
    return duplicateValues;
}