/*
Adjacent Increasing Subarrays Detection I
Difficulty: Easy
Language: JavaScript
Runtime: 61 ms
Memory: 56.3 MB
Submitted: 2025-10-15T20:39:13.622Z
Link: https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/submissions/1802803649/?envType=daily-question&envId=2025-10-14
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    let inc = 1, prevInc = 0, maxLen = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) inc++;
        else {
            prevInc = inc;
            inc = 1;
        }
        maxLen = Math.max(maxLen, Math.max(inc >> 1, Math.min(prevInc, inc)));
        if (maxLen >= k) return true;
    }
    return false;
};
