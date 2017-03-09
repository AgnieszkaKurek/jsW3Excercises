/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals convertTemperatureFromCelsiusToFahrenheit*/
/*globals convertTemperatureFromFahrenheitToCelsius*/
/*globals convertTemperatureBackToCelsius*/
/*globals convertTemperatureBackToFahrenheit*/

describe("Convert temperature from Celsius to Fahrenheit:", function () {
    it("0 degrees Celsius is 32 degrees Fahrenheit", function () {
        var degreesFahrenheit = convertTemperatureFromCelsiusToFahrenheit(0);
        var fixedDegreesFahrenheit = degreesFahrenheit.toFixed(2);
        expect(fixedDegreesFahrenheit).toBe("32.00");
    });
    it("10 degrees Celsius is 50 degrees Fahrenheit", function () {
        var degreesFahrenheit = convertTemperatureFromCelsiusToFahrenheit(10);
        var fixedDegreesFahrenheit = degreesFahrenheit.toFixed(2);
        expect(fixedDegreesFahrenheit).toBe("50.00");
    });
});

describe("Convert temperature from Fahrenheit to Celsius:", function () {
    it("0 degrees Fahrenheit is -17.78 degrees Celsius.", function () {
        var degreesCelsius = convertTemperatureFromFahrenheitToCelsius(0);
        var fixedDegreesCelsius = degreesCelsius.toFixed(2);
        expect(fixedDegreesCelsius).toBe("-17.78");
    });
    it("60 degrees Fahrenheit is 15.56 degrees Celsius.", function () {
        var degreesCelsius  = convertTemperatureFromFahrenheitToCelsius(60);
        var fixedDegreesCelsius = degreesCelsius.toFixed(2);
        expect(fixedDegreesCelsius).toBe("15.56");
    });
});

describe("Convert temperature beck from Fahrenheit to Celsius:", function () {
    it("beck temperature from 32 degrees Fahrenheit to 0 degrees Celsius", function () {
        var backToDegreesCelsius = convertTemperatureBackToCelsius(32);
        var fixedBackToDegeesCelsius = backToDegreesCelsius.toFixed(2);
        expect(fixedBackToDegeesCelsius).toBe("0.00");
    });
    it("beck temperature from 50 degrees Fahrenheit to 10 degrees Celsius", function () {
        var backToDegreesCelsius = convertTemperatureBackToCelsius(50);
        var fixedBackToDegeesCelsius = backToDegreesCelsius.toFixed(2);
        expect(fixedBackToDegeesCelsius).toBe("10.00");
    });
});

describe("Convert temperature beck from Celsius to Fahrenheit:", function () {
    it("back temperature from -17.78 degrees Celsius to 0 degrees Fahrenheit", function () {
        var backToDegreesFahrenheit = convertTemperatureBackToFahrenheit(-17.78);
        var fixedBackToDegeesFahrenheit = backToDegreesFahrenheit.toFixed(2);
        expect(fixedBackToDegeesFahrenheit).toBe("0.00");
    });
    it("back temperature from 15.56 degrees Celsius to 0 degrees Fahrenheit", function () {
        var backToDegreesFahrenheit = convertTemperatureBackToFahrenheit(15.56);
        var fixedBackToDegeesFahrenheit = backToDegreesFahrenheit.toFixed(2);
        expect(fixedBackToDegeesFahrenheit).toBe("60.00");
    });
});
