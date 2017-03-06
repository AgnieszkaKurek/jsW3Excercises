/// <reference path="../../typings/globals/jasmine/index.d.ts" />

describe("Checking if  degrees Celsius ", function(){
    it("is degrees Fahrenheit", function(){
        var temperatureInDegreesFahrenheit =  convertTemperaturesFromCelsiusToFahrenheit(degreesCelsius);
        expect(temperatureInDegreesFahrenheit).toBeTruthy();
    });
});

describe("Checking if  degrees Fahrenheit ", function(){
    it("is degrees Celsius", function(){
        var temperatureInDegreesCelsius =  convertTemperaturesFromFahrenheitToCelsius(degreesFahrenheit);
        expect(temperatureInDegreesCelsius).toBeTruthy();
    });
});