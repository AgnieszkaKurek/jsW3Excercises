'use strict';

function getNumberOfDaysUntilNextChristmas(date) {
    var oneDayInMiliseconds = 1000 * 60 * 60 * 24;
    var decemberIndex = 11;
    var firstChristmasDays = 25;
    var christmasDate = new Date(date.getFullYear(), decemberIndex, firstChristmasDays);
    if (date.getMonth() === decemberIndex && date.getDate() > firstChristmasDays) {
        christmasDate.setFullYear(christmasDate.getFullYear() + 1);
    };
    var timeUntilChristmas = Math.ceil((christmasDate.getTime() - date.getTime()) / oneDayInMiliseconds);
    return timeUntilChristmas;
};

function displayNumberOfDaysUntilNextChristmas(date, id) {
    var numberOfDaysUntilNextChristmas = getNumberOfDaysUntilNextChristmas(date);
    var informationAboutNuberOfDaysFromDateToNextChrismas = `From ${date} is ${numberOfDaysUntilNextChristmas} days to next Christmas.`;
    document.getElementById(id).innerHTML = informationAboutNuberOfDaysFromDateToNextChrismas;
};

displayNumberOfDaysUntilNextChristmas(new Date(), "timeToNextChristmas1");
displayNumberOfDaysUntilNextChristmas(new Date(2017, 11, 1), "timeToNextChristmas2");
displayNumberOfDaysUntilNextChristmas(new Date(2017, 11, 28), "timeToNextChristmas3");
