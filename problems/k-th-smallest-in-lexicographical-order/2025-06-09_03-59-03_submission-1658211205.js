/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let result = []
  for (let i = 1; i <= n; i++) {
    result.push(i)
  }
  result.sort()
  return result[1] || result[0]
};