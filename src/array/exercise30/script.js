import { removeDuplicateItems } from '../exercise14/script.js';

export function mergeArraysAndRemovesDuplicateItems(arrayA, arrayB) {
    let arr = arrayA.concat(arrayB);
    return removeDuplicateItems(arr);
}