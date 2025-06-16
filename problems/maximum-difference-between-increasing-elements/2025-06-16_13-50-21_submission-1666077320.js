/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let max = -1
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (i < j &&j<nums.length) {
                max = Math.max(max, nums[j] - nums[i])
            }
        }

    }
    return max
};