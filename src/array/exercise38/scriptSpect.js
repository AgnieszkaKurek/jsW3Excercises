import {
    movingElemFromOnePositionToAnother
} from './script';

describe("Move an array element from one position to another:", (() => {

    it("if array is empty, expeected array is empty too", () => {
        let changedArray = movingElemFromOnePositionToAnother([], 0, 2);
        expect(changedArray).toEqual([]);
    });
    it("posistions is moved counting from the beginning array, when positions are marked with positive numbers (from 0)", () => {
        let changedArray = movingElemFromOnePositionToAnother([10, 20, 30, 40, 50], 0, 2);
        expect(changedArray).toEqual([20, 30, 10, 40, 50]);
    });
    it("posistions is moved counting from the end array, when positions are marked with negative numbers", () => {
        let changedArray = movingElemFromOnePositionToAnother([10, 20, 30, 40, 50], -1, -2);
        expect(changedArray).toEqual([20, 30, 10, 50, 40]);
    });
}));