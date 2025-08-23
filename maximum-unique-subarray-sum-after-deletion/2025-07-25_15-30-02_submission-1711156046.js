/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  if (nums.every(x => x < 0)) {
    let tmp = nums.sort((a, b) => a - b)
    return tmp[tmp.length - 1]
  }

  const unique = new Set(nums.sort((a, b) => a - b));
  let sum = 0
  for (let num of unique) {
    let tmp = sum + num
    if (num < 0) {
      tmp = 0
    }
    sum = Math.max(sum, tmp)
  }

  return sum;
};