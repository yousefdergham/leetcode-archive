/*
Adjacent Increasing Subarrays Detection II
Difficulty: Medium
Language: JavaScript
Runtime: 91 ms
Memory: 76.7 MB
Submitted: 2025-10-15T20:37:29.199Z
Link: https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/submissions/1802802825/?envType=daily-question&envId=2025-10-15
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    let n = nums.length, up = 1, preUp = 0, res = 0;
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i-1]) up++;
        else {
            preUp = up;
            up = 1;
        }
        let half = up >> 1;
        let m = Math.min(preUp, up);
        let candidate = Math.max(half, m);
        if (candidate > res) res = candidate;
    }
    return res;
};
