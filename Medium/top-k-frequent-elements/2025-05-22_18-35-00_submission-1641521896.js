/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let memo = {}
    for (let i = 0; i < nums.length; i++) {
        if (memo[nums[i]]) {
            memo[nums[i]] += 1
        } else {
            memo[nums[i]] = 1
        }
    }
    let count = 0;
    let result = []
    for (key in memo) {
        if (count >= k) break;
        result.push(parseInt(key))
        count++
    }
    return result;
};