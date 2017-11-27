function findAllYearStartingFromSunday(startYear, endYear) {
    var years = [];
    for (var year = startYear; year <= endYear; year++) {
        var d = new Date(year, 0, 1);
        if (d.getDay() === 0) {
            years.push(year);
        }
    }
    return years;
}