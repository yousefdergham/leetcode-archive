/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort((a, b) => a - b);
    let prevCount = 0;
    let maxLen = 0;
    let start = 0;

    for (let i = 0; i < nums.length; ) {
        let count = 0;
        let currentNum = nums[i];

        while (i < nums.length && nums[i] === currentNum) {
            count++;
            i++;
        }

        if (start !== 0 && currentNum - nums[start - 1] === 1) {
            maxLen = Math.max(maxLen, count + prevCount);
        }

        prevCount = count;
        start = i - count + 1;
    }

    return maxLen;
};