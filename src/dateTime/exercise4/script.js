export function getTheMonthNameFromDate(date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = date.getMonth();
    return months[month];
}