import { expect } from "chai";
import { planYourTrip } from './Motorcycle Rider.js';
import { describe } from "mocha";

describe("Test suit", function () {
    describe("choosingDestination Function", () => {
        it("Return correct values", () => {
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.")
        })

        it("Return Incorrect Season", () => {
            expect(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        });

        it("Return Incorrect Season", () => {
            expect(planYourTrip.choosingDestination("Ski Resort", undefined, 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        });

        it("Return Incorrect Destination", () => {
            expect(() => planYourTrip.choosingDestination("Else", "Winter", 2024)).to.throw("This destination is not what you are looking for.");
        })

        it("Return Incorrect Destination", () => {
            expect(() => planYourTrip.choosingDestination(undefined, "Winter", 2024)).to.throw("This destination is not what you are looking for.");
        })

        it("Return Incorrect Year", () => {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw("Invalid Year!");
        });

        it("Return Incorrect Year", () => {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", undefined)).to.throw("Invalid Year!");
        });
    })

    describe("exploreOptions", () => {
        it("Correct", () => {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1)).to.equal("Skiing, Winter Hiking");
        });

        it("Incorrect Length", () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], -1)).to.throw("Invalid Information!");
        })

        it("Incorrect Array", () => {
            expect(() => planYourTrip.exploreOptions((1, 2, 4), 1)).to.throw("Invalid Information!");
        })
        it("Incorrect Index - not an integer", () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], "2")).to.throw("Invalid Information!");
        })
        it("Incorrect ", () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 13)).to.throw("Invalid Information!");
        })

        it("Incorrect ", () => {
            expect(() => planYourTrip.exploreOptions(undefined, 2)).to.throw("Invalid Information!");
        })
    });

    describe("estimateExpenses", () => {
        it("Less then 500", () => {
            expect(planYourTrip.estimateExpenses(10, 20)).to.equal("The trip is budget-friendly, estimated cost is $200.00.");
        });

        it("Equal to 500", () => {
            expect(planYourTrip.estimateExpenses(2, 250)).to.equal("The trip is budget-friendly, estimated cost is $500.00.");
        });

        it("More then 500", () => {
            expect(planYourTrip.estimateExpenses(25, 25)).to.equal("The estimated cost for the trip is $625.00, plan accordingly.");
        });

        it("Invalid Nums", () => {
            expect(() => planYourTrip.estimateExpenses("1", 5)).to.throw("Invalid Information!");
        });

        it("Invalid Nums", () => {
            expect(() => planYourTrip.estimateExpenses(1, "5")).to.throw("Invalid Information!");
        });

        it("Invalid Nums", () => {
            expect(() => planYourTrip.estimateExpenses("1", "5")).to.throw("Invalid Information!");
        });

        it("Invalid Nums", () => {
            expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw("Invalid Information!");
        });

        it("Invalid Nums", () => {
            expect(() => planYourTrip.estimateExpenses(-10, 2)).to.throw("Invalid Information!");
        });

        it("Invalid Nums", () => {
            expect(() => planYourTrip.estimateExpenses(10, -2)).to.throw("Invalid Information!");
        });

        it("Invalid Nums", () => {
            expect(() => planYourTrip.estimateExpenses(undefined, 2)).to.throw("Invalid Information!");
        });

        it("Invalid Nums", () => {
            expect(() => planYourTrip.estimateExpenses(undefined, undefined)).to.throw("Invalid Information!");
        });

        it("Invalid Nums", () => {
            expect(() => planYourTrip.estimateExpenses(10, undefined)).to.throw("Invalid Information!");
        });
    });
});