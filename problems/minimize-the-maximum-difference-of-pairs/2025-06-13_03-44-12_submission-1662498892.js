/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    nums.sort((a, b) => a - b);

    const canFormPairs = (maxDiff) => {
        let count = 0;
        for (let i = 1; i < nums.length; ) {
            if (nums[i] - nums[i - 1] <= maxDiff) {
                count++;
                i += 2; 
            } else {
                i++;
            }
        }
        return count >= p;
    };

    let left = 0;
    let right = nums[nums.length - 1] - nums[0];
    let result = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canFormPairs(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
};