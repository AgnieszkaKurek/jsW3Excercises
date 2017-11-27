export function convertTemperatureFromCelsiusToFahrenheit(degreesCelsius) {
    var degreesFahrenheit = degreesCelsius * 9 / 5 + 32;
    return degreesFahrenheit;
}

export function convertTemperatureFromFahrenheitToCelsius(degreesFahrenheit) {
    var degreesCelsius = (degreesFahrenheit - 32) * 5 / 9;
    return degreesCelsius;
}
