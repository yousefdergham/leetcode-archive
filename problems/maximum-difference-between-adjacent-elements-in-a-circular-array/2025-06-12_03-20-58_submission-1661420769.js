/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let absArr = nums.sort((a, b) => a - b)
  let f = absArr[0]
  let s = absArr.filter(x => f < x).sort((a, b) => a - b)
  if (s.length === 0) return 0 
  return s[s.length - 1] - f
};