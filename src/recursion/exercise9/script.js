export function sortNumbers(notOrderedNumbers) {
    return notOrderedNumbers.sort((a, b) => a - b);
}

export function sortByAge(people) {
    return people.sort((a, b) => a.age - b.age);
}

export function sortByNameLength(people) {
    return people.sort((a, b) => a.name.length - b.name.length);
}

export function sortBySumOfElements(arrays) {
    return arrays.sort((a, b) => a.reduce((c, d) => c + d) - b.reduce((c, d) => c + d));
}