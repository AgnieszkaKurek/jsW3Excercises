import {
    moveElemFromOneIndexToAnother
} from './script';

describe("Move an array element from one position to another:", (() => {
    it("source positon must be present in the array", () => {
        expect(() => moveElemFromOneIndexToAnother([1, 2], 3, 0)).toThrow(new Error("Source positon must be present in the array"));
    });
    it("destination positon must be present in the array", () => {
        expect(() => moveElemFromOneIndexToAnother([1, 2], 0, 3)).toThrow(new Error("Destination positon must be present in the array"));
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
}));