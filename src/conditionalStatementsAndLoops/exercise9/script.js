import {
    splitIntoDigits
} from '../exercise8/script';

export function isArmstrongNumber(checkedNumber) {
    let digits = splitIntoDigits(checkedNumber);
    let value = 0;
    for (const digit of digits) {
        value += Math.pow(digit, 3);
    }
    return value === checkedNumber;
}