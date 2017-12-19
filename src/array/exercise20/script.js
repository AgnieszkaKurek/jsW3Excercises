export function findDuplicateValues(checkArray) {
    return checkArray.filter((value, index, array) =>
        array.indexOf(value) !== index); 
}
