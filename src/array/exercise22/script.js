import { removeDuplicateItems } from '../exercise14/script.js';
import { sortNumbers } from '../../recursion/exercise9/script.js';

export function mergeAndSort(arrayA, arrayB) {
    let allItems = arrayA.concat(arrayB);
    let uniqueItems = removeDuplicateItems(allItems);
    return sortNumbers(uniqueItems);
}
