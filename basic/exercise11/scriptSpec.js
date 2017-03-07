/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals convertTemperatureFromCelsiusToFahrenheit*/
/*globals convertTemperatureFromFahrenheitToCelsius*/

describe("Convert temperature from Celsius to Fahrenheit:", function () {
    it("0 degrees Celsius is 32 degrees Fahrenheit", function () {
        var degreesFahrenheit = convertTemperatureFromCelsiusToFahrenheit(0);
        expect(degreesFahrenheit).toBe(32);
    });
    it("10 degrees Celsius is 50 degrees Fahrenheit", function () {
        var degreesFahrenheit = convertTemperatureFromCelsiusToFahrenheit(10);
        expect(degreesFahrenheit).toBe(50);
    });
});

describe("Convert temperature from Fahrenheit to Celsius:", function () {
    it("0 degrees Fahrenheit is -17.78 degrees Celsius.", function () {
        var fixedDegreesCelsius = convertTemperatureFromFahrenheitToCelsius(0);
        expect(fixedDegreesCelsius).toBe("-17.78");
    });
    it("60 degrees Fahrenheit is 15.56 degrees Celsius.", function () {
        var fixedDegreesCelsius  = convertTemperatureFromFahrenheitToCelsius(60);
        expect(fixedDegreesCelsius).toBe("15.56");
    });
});