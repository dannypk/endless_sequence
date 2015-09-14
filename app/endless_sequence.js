/**
 * Created by daniel.pacurici on 14.09.2015.
 */
var calculateMaximumCycleLength = function (interval) {
    var start = interval.start,
        end = interval.end,
        maxCycleLength = 0,
        currentLength;

    for (var index = start; index <= end; index++) {
        currentLength = calculateEndlessSequence(index);
        if (currentLength > maxCycleLength) maxCycleLength = currentLength;
    }

    return maxCycleLength;
};

var calculateEndlessSequence = function (value) {
    var sequence = 1;

    while (value !== 1) {
        value = operateNumber(value);
        sequence++;
    }
    return sequence;
};

var isOdd = function (value) {
    return value % 2 === 1;
};

var operateNumber = function (value) {
    var newValue = 0;
    isOdd(value) ? (newValue = value * 3 + 1) : (newValue = value / 2);

    return newValue;
};

module.exports = {
    isOdd: isOdd,
    operateNumber: operateNumber,
    calculateEndlessSequence: calculateEndlessSequence,
    calculateMaximumCycleLength: calculateMaximumCycleLength
};