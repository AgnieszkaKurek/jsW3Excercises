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









var amountToCoins = function (amount, coinArr) {

    var arr = [];


    // Start the loop again if the current amount is greater than the highest coinnumber

    for (var i = 0; i < coinArr.length; i++) {

        if (amount >= coinArr[i]) {

            arr.push(coinArr[i]);
            amount -= coinArr[i];

            // Start the loop over again
            i = -1;
            continue;
        }

    }

    return arr;
};