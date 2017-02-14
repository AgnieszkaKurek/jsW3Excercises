'use strict';
var currentDate = new Date();
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekDays = `Today is : ${days[currentDate.getDay()]}`;
document.getElementById("thisDay").innerHTML = weekDays;

var hours = currentDate.getHours();
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
if (hours < 10) {
    hours = "0" + hours;
};
var minutes = currentDate.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
};

var seconds = currentDate.getSeconds();
if (seconds < 10) {
    seconds = "0" + seconds;
};

var time = `${hours} ${ampm} ${minutes}: ${seconds}`;
document.getElementById("thisTime").innerHTML = time;