/// <reference path="../../typings/globals/jasmine/index.d.ts" />

describe(" Degrees Celsius" , function(){
    it("is convert to degrees Fahrenheit", function(){
        var degreesFahrenheit =  convertTemperatureFromCelsiusToFahrenheit(10);
        expect(degreesFahrenheit).toEqual(50);
    });
});

describe(" Degrees Fahrenheit ", function(){
    it("is convert to degrees Celsius", function(){
        var degreesCelsius =  convertTemperaturesFromFahrenheitToCelsius(60);
        expect(degreesCelsius).toEqual(15.56);
    });
});