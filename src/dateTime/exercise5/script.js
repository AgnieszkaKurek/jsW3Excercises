export function compareDates(dateA, dateB) {
    if (dateA === dateB) return "dateA = dateB";
    else if (dateA > dateB) return "dateA > dateB";
    else return "dateA < dateB";
} 