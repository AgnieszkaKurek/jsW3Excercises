export function testDateIsWeekend(checkedDate) {
    const formatedDate = new Date(checkedDate);
    if (!(formatedDate.getDay()%6)) return true;
    else return false;
}

