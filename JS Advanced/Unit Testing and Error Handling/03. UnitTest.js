import { assert } from "chai";
import { lookupChar } from "./03. Char Lookup.js";

describe("lookupChar", function () {
    it("Test with invalid values", function () {
        assert.isUndefined(lookupChar("test", "test"), "Invalid values");
        assert.isUndefined(lookupChar("test", ""), "Invalid values");
        assert.isUndefined(lookupChar("test", []), "Invalid values");
        assert.isUndefined(lookupChar("test", "5"), "Invalid values");

        assert.isUndefined(lookupChar(2, "test"), "Invalid values");
        assert.isUndefined(lookupChar(2, "5"), "Invalid values");
        assert.isUndefined(lookupChar(2, []), "Invalid values");
        assert.isUndefined(lookupChar("2", "2"), "Invalid values");

        assert.isUndefined(lookupChar([], []), "Invalid values");
        assert.isUndefined(lookupChar(2, 2), "Invalid values");

        assert.equal(lookupChar("test", -1), "Incorrect index");
        assert.equal(lookupChar("test", 4), "Incorrect index");
        assert.equal(lookupChar("test", 5), "Incorrect index");
    });
    it("Test with valid values", function () {
        assert.equal(lookupChar("test", 0), "t", "Test passed");
        assert.equal(lookupChar("sdfsfgwg", 1), "d", "Test passed");
        assert.equal(lookupChar("wewvbwb", 2), "w", "Test passed");
        assert.equal(lookupChar("qqwfqgq", 3), "f", "Test passed");
    });
});