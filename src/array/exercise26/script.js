export class PositionPair {
    constructor(formerPosition, latterPosition) {
        this.formerPosition = formerPosition;
        this.latterPosition = latterPosition;
    }

    compare(another) {
        if (this.formerPosition > another.formerPosition) {
            return 1;
        } else if (this.formerPosition === another.formerPosition) {
            return this.latterPosition - another.latterPosition;
        } else {
            return -1;
        }
    }

    equals(another) {
        return this.compare(another) === 0;
    }
}

export function getPositionOfPairsWithSpecifiedSum(array, targetNumber) {
    if (array.length < 2) {
        throw new Error("Array should have at least 2 items");
    }
    let result = new Set();
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetNumber) {
                result.add(new PositionPair(i + 1, j + 1));
            }
        }
    }
    return result;
}

