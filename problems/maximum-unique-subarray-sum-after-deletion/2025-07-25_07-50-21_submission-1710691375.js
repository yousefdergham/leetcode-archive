/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  return nums.sort((a, b) => a - b).filter((x, i) => nums[i] !== nums[i + 1] && x > 0).reduce((x, acc) => x + acc, 0)
};