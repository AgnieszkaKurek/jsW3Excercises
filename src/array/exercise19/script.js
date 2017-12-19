export function  computSumOfEachIndividualElemValue(arrayA, arrayB){
    let sumOfEachElemValue = [];
    let arraysLength = Math.max(arrayA.length, arrayB.length);
    for (let i = 0; arraysLength > i; i++) {
        let itemA = arrayA[i];
        let itemB = arrayB[i];
       if(itemA && itemB){
       sumOfEachElemValue.push(itemA + itemB);
    } else if (itemA && !itemB){
        sumOfEachElemValue.push(itemA);
    } else if (itemB && !itemA){
        sumOfEachElemValue.push(itemB);
    }
    }
    return sumOfEachElemValue;
}