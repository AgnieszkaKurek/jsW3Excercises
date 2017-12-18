export function getOrdinalNumbersColorsPosition(colors) {
    let ordinalNumbersColorsPosition =[];
    let suffixes = ["th","st","nd","rd"];
    let counter= 1;
    for (const item of colors) {
        if(counter < 4 ){
        ordinalNumbersColorsPosition.push(`${counter}${suffixes[counter]} choice is ${item}`); 
        }
        else{
            ordinalNumbersColorsPosition.push(`${counter}${suffixes[0]} choice is ${item}`);
        }
        counter ++;
    }
    return ordinalNumbersColorsPosition;
}