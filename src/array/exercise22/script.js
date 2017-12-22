export function computeTheUnionOfTwoArrays(arrayA, arrayB) {
    let allElemArrays = arrayA.concat(arrayB);
    let notSortElem = removeDableElemArray(allElemArrays);
    let unionArrays = sortElemArray(notSortElem);
    return unionArrays;
}

function removeDableElemArray(arr) {
    return arr.filter((elem, index, array) =>
        array.indexOf(elem) === index
    );
}

function sortElemArray(arr) {
    return arr.sort((a, b) => a - b);
}