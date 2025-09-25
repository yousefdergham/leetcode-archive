/*
Triangle
Difficulty: Medium
Language: JavaScript
Runtime: 2 ms
Memory: 53.9 MB
Submitted: 2025-09-25T04:55:49.026Z
Link: https://leetcode.com/problems/triangle/submissions/1781926720/?envType=daily-question&envId=2025-09-25
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    for (let i = triangle.length - 2; i >= 0; i--)
        for (let j = 0; j < triangle[i].length; j++)
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])

    return triangle[0][0]
};