'use strict';

function findFirstYearStartingFromSunday(startYear, endYear) {
    var years = [];
        years.push(year);
    for (var year = startYear; year <= endYear; year++) {
        var d = new Date(year, 0, 1);
        if (d.getDay() === 0) {
           
        };
    };
    return years;
};

var years = findFirstYearStartingFromSunday(2014, 2050);
console.log(`The first day of ${years} is Sunday`); 
