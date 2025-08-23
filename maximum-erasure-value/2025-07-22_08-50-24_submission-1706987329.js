/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let maxSum = 0;
  let currentSum = 0;
  const seen = new Set();
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    while (seen.has(nums[end])) {
      seen.delete(nums[start]);
      currentSum -= nums[start];
      start++;
    }
    seen.add(nums[end]);
    currentSum += nums[end];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum
};