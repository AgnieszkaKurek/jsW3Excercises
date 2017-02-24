'use strict';

function firstSunday() {
    for (var year = 2014; year <= 2050; year++) {
        var d = new Date(year, 0, 1);
        if (d.getDay() === 0) {
            document.getElementById("newYear").innerHTML = `The first day of ${year} is a Sunday.`
        };
    };
};

firstSunday();