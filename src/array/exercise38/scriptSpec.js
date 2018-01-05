import {
    moveElemFromOneIndexToAnother
} from './script';

describe("Move an array element from one position to another:", (() => {
    it("source positon must be present in the array", () => {
        expect(() => moveElemFromOneIndexToAnother([1, 2], 3, 0)).toThrow(new Error("source and destination positons must be present in the array"));
    });
    it("destination positon must be present in the array", () => {
        expect(() => moveElemFromOneIndexToAnother([1, 2], 0, 3)).toThrow(new Error("source and destination positons must be present in the array"));
    });
    it("negative source positon must be present in the array", () => {
        expect(() => moveElemFromOneIndexToAnother([1, 2], -3, -1)).toThrow(new Error("source and destination positons must be present in the array"));
    });
    it("negative destination positon must be present in the array", () => {
        expect(() => moveElemFromOneIndexToAnother([1, 2], -1, -3)).toThrow(new Error("source and destination positons must be present in the array"));
    });
    it("source and destination must be of the same sign", () => {
        expect(() => moveElemFromOneIndexToAnother([1, 2], -1, 1)).toThrow(new Error("if one position is negative, then second also has must be negative"));
    });
    it("negative position must be used only with another negative position", () => {
        expect(() => moveElemFromOneIndexToAnother([1, 2], -1, 0)).toThrow(new Error("if one position is negative, then second also has must be negative"));
    });
    it("positions are counted from 0", () => {
        const changedArray = moveElemFromOneIndexToAnother([1, 2], 0, 1);
        expect(changedArray).toEqual([2, 1]);
    });
    it("items might be moved by several positions", () => {
        const changedArray = moveElemFromOneIndexToAnother([1, 2, 3, 4], 1, 3);
        expect(changedArray).toEqual([1, 3, 4, 2]);
    });
    it("if source and destination position is the same, then array does not change", () => {
        const changedArray = moveElemFromOneIndexToAnother([1, 2, 3, 4], 2, 2);
        expect(changedArray).toEqual([1, 2, 3, 4]);
    });
    it("if destination is bigger than source, then item is moved to the front", () => {
        const changedArray = moveElemFromOneIndexToAnother([1, 2, 3, 4], 2, 1);
        expect(changedArray).toEqual([1, 3, 2, 4]);
    });
    it("negative position means that we count index from the rigth side", () => {
        const changedArray = moveElemFromOneIndexToAnother([1, 2, 3, 4], -1, -3);
        expect(changedArray).toEqual([1, 4, 2, 3]);
    });
    it("using negative position we may move item to the end", () => {
        const changedArray = moveElemFromOneIndexToAnother([1, 2, 3, 4], -3, -1);
        expect(changedArray).toEqual([1, 3, 4, 2]);
    });
}));