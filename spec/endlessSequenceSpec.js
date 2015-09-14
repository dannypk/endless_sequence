/**
 * Created by daniel.pacurici on 14.09.2015.
 */
var sequence = require('../app/endless_sequence');

describe("When provided input interval", function () {
    var start, end;

    beforeEach(function () {
        start = 15;
        end = 30;
    });

    it("should be between 0 and 1.000.000", function () {
        expect(start).toBeGreaterThan(0);
        expect(end).toBeLessThan(1000000);
    });

    it("should not have start value greater than end value", function () {
        expect(start).toBeLessThan(end);
    })
});

describe("When interval range is 1 - 1", function () {
    var start = 1, end = 1;
    var maxSequence = sequence.calculateMaximumCycleLength({start: start, end: end});
    it("should return the cycle length equals to 1", function () {
        expect(maxSequence).toBe(1);
    });
});

describe("When interval range is 2 - 2", function () {
    var start = 2, end = 2;
    var maxSequence = sequence.calculateMaximumCycleLength({start: start, end: end});

    it("should return the cycle length equals to 2", function () {
        expect(maxSequence).toBe(2);
    });
});

describe("When interval range is 1 - 2", function () {
    var start = 1, end = 2;
    var maxSequence = sequence.calculateMaximumCycleLength({start: start, end: end});

    it("should return the cycle length equals to 2", function () {
        expect(maxSequence).toBe(2);
    });
});

describe("When value is odd", function () {
    it("should return true", function () {
        var isOdd = sequence.isOdd(3);
        expect(isOdd).toBe(true);
    });

    it("should multiply the value by 3 and add 1", function () {
        var newValueAsOdd = sequence.operateNumber(3);
        expect(newValueAsOdd).toBe(10);
    });
});

describe("When value is even", function () {
    it("should return false", function () {
        var isOdd = sequence.isOdd(2);
        expect(isOdd).toBe(false);
    });

    it("should divide the number by 2", function () {
        var newValueAsEven = sequence.operateNumber(4);
        expect(newValueAsEven).toBe(2);
    });
});

describe("When value is 5", function () {
    var sequenceLength = sequence.calculateEndlessSequence(5);

    it("should return length of 6", function () {
        expect(sequenceLength).toBe(6);
    });
});

describe("When value is 22", function () {
    var sequenceLength = sequence.calculateEndlessSequence(22);

    it("should return the length of 16", function () {
        expect(sequenceLength).toBe(16);
    });
});

describe("When interval of 5 - 22 is provided", function () {
    var start = 5, end = 22;
    var endlessSequence = sequence.calculateMaximumCycleLength({start: start, end: end});

    it("should return the maximum cycle of the interval", function () {
        expect(endlessSequence).toBe(21);
    });
});