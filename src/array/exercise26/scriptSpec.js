import {
    findPairOfItemsWhoesSumEqualsTargetNum
} from './script';

describe("Find a pair of items from an given array whose sum equals a specific target number: ", (() => {
    it("if is one element in the array and this element is equal target number, result is first items", () => {
        let result  = findPairOfItemsWhoesSumEqualsTargetNum([20], 20);
        expect(result).toEqual(1);
    });
    it("if are two element in the array and sum this elements is equal target number, result is first and second items", () => {
        let result = findPairOfItemsWhoesSumEqualsTargetNum([10,  10], 20);
        expect(result).toEqual(1,3);
    });
    it("if are three element in the array and sum second and third elements is equal target number, result is second and third items", () => {
        let result = findPairOfItemsWhoesSumEqualsTargetNum([10, 5, 10], 20);
        expect(result).toEqual(1,3);
    });
    it("if are several element in the array and sum two elements closest to each other is equal target number, result is tems  this elements ", () => {
        let result  = ([10,20,10,40,50,60,70], 50);
        expect(result).toEqual([3,4]);
    });
    
}));