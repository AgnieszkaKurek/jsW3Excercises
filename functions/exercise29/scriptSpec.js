import {getTheFunctionName} from './script';

describe("Get the function name", (() => {
    it("Function name which get the function name it getTheFunctionName", (() => {
        let functionName = getTheFunctionName(function test(){});
        expect(functionName).toEqual("test");
    }));
}));