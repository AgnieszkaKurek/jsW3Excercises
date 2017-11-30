import {
    mergeAndSortNumbersfromArray
} from './script';

describe("Merge and sort nubers from array", (() => {
    
    it("Numbers from a given array [34,7,23,32,5,62], were ordereded from the smallest to the largest [5, 7, 23, 32, 34, 62]", (() => {
        let  orderedNumbers= mergeAndSortNumbersfromArray([34,7,23,32,5,62]);
        expect(orderedNumbers).toEqual([5, 7, 23, 32, 34, 62]);
    }));
    
}));