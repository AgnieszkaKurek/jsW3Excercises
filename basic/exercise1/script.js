'use strict';

function formatAsTwoDigits(timeUnit) {
    return (timeUnit < 10) ? `0${ timeUnit}`: timeUnit;
};

function formatDate(date) {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var formatWeekDays = `${days[date.getDay()]}`;
    var hours = date.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    var formatHours = formatAsTwoDigits(hours);
    var formatMinutes = formatAsTwoDigits(date.getMinutes());
    var formatSeconds = formatAsTwoDigits(date.getSeconds());
    var time = `${formatWeekDays} ${formatHours} ${ampm} ${formatMinutes}: ${formatSeconds}`;
    return time;
};

var previousDate = new Date(2017, 2, 2, 2, 2, 2);
var formattedPreviousDate = formatDate(previousDate);
document.getElementById("previousDate").innerHTML = formattedPreviousDate;
console.log(formattedPreviousDate);

var currentDate = new Date();
var formattedDate = formatDate(currentDate);
document.getElementById("currentDate").innerHTML = formattedDate;
console.log(formattedDate);

var nextDate = new Date(2017, 11, 11, 11, 11, 11);
var formattedNextDate = formatDate(nextDate);
document.getElementById("nextDate").innerHTML = formattedNextDate;
console.log(formattedNextDate);