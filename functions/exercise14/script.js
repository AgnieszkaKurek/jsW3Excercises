"use strict";

function getAmountOfCoins(amount) {
    var denominationsOfCoins = [25, 10, 5, 2, 1];
    var amountOfCoins = [];
    while (amount > 0) {
        for (var i = 0; i < denominationsOfCoins.length; i++) {
            var curentCoins = denominationsOfCoins[i];
            if (amount >= curentCoins) {
                amountOfCoins.push(curentCoins);
                amount -= curentCoins;
                i = -1;
            }
        }
    }
    return amountOfCoins;
}
