/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  return nums.filter((x) => x != 0).concat(nums.filter((x) => x == 0))
};