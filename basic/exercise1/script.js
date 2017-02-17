'use strict';

function formatAsTwoDigits(timeUnit) {
    return (timeUnit < 10) ? `0${timeUnit}` : timeUnit;
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
function formatshortDate(date) {
    var month = formatAsTwoDigits(date.getMonth());
    var day = formatAsTwoDigits(date.getDay());
    var year = date.getFullYear();
    var shortDate = `${month}-${day}-${year}`;
    return shortDate;

};

function formatAndDisplayDate(date, id, formatFunction) {
    var fdate = formatFunction(date);
    document.getElementById(id).innerHTML = fdate;
};

formatAndDisplayDate(new Date(1986, 4, 2, 5, 7, 6), "Date1", formatshortDate);
formatAndDisplayDate(new Date(2009, 09, 20, 9, 10, 2), "Date2", formatshortDate);
formatAndDisplayDate(new Date(2017, 2, 2, 2, 2, 2), "Date3", formatDate);
formatAndDisplayDate(new Date(), "Date4", formatDate);
formatAndDisplayDate(new Date(2017, 11, 11, 11, 11, 11), "Date5", formatDate);
formatAndDisplayDate(new Date(2020, 2, 6, 2, 22, 20), "Date6", formatshortDate);
formatAndDisplayDate(new Date(2100, 1, 1, 1, 1, 1), "Date7", formatshortDate);
