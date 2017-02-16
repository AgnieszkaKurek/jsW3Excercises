'use strict';
function formatDate(date) {

    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var weekDays = `${days[date.getDay()]}`;
    var hours = date.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    if (hours < 10) {
        hours = "0" + hours;
    };

    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    };

    var seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    };

    var time = `${weekDays} ${hours} ${ampm} ${minutes}: ${seconds}`;
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