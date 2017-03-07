"use strict";

function convertTemperatureFromCelsiusToFahrenheit(degreesCelsius) {
    var degreesFahrenheit = degreesCelsius * 9 / 5 + 32;
    return degreesFahrenheit;
}

function convertTemperatureFromFahrenheitToCelsius(degreesFahrenheit) {
    var degreesCelsius = (degreesFahrenheit - 32) * 5 / 9;
    return degreesCelsius;
}

convertTemperatureFromCelsiusToFahrenheit(0);
convertTemperatureFromCelsiusToFahrenheit(10);
convertTemperatureFromFahrenheitToCelsius(0);
convertTemperatureFromFahrenheitToCelsius(60);
