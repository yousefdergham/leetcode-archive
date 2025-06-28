/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  let tmp = nums.sort((b, a) => a - b)
  return tmp.splice(0, k).sort((a, b) => a - b)
};