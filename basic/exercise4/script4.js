'use strict';

function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
};

document.getElementById("leapYear1").innerHTML = isLeapYear(1986);
document.getElementById("leapYear2").innerHTML = isLeapYear(2008);
document.getElementById("leapYear3").innerHTML = isLeapYear(2000);
