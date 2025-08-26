/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let allNegative = true;
    let maxValue = -Infinity;

    for (let n of nums) {
        if (n >= 0) allNegative = false;
        maxValue = Math.max(maxValue, n);
    }

    if (allNegative) return maxValue;

    let seen = Array(101).fill(false);
    for (let n of nums) {
        if (n >= 0 && n < 101) seen[n] = true;
    }

    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (seen[i]) sum += i;
    }

    return sum;
};