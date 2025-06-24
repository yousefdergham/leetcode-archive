/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  let keysIndex = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == key) {
      keysIndex.push(i)
    }
  }

  let result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < keysIndex.length; j++) {
      if (Math.abs(i - keysIndex[j]) <= k) {
        result.push(i)
        break;
      }
    }
  }
  return result.sort((a, b) => a + b)
};