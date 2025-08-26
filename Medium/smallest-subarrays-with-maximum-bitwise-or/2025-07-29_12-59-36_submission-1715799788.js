/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(Infinity);
    
    for (let i = 0; i < n; i++) {
        let currentValue = nums[i];
        res[i] = 1;
        let j = i - 1;

        while (j >= 0 && (nums[j] | currentValue) !== nums[j]) {
            res[j] = i - j + 1;
            nums[j] |= currentValue;
            j--;  
        }
    }
    
    return res;
};