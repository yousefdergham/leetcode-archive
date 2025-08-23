/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  let numIndex = nums.map((num, index) => [num, index]);
  numIndex.sort((a, b) => b[0] - a[0]);
  let topK = numIndex.slice(0, k).sort((a, b) => a[1] - b[1]);
  return topK.map(pair => pair[0]);
};