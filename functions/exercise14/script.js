"use strict";

function getAmountOfCoins(amount) {
    var nominals = [25, 10, 5, 2, 1];
    var coin = [];
    var curentCoinIndex = 0;
    while (amount > 0) {
        var curentCoin = nominals[curentCoinIndex];
        while (amount >= curentCoin) {
            coin.push(curentCoin);
            amount -= curentCoin;
        }
        curentCoinIndex++;
    }
    return coin;
}
