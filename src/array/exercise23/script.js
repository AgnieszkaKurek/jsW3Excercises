
import { sortNumbers } from '../../recursion/exercise9/script.js';
import { flattenNestedArray } from '../exercise21/script.js';

export function differenceOfArrays(arrayA, arrayB) {
    let allItems = arrayA.concat(arrayB);
    let flattenedArray = flattenNestedArray(allItems);
    let uniqueItems = findUniqueItems(flattenedArray);
    return sortNumbers(uniqueItems);
}

function findUniqueItems(arr) {
    return arr.filter((val) => arr.indexOf(val) === arr.lastIndexOf(val));
}