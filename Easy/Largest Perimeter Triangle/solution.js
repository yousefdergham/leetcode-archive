/*
Largest Perimeter Triangle
Difficulty: Easy
Language: JavaScript
Runtime: 24 ms
Memory: 58.2 MB
Submitted: 2025-09-28T03:45:55.849Z
Link: https://leetcode.com/problems/largest-perimeter-triangle/submissions/1784884927/?envType=daily-question&envId=2025-09-28
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a)
    for (let i = 0; i < nums.length - 2; i++)
        if (nums[i + 1] + nums[i + 2] > nums[i])
            return nums[i] + nums[i + 1] + nums[i + 2]
    return 0
};