export function compareDates(dateA, dateB) {
    if (dateA.getTime() === dateB.getTime()) return 0;
    if (dateA > dateB) return 1;
    return -1;
} 