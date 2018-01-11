export function calculateAge(dateOfBirth) {
    const birthYear = dateOfBirth.getFullYear();
    const currentYear = new Date().getFullYear();
    return birthYear - currentYear;
}
