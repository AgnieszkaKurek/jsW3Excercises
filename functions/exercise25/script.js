"use strict";

function getLongestCountryName(countrys) {
    let longestString = 0;
    let longestCountryName = [];
    for (let country of countrys) {
        if (country.length > longestString) {
            longestString = country.length;
            longestCountryName = [];

            longestCountryName.push(country);
        } else if (country.length === longestString) {
            longestCountryName.push(country);
        }
    }
    return longestCountryName;
}
