/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  if (nums.length % 3 !== 0) return [];

  nums.sort((a, b) => a - b);
  const n = nums.length / 3;
  const result = [];

  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i + 2] - nums[i] > k) {
      return [];
    }
    result.push([nums[i], nums[i + 1], nums[i + 2]]);
  }

  return result;
};