'use strict';

function calculateMultiplication() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var result = document.getElementById("result");
    result.value = number1 * number2;
};

function calculateDivide() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var result = document.getElementById("result");
    result.value = number1 / number2;
    if (number2 == 0) {
         var result = document.getElementById("result");
        result.value = "Action illegal - you can not divide by 0!!!";
    }
};
