'use strict';

function leapYear(year){
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
};

document.getElementById("leapYear1").innerHTML = leapYear(1986);
document.getElementById("leapYear2").innerHTML = leapYear(2008);
document.getElementById("leapYear3").innerHTML = leapYear(2000);

