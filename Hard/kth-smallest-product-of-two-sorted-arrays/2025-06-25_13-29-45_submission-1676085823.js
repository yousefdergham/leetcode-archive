/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function (nums1, nums2, k) {
  const countLessEqual = (target) => {
    let count = 0;
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] * nums2[j] <= target) count++;
      }
    }
    return count;
  };

  let left = -1e10, right = 1e10;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (countLessEqual(mid) >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};