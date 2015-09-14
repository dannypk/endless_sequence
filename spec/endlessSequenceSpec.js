/**
 * Created by daniel.pacurici on 14.09.2015.
 */
var sequence = require('../app/endless_sequence');

describe("When provided input interval", function(){
    var start, end;
    beforeEach(function(){
        start = 15;
        end = 30;
        const endlessSequences = sequence.calculateEndlessSequence({start:start, end:end});
    });

    it("should be between 0 and 1.000.000", function(){
        expect(start).toBeGreaterThan(0);
        expect(end).toBeLessThan(1000000);
    });

    it("should not have start value greater than end value", function(){
        expect(start).toBeLessThan(end);
    })
});