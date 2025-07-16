/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  const parityCounts = [0, 0]
  let lastParity = -1
  let len = 0
  for (const num of nums) {
    const parity = num % 2
    parityCounts[parity]++
    if (lastParity !== parity) {
      len++
      lastParity = parity
    }
  }
  return Math.max(...parityCounts, len)
}