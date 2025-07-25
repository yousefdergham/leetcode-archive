/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    if(nums.length==1){
        return nums[0]
    }
  return nums.sort((a, b) => a - b).filter((x, i) => nums[i] !== nums[i + 1] && x > 0).reduce((x, acc) => x + acc, 0)
};