/*
Valid Triangle Number
Difficulty: Medium
Language: JavaScript
Runtime: 22 ms
Memory: 57.4 MB
Submitted: 2025-09-26T03:56:38.865Z
Link: https://leetcode.com/problems/valid-triangle-number/submissions/1782899072/?envType=daily-question&envId=2025-09-26
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a,b) => a - b);
    const n = nums.length;
    let count = 0;
    for (let k = n - 1; k >= 2; k--) {
        let i = 0, j = k - 1;
        while (i < j) {
            if (nums[i] + nums[j] > nums[k]) {
                count += j - i;
                j--;
            } else {
                i++;
            }
        }
    }
    return count;
};