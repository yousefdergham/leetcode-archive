/*
Maximum Area of Longest Diagonal Rectangle
Difficulty: Easy
Language: JavaScript
Runtime: 1 ms
Memory: 57.4 MB
Submitted: 2025-08-26T00:59:40.266Z
Link: https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/submissions/1748363267/?envType=daily-question&envId=2025-08-26
*/

/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxArea = 0, maxDiag = 0;

    for (let i = 0; i < dimensions.length; i++) {
        let l = dimensions[i][0];
        let w = dimensions[i][1];
        let currDiag = l * l + w * w;

        if (currDiag > maxDiag || (currDiag === maxDiag && l * w > maxArea)) {
            maxDiag = currDiag;
            maxArea = l * w;
        }
    }
    return maxArea;
};