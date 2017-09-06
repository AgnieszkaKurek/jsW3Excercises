"use strict";

function getLongestCountryName(countries) {
    let longestString = 0;
    let longestCountriesNames = [];
    for (let country of countries) {
        if (country.length > longestString) {
            longestString = country.length;
            longestCountriesNames = [];
            longestCountriesNames.push(country);
        } else if (country.length === longestString) {
            longestCountriesNames.push(country);
        }
    }
    return longestCountriesNames;
}
