/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals isLeapYear*/

describe("Checking if year is leap: ", function(){
    it("year 1996 is a leap year", function(){
        var result = isLeapYear(1996);
        expect(result).toBeTruthy();
    });
    it("year 2000 is a leap year", function(){
        var result = isLeapYear(2000);
        expect(result).toBeTruthy();
    });    
    it("year 2001 is not a leap year", function(){
        var result = isLeapYear(2001);
        expect(result).toBeFalsy();
    });     
});