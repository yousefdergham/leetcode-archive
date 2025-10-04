/*
Container With Most Water
Difficulty: Medium
Language: JavaScript
Runtime: 2 ms
Memory: 62.2 MB
Submitted: 2025-10-04T06:25:29.048Z
Link: https://leetcode.com/problems/container-with-most-water/submissions/1790788960/?envType=daily-question&envId=2025-10-04
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};