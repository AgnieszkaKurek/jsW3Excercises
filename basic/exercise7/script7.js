'use strict';

function getNumberOfDaysUntilNextChristmas(date) {
    var oneDayInMiliseconds = 1000 * 60 * 60 * 24;
    var myDate = new Date;
    var christmasDate = new Date(myDate.getFullYear(), 11, 25);
    if (myDate.getMonth() === 11 && myDate.getDate() > 25) {
        christmasDate.setFullYear(christmasDate.getFullYear() + 1)
    };
    var timeUntilChristmas = Math.ceil((christmasDate.getTime() - myDate.getTime()) / (oneDayInMiliseconds));
    var dayUntilChristmas = `There are ${timeUntilChristmas} days to Christmas.`;
    return dayUntilChristmas;
};

var dayUntilChristmas = getNumberOfDaysUntilNextChristmas();
console.log(dayUntilChristmas);
document.getElementById("timeToNextChristmas").innerHTML = dayUntilChristmas;
