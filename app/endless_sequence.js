/**
 * Created by daniel.pacurici on 14.09.2015.
 */
var calculateMaximumCycleLength = function (interval) {
    var start = interval.start,
        end = interval.end;

    var maxCycleLength = 0,
        currentLength;

    for (var index = start; index <= end; index++) {
        currentLength = calculateEndlessSequence(index);
        if (currentLength > maxCycleLength) maxCycleLength = currentLength;
    }

    return maxCycleLength;
};

var calculateEndlessSequence = function (value) {
    if (value === 1) {
        return 1;
    }
    if (value === 2) {
        return 2;
    }
};

module.exports.calculateMaximumCycleLength = calculateMaximumCycleLength;