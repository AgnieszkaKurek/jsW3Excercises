'use strict';

function findFirstYearStartingFromSunday(startYear, endYear) {
    for (var year = startYear; year <= endYear; year++) {
        var d = new Date(year, 0, 1);
        if (d.getDay() === 0) {
          return year;
        };
    };
};

var year = findFirstYearStartingFromSunday(2014, 2050);
console.log(`The first day of ${year} is a Sunday`); 
