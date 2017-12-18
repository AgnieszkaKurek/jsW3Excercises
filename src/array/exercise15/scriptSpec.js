import {
    getOrdinalElementsPosition
} from './script';

function generateArraFrom1ToN(n){
    return Array(n).fill().map((e,i)=>i+1);
}

describe("Use ordinal numbers to tell colors position in the array: ", (() => {
    it("if there is one color, only st suffix is used", () => {
        let ordinalNumbersColorsPosition = getOrdinalElementsPosition(["Black"]);
        expect(ordinalNumbersColorsPosition).toEqual(["1st choice is Black"]);
    });
    it("if there are two colors, st and nd suffixes are used", () => {
        let ordinalNumbersColorsPosition = getOrdinalElementsPosition(["Silver", "Gold"]);
        expect(ordinalNumbersColorsPosition).toEqual(["1st choice is Silver", "2nd choice is Gold"]);
    });
    it("if there are seven colors, all suffixes are used and th multiple times", () => {
        let ordinalNumbersColorsPosition = getOrdinalElementsPosition(["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]);
        expect(ordinalNumbersColorsPosition).toEqual(["1st choice is Blue", "2nd choice is Green", "3rd choice is Red", "4th choice is Orange", "5th choice is Violet",
            "6th choice is Indigo", "7th choice is Yellow"]);
    });
    it("For numbers between 10 and 20 we have always suffix th", () => {
        let ordinalNumbersColorsPosition = getOrdinalElementsPosition(generateArraFrom1ToN(15));
        expect(ordinalNumbersColorsPosition[10]).toEqual("11th choice is 11");
        expect(ordinalNumbersColorsPosition[11]).toEqual("12th choice is 12");
        expect(ordinalNumbersColorsPosition[12]).toEqual("13th choice is 13");
        expect(ordinalNumbersColorsPosition[13]).toEqual("14th choice is 14");
        expect(ordinalNumbersColorsPosition[14]).toEqual("15th choice is 15");
    });
    it("If the tens digit of a number is not 1, then write use st nd rd th suffixes", () => {
        let ordinalNumbersColorsPosition = getOrdinalElementsPosition(generateArraFrom1ToN(25));
        expect(ordinalNumbersColorsPosition[20]).toEqual("21st choice is 21");
        expect(ordinalNumbersColorsPosition[21]).toEqual("22nd choice is 22");
        expect(ordinalNumbersColorsPosition[22]).toEqual("23rd choice is 23");
        expect(ordinalNumbersColorsPosition[23]).toEqual("24th choice is 24");
        expect(ordinalNumbersColorsPosition[24]).toEqual("25th choice is 25");
    });
    it("If the tens digit of a number is 1, then write th after the number", () => {
        let ordinalNumbersColorsPosition = getOrdinalElementsPosition(generateArraFrom1ToN(115));
        expect(ordinalNumbersColorsPosition[110]).toEqual("111th choice is 111");
        expect(ordinalNumbersColorsPosition[111]).toEqual("112th choice is 112");
        expect(ordinalNumbersColorsPosition[112]).toEqual("113th choice is 113");
        expect(ordinalNumbersColorsPosition[113]).toEqual("114th choice is 114");
        expect(ordinalNumbersColorsPosition[114]).toEqual("115th choice is 115");
    });
})); 
