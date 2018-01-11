export function getNumberOfDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}