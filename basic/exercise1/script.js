'use strict';

function formatAsTwoDigits(timeUnit) {
    return (timeUnit < 10) ? '0' + timeUnit : timeUnit;
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

function formatAndDisplayDate(date, id) {
    var fdate = formatDate(date)
    document.getElementById(id).innerHTML = fdate;
};
formatAndDisplayDate(new Date(2017, 2, 2, 2, 2, 2), "previousDate");
formatAndDisplayDate(new Date, "currentDate");
formatAndDisplayDate(new Date(2017, 11, 11, 11, 11, 11), "nextDate");