/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getLongestCountryName*/

describe("Finds the longest country name from given", (() => {

    it("The longest name of the given country  is United States of America", (() => {
        let longestCountryName = getLongestCountryName([["Australia", "Germany", "United States of America"]]);
        expect(longestCountryName).toEqual("United States of America");
    }));
}));