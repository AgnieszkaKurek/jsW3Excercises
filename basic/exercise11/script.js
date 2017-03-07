"use strict";

function convertTemperatureFromCelsiusToFahrenheit(degreesCelsius) {
    var degreesFahrenheit = degreesCelsius * 9 / 5 + 32;
    return degreesFahrenheit;
}

function convertTemperatureFromFahrenheitToCelsius(degreesFahrenheit) {
    var degreesCelsius = (degreesFahrenheit - 32) * 5 / 9;
    //return degreesCelsius;
    var fixedDegreesCelsius = degreesCelsius.toFixed(2);
    return fixedDegreesCelsius;
}
