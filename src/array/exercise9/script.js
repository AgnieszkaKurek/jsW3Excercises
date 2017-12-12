export function changeCaseSize(text) {
    return text.split("").map(item => item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase()).join("");
}