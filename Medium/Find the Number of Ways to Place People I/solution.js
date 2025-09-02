/*
Find the Number of Ways to Place People I
Difficulty: Medium
Language: JavaScript
Runtime: 2 ms
Memory: 57.2 MB
Submitted: 2025-09-02T03:28:24.920Z
Link: https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/submissions/1756540605/?envType=daily-question&envId=2025-09-02
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function (points) {
    points.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    const n = points.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        let top = points[i][1];
        let bot = -Infinity;
        for (let j = i + 1; j < n; j++) {
            let y = points[j][1];
            if (bot < y && y <= top) {
                result++;
                bot = y;
                if (bot === top) break;
            }
        }
    }
    return result;
};
