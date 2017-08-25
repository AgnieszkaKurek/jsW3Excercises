function firstArrayContainsAllItemsOfSecodArray(firstArray, secondArray){
    for (let item of secondArray) {
        if (!firstArray.includes(item)) return false;
    }
    return true;
}

function firstArrayOArraysContainsAllItemsOfSecodArrayOfArrays(firstArrayOfArrays, secondArrayOfArrays){
    for (let item of secondArrayOfArrays) {
        if (firstArrayOfArrays.filter(x => arraysHaveTheSameItems(x, item)).length === 0) return false;
    }
    return true;
}

function arraysHaveTheSameItems(fistArray, secondArray) {
    return  fistArray.length === secondArray.length &&
            firstArrayContainsAllItemsOfSecodArray(fistArray, secondArray) &&
            firstArrayContainsAllItemsOfSecodArray(secondArray, fistArray);
}

function arrayOfArraysHaveTheSameItems(firstArrayOfArrays, secondArrayOfArrays) {
    return  firstArrayOfArrays.length === secondArrayOfArrays.length &&
            firstArrayOArraysContainsAllItemsOfSecodArrayOfArrays(firstArrayOfArrays, secondArrayOfArrays) &&
            firstArrayOArraysContainsAllItemsOfSecodArrayOfArrays(secondArrayOfArrays, firstArrayOfArrays);
}