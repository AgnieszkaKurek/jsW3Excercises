export function calculateAge(dateOfBirth) {
    const dateObject = { "production_date": dateOfBirth };
    const datailedDate = new Date(dateObject.production_date);
    const birthYear = datailedDate.getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}