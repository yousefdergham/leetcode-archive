/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let memo = {}
    for (num of nums) {
        memo[num] = (memo[num] || 0) + 1
    }
    let sortedObj = Object.entries(memo).sort((a, b) => b[1] - a[1]);

    let count = 0;
    let result = []
    for (key in sortedObj) {
        if (count >= k) break;
        result.push(parseInt(sortedObj[key][0]))
        count++
    }
    return result;
};