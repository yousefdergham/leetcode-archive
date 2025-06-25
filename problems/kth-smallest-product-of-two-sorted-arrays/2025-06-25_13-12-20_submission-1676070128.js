/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function (nums1, nums2, k) {
  let result = []
  let steps = 0
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      result.push(nums1[i] * nums2[j])
      steps++
    }
    if (steps + 1 == k) {
      break
    }
  }
  result.sort((a, b) => a - b)

  return result[k - 1]
};