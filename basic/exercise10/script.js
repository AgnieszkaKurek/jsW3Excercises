'use strict';

function calculateMultiplication() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var result = document.getElementById("result");
    result.value = Math.floor(number1 * number2);
};

function calculateDivide() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var result = document.getElementById("result");
    result.value = Math.floor(number1 / number2);
};
