export function getTheMonthNameFromDate(date, locale="en-us") {
    return date.toLocaleString(locale, { month: "long" });
}