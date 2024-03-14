import { assert } from "chai";
import { mathEnforcer } from "./04. Math Enforcer.js";

describe("addFive", function () {
    it("Test with invalid values", function () {
        assert.isUndefined(mathEnforcer.addFive("test"), "Return must be undefined");
        assert.isUndefined(mathEnforcer.addFive([]), "Return must be undefined");
    });
    it("Test with valid values", function () {
        assert.equal(mathEnforcer.addFive(-10), -5, "Return value is correct");
        assert.equal(mathEnforcer.addFive(-5), 0, "Return value is correct");
        assert.equal(mathEnforcer.addFive(0), 5, "Return value is correct");
        assert.equal(mathEnforcer.addFive(10), 15, "Return value is correct");
        assert.equal(mathEnforcer.addFive(5.5), 10.5, "Return value is correct");
    });
});
describe("subtractTen", function () {
    it("Test with invalid values", function () {
        assert.isUndefined(mathEnforcer.subtractTen("test"), "Parameter must be a number");
        assert.isUndefined(mathEnforcer.subtractTen([]), "Parameter must be a number");
        assert.isUndefined(mathEnforcer.subtractTen("10"), "Parameter must be a number");
    });
    it("Test with valid values", function () {
        assert.equal(mathEnforcer.subtractTen(-10), -20, "The value is correct");
        assert.equal(mathEnforcer.subtractTen(0), -10, "The value is correct");
        assert.equal(mathEnforcer.subtractTen(10), 0, "The value is correct");
        assert.equal(mathEnforcer.subtractTen(20.5), 10.5, "The value is correct");
    });
});
describe("sum", function () {
    it("Test with invalid values", function () {
        assert.isUndefined(mathEnforcer.sum("test", "test"), "Parameters must be a numbers");
        assert.isUndefined(mathEnforcer.sum("test", []), "Parameters must be a numbers");
        assert.isUndefined(mathEnforcer.sum("test", 10), "Parameters must be a numbers");
        assert.isUndefined(mathEnforcer.sum([], 10), "Parameters must be a numbers");
        assert.isUndefined(mathEnforcer.sum("5", 10), "Parameters must be a numbers");
        assert.isUndefined(mathEnforcer.sum(10, "test"), "Parameters must be a numbers");
        assert.isUndefined(mathEnforcer.sum(10, "10"), "Parameters must be a numbers");
    });
    it("Test with valid values", function () {
        assert.equal(mathEnforcer.sum(-10, 0), -10, "The values are correct");
        assert.equal(mathEnforcer.sum(-10, 10), 0, "The values are correct");
        assert.equal(mathEnforcer.sum(0, 0), 0, "The values are correct");
        assert.equal(mathEnforcer.sum(0, 10), 10, "The values are correct");
        assert.equal(mathEnforcer.sum(10.5, 10.5), 21, "The values are correct");
        assert.equal(mathEnforcer.sum(10, 5.5), 15.5, "The values are correct");
    });
});