/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
    events.sort((a, b) => a[0] - b[0]);
    const dp = Array.from(Array(k + 1), () => Array(events.length + 1).fill(0));

    for (let j = events.length - 1; j >= 0; j--) {
        let left = j + 1;
        let right = events.length;

        while (left < right) {
            const middle = left + right >> 1;

            if (events[middle][0] > events[j][1]) {
                right = middle;
            } else {
                left = middle + 1;
            }
        }

        for (let i = k - 1; i >= 0; i--) {
            dp[i][j] = Math.max(events[j][2] + dp[i + 1][left], dp[i][j + 1]);
        }
    }

    return dp[0][0];
};