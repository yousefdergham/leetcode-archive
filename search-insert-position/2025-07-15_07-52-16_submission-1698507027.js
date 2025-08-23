/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if(nums.length==1){
        return 0
    }
  let start = 0
  let end = nums.length - 1
  let mid
  while (start <= end) {
    mid = Math.floor((start + end) / 2)
    if (nums[mid] == target) {
      return mid
    }
    if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }


  }

  return mid + 1
  
};