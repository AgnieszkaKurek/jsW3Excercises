/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals convertTemperatureFromCelsiusToFahrenheit*/
/*globals convertTemperatureFromFahrenheitToCelsius*/

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

describe("Conversion does not lose precision when it is converted and converted back:", function () {  
    it("converting 0 degrees Fahrenheit to Celcius and back to Fahrenheit gives 0 Fahrenheit again", function(){
        var degreesCelsius = convertTemperatureFromFahrenheitToCelsius(0);
        var degreesFahrenheit = convertTemperatureFromCelsiusToFahrenheit(degreesCelsius);
        expect(degreesFahrenheit).toBe(0);
    });
});

describe("Conversion does not lose precision when it is converted and converted back:", function () {  
    it("converting 0 degrees Celcius to Fahrenheit and back to Celcius gives 0 Celcius again", function(){
        var degreesFahrenheit = convertTemperatureFromCelsiusToFahrenheit(0);
        var degreesCelsius = convertTemperatureFromFahrenheitToCelsius(degreesFahrenheit);
        expect(degreesCelsius).toBe(0);
    });
});