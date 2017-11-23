/// <reference path="../../typings/globals/jasmine/index.d.ts" />
/*globals getTheFunctionName*/

describe("Get the function name", (() => {
    it("Function name which get the function name it getTheFunctionName", (() => {
        let functionName = getTheFunctionName("getTheFunctionName");
        expect(functionName).toEqual("getTheFunctionName");
    }));
}));