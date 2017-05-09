"use strict";

function getAmountOfCoins(amount) {
    var denominationsOfCoins = [25, 10, 5, 2, 1];
    var amountOfCoins = [];
    for (var i = 0; i < denominationsOfCoins.length; i++) {
        if (amount >= denominationsOfCoins[i]) {
            amountOfCoins.push(denominationsOfCoins[i]);
            amount -= denominationsOfCoins[i];
            i = -1;
            continue;
        }
    }
    return amountOfCoins;
}