export function dateIsWeekend(date) {
    return !(date.getDay() % 6);
}