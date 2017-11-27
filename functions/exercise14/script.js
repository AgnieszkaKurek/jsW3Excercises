export function getAmountOfCoins(amount) {
    var denominations = [25, 10, 5, 2, 1];
    var coins = [];
    var curentDenominationsIndex = 0;
    while (amount > 0) {
        var curentCoin = denominations[curentDenominationsIndex];
        while (amount >= curentCoin) {
            coins.push(curentCoin);
            amount -= curentCoin;
        }
        curentDenominationsIndex++;
    }
    return coins;
}
