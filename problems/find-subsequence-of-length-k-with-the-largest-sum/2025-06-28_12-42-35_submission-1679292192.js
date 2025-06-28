/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    if(nums.length ==k){
        return nums
    }
  let tmp = nums.sort((b, a) => a - b)
  return tmp.splice(0, k).reverse()
};