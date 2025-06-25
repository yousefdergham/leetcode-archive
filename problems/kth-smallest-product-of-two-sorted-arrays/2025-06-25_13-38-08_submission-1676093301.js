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
      if (nums1[i] === 0) {
        count += nums2.length;
        continue;
      }

      if (nums1[i] > 0) {
        let left = 0;
        while (left < nums2.length && nums1[i] * nums2[left] <= target) {
          count++;
          left++;
        }
      } else {
        let right = nums2.length - 1;
        while (right >= 0 && nums1[i] * nums2[right] <= target) {
          count++;
          right--;
        }
      }
    }
    return count;
  };

  let left = -1e11, right = 1e11;
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