/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals convertTemperatureFromCelsiusToFahrenheit*/
/*globals convertTemperatureFromFahrenheitToCelsius*/

describe("Convert temperature:", function () {
    it("0 degrees Celsius is 32 degrees Fahrenheit", function () {
        var degreesFahrenheit = convertTemperatureFromCelsiusToFahrenheit(0);
        expect(degreesFahrenheit).toBe(32);
    });
    it("10 degrees Celsius is 50 degrees Fahrenheit", function () {
        var degreesFahrenheit = convertTemperatureFromCelsiusToFahrenheit(10);
        expect(degreesFahrenheit).toBe(50);
    });
});

describe("Convert temperature:", function () {
    it("0 degrees Fahrenheit is -17.777777778 degrees Celsius.", function () {
        var degreesCelsius = convertTemperatureFromFahrenheitToCelsius(0);
        expect(degreesCelsius).toBe(-17.777777778);
    });
    it("60 degrees Fahrenheit is 15.555555556 degrees Celsius.", function () {
        var degreesCelsius = convertTemperatureFromFahrenheitToCelsius(60);
        expect(degreesCelsius).toBe(15.555555556);
    });
});