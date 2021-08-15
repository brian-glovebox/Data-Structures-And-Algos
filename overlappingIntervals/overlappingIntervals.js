// Given a set of time intervals in any order, merge all overlapping intervals into one and output the result which should have only mutually exclusive intervals. Let the intervals be represented as pairs of integers for simplicity.

// For example, let the given set of intervals be {{1,3}, {2,4}, {5,7}, {6,8} }. The intervals {1,3} and {2,4} overlap with each other, so they should be merged and become {1, 4}. Similarly {5, 7} and {6, 8} should be merged and become {5, 8}

const overlappingIntervals = intervals => {
    // compare intervals added to a stack

    if (intervals.length === 0) return intervals;

    const stack = [];
    // sort the input based on start time
    const sorted = intervals.sort((a, b) => a[0] - b[0]);

    // push the first interval to the stack
    stack.push(sorted[0]);

    for (let i = 1; i < intervals.length; i++) {
        const topInterval = stack[stack.length - 1];

        // if it's not overlapping, push to stack
        if (intervals[i][0] > topInterval[1]) {
            stack.push(intervals[i]);
        } else {
            // update last intervals end to the farther ending
            topInterval[1] = Math.max(intervals[i][1], topInterval[1]);
        }
    }

    return stack;
};