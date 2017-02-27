'use strict';

function calculateDaysUntilToNextChristmas() {

    var oneDay = 1000 * 60 * 60 * 24;
    var today = new Date;
    var Christmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() == 11 && today.getDate() > 25) {
        Christmas.setFullYear(Christmas.getFullYear() + 1)
    };
    var timeUntilChristmas = Math.ceil((Christmas.getTime()-today.getTime())/(oneDay));
    return timeUntilChristmas;
};

var timeUntilChristmas = calculateDaysUntilToNextChristmas();
console.log(`There are ${timeUntilChristmas} days to Christmas.`);
document.getElementById("timeToNextChristmas").innerHTML = `There are ${timeUntilChristmas} days to Christmas.`;
