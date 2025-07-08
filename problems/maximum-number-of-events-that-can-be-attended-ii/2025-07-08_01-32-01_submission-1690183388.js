/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
    events.sort((a, b) => a[0] - b[0]);
    function dfs(i, lastEnd, k) {
        if (i === events.length || k === 0) return 0;
        let take = 0;
        if (events[i][0] > lastEnd)
            take = events[i][2] + dfs(i + 1, events[i][1], k - 1);
        let skip = dfs(i + 1, lastEnd, k);
        return Math.max(take, skip);
    }
    return dfs(0, -1, k);
};