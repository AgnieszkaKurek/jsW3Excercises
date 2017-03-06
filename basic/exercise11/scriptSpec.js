/// <reference path="../../typings/globals/jasmine/index.d.ts" />

describe("10 degrees Celsius" , function(){
    it("is 50 degrees Fahrenheit", function(){
        var degreesFahrenheit =  convertTemperatureFromCelsiusToFahrenheit(10);
        expect(degreesFahrenheit).toEqual(50);
    });
});

describe("60 degrees Fahrenheit ", function(){
    it("is 15.56 degrees Celsius", function(){
        var degreesCelsius =  convertTemperaturesFromFahrenheitToCelsius(60);
        expect(degreesCelsius).toEqual(15,56);
    });
});