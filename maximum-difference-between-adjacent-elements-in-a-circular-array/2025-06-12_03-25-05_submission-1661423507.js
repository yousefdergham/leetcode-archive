/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let maxDiff = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const next = (i + 1) % n;
        const diff = Math.abs(nums[i] - nums[next]);
        maxDiff = Math.max(maxDiff, diff);
    }
    return maxDiff;
};