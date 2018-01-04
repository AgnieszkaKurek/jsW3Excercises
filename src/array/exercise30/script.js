import { removeDuplicateItems } from '../exercise14/script.js';

export function mergeArraysAndRemoveDuplicatedItems(arrayA, arrayB) {
    let arr = arrayA.concat(arrayB);
    return removeDuplicateItems(arr);
}