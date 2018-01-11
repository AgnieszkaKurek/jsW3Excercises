export function getTheMonthNameFromDate(date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObject = { "production_date": date };
    const datailedDate = new Date(dateObject.production_date);
    let month = datailedDate.getMonth();
    return months[month];
}