export function getPositionOfPairsWithSpecifiedSum(array, targetNumber) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetNumber) {
                result.push(i + 1, j + 1);
            }
        }
    }
    return result;
}

