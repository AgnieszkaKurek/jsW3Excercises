'use strict';

function getNumberOfDaysUntilNextChristmas(date) {
    var oneDayInMiliseconds = 1000 * 60 * 60 * 24;
    var decemberIndex = 11;
    var firstChristmasDays = 25;
    var christmasDate = new Date(date.getFullYear(), decemberIndex, firstChristmasDays);
    if (date.getMonth() === decemberIndex && date.getDate() > firstChristmasDays) {
        christmasDate.setFullYear(christmasDate.getFullYear() + 1)
    };
    var timeUntilChristmas = Math.ceil((christmasDate.getTime() - date.getTime()) / (oneDayInMiliseconds));
    return timeUntilChristmas;
};

var timeUntilChristmas = getNumberOfDaysUntilNextChristmas(new Date());
document.getElementById("timeToNextChristmas1").innerHTML = `There are ${timeUntilChristmas} days to Christmas.`;
var timeUntilChristmas = getNumberOfDaysUntilNextChristmas(new Date(2017, 11, 1));
document.getElementById("timeToNextChristmas2").innerHTML = `There are ${timeUntilChristmas} days to Christmas `;
var timeUntilChristmas = getNumberOfDaysUntilNextChristmas(new Date(2017, 11, 28));
document.getElementById("timeToNextChristmas3").innerHTML = `There are ${timeUntilChristmas} days to Christmas `;

