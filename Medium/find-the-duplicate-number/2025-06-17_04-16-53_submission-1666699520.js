/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let dup = -1
  let index
  for (let i = 1; i < nums.length; i++) {
    index = 0
    if (nums[i] == nums[index] && dup == -1) {
      dup = nums[i]
    }

  }
  for (let i = nums.length - 1; i >= 0; i--) {
    index = nums.length - 1
    if (nums[i] == nums[index] && dup == -1) {
      dup = nums[i]
    }
  }
  return dup
};