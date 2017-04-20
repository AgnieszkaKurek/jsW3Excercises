/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getDataType*/

describe("Getting data type", function () {
    it("variable 1 is number", function () {
        var value = getDataType(1);
        expect(value).toEqual("number");
    });
    it("variable 'hippopotamus' is string", function () {
        var value = getDataType("hippopotamus");
        expect(value).toEqual("string");
    });
    it("variable true is boolean", function () {
        var value = getDataType(true);
        expect(value).toEqual("boolean");
    });
    it("{a: 1} is an Object", function () {
        var value = getDataType({ a: 1 });
        expect(value).toEqual("object");
    });
    it("Empty funtion is a function", function () {
        var value = getDataType(function () { });
        expect(value).toEqual("function");
    });
    it("undefined is undefined", function () {
        var value = getDataType(undefined);
        expect(value).toEqual("undefined");
    });
});
