export function factorialOfNumber(number) {
    if (!Number.isInteger(number) || number < 0) {
        throw new Error("Number must be natural number (including 0)");
    }
    let factorial = 1;
    if (number === 0) {
        return factorial;
    } else {
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}