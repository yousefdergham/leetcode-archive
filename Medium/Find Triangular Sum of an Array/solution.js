/*
Find Triangular Sum of an Array
Difficulty: Medium
Language: JavaScript
Runtime: 37 ms
Memory: 55.9 MB
Submitted: 2025-09-30T03:48:58.976Z
Link: https://leetcode.com/problems/find-triangular-sum-of-an-array/submissions/1786845718/?envType=daily-question&envId=2025-09-30
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    while (nums.length > 1) {
        for (let i = 0; i < nums.length - 1; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }
        nums.pop();
    }
    return nums[0];
};