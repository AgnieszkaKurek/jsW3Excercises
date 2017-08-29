/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getLongestCountryName*/

describe("Find country with the longest name from given set of countries", (() => {

    it("The longest name of the given country is United States of America", (() => {
        let longestCountryName = getLongestCountryName(["Australia", "Germany", "United States of America"]);
        expect(longestCountryName).toEqual(["United States of America"]);
    }));

    it("Set of country have one name country, function return one name", (() => {
        let longestCountryName = getLongestCountryName(["Poland"]);
        expect(longestCountryName).toEqual(["Poland"]);
    }));

    it("Set of counrty have a two name cantry with the same number of letters, function return two name", (() => {
        let longestCountryName = getLongestCountryName(["Peru"," Cuba"]);
        expect(longestCountryName).toEqual(["Peru","Cuba"]);
    }));

    it("Set of counrty have a three same  name cantry, function return one name", (() => {
        let longestCountryName = getLongestCountryName(["Peru", "Peru", "Peru"]);
        expect(longestCountryName).toEqual(["Peru"]);
    }));

    it("Set of counrty have a two name cantry with the lenght (Name is multiple words - contains letters and spaces ), function return two name", (() => {
        let longestCountryName = getLongestCountryName(["Antigua and Barbuda", "Czech Republic"]);
        expect(longestCountryName).toEqual([["Antigua and Barbuda", "Czech Republic"]]);
    }));
}));