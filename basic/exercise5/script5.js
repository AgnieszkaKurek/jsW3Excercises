'use strict';

function firstSunday (yearX, yearY){
    for (var year = yearX; year <= yearY;  year++) {
        var d = new Date(year, 0, 1);
         if (d.getDay() === 0){
           console.log(`The first day of ${year} is a Sunday.`);
         };
    };
};

firstSunday(2014, 2050);
