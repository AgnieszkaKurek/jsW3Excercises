export function computSumOfEachIndividualElemValue(arrayA, arrayB) {
    let sumOfEachElemValues = [];
    const arraysLength = Math.max(arrayA.length, arrayB.length);
    for (let i = 0; arraysLength > i; i++) {
        const itemA = arrayA[i];
        const itemB = arrayB[i];
        if (itemA && itemB) {
            sumOfEachElemValues.push(itemA + itemB);
        } else if (itemA && !itemB) {
            sumOfEachElemValues.push(itemA);
        } else if (itemB && !itemA) {
            sumOfEachElemValues.push(itemB);
        }
    }
    return sumOfEachElemValues;
}