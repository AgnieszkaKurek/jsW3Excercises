export function moveElemFromOneIndexToAnother(arr, source, destination) {
    if ((source < 0 && destination >= 0) || (source >= 0 && destination < 0)) throw new Error("if one position is negative, then second also has must be negative");
    validateIfPositionExistsInArr(arr, source);
    validateIfPositionExistsInArr(arr, destination);
    if (source < 0 && destination < 0) {
        source = arr.length + source;
        destination = arr.length + destination;
    }
    const valueToMove = arr[source];
    arr.splice(source, 1);
    arr.splice(destination, 0, valueToMove);
    return arr;
}

function validateIfPositionExistsInArr(arr, position) {
    if ((position < 0 ? Math.abs(position + 1) : position) >= arr.length) {
        throw new Error("source and destination positons must be present in the array");
    }
}
