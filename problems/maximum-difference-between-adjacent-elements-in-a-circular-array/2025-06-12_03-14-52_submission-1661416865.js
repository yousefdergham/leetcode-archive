/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
  let absArr = nums.map(x => Math.abs(x))
  let f = absArr[0]
  let s = absArr.filter(x => f < x).sort((a, b) => a + b)
  return s[s.length - 1] - f
};