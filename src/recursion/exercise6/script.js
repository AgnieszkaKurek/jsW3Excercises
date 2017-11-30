export function getFirstFibonacciNumbersWithWhile(amountOfNumbers) {
    if (amountOfNumbers <= 1) {
        throw new Error("Number must be greater than 1");
    }
    let previousItem = 0;
    let currentItem = 1;
    let firstFibonacciNumbers = [previousItem, currentItem];
    let currentAmountOfNumbers = 2;
    while (currentAmountOfNumbers < amountOfNumbers) {
        currentAmountOfNumbers++;
        let sumOfCurrentItems = previousItem + currentItem;
        previousItem = currentItem;
        currentItem = sumOfCurrentItems;
        firstFibonacciNumbers.push(sumOfCurrentItems);
    }
    return firstFibonacciNumbers;
}

export function getFirstFibonacciNumbersWithSelfCall(amountOfNumbers) {
    if (amountOfNumbers <= 1) {
        throw new Error("Number must be greater than 1");
    }
    if (amountOfNumbers == 2) {
        return [0, 1];
    }
    let alreadyCollectedItems = getFirstFibonacciNumbersWithSelfCall(amountOfNumbers - 1);
    let previousItem =alreadyCollectedItems.slice(-2)[0];
    let currentItem = alreadyCollectedItems.slice(-1)[0];
    let sumOfCurrentItems = previousItem + currentItem;
    alreadyCollectedItems.push(sumOfCurrentItems);
    return alreadyCollectedItems;
}