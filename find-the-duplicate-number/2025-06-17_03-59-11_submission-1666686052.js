/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let dup = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        dup = nums[i]
      }
    }

  }
  return dup
};