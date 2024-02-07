import { assert } from "chai";
import {isOddOrEven} from "./02. Even Or Odd.js";

describe("isOddOrEven", ()=> {
    it("Test with non string value",()=>{
        assert.equal(isOddOrEven({prop: "Pesho"}), undefined, "Return type must be undefined");
        assert.equal(isOddOrEven(7), undefined, "Return type must be undefined");
        assert.isNotOk(isOddOrEven([]), false, "Return type must be undefined");
    });

    it("Test with valid string value", () => {
        assert.equal(isOddOrEven("pesho"),"odd", "Result is correct (odd)");
        assert.equal(isOddOrEven("wefwegwrgwergb"),"even", "Result is correct (even)");
    })
})