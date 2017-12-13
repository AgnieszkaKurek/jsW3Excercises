export function removeDuplicateItems(checkArray) {
    return checkArray.filter((elem, index, array) =>
        array.indexOf(elem) === index
    );
}
