"use strict";

function performCalculate(calculate) {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var result = document.getElementById("result");
    result.value = calculate(number1, number2);
}

function multiplay(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 == 0) {
        return "Action illegal - you can not divide by 0.";
    } else {
        return number1 / number2;
    }
}

function calculateMultiplication() {
    performCalculate(multiplay);
}

function calculateDivision() {
    performCalculate(divide);
}
