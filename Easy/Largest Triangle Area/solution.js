/*
Largest Triangle Area
Difficulty: Easy
Language: JavaScript
Runtime: 14 ms
Memory: 62.2 MB
Submitted: 2025-09-27T09:57:26.598Z
Link: https://leetcode.com/problems/largest-triangle-area/submissions/1784071395/?envType=daily-question&envId=2025-09-27
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let maxArea = 0;
    const n = points.length;
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            for (let k = j + 1; k < n; ++k) {
                const [x1, y1] = points[i];
                const [x2, y2] = points[j];
                const [x3, y3] = points[k];
                const area = 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea;
};
