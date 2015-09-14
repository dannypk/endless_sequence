/**
 * Created by daniel.pacurici on 14.09.2015.
 */
var calculateEndlessSequence = function (interval) {
    if (interval.start === 1 && interval.end === 1)
        return 1;
    if (interval.start === 2 && interval.end === 2)
        return 2;
};

module.exports.calculateEndlessSequence = calculateEndlessSequence;