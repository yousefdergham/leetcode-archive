/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  let maxArr = Array.from(String(num), Number)
  let minArr = Array.from(String(num), Number)
  minVal = minArr.sort((a, b) => a + b)[0]
  maxVal = maxArr.sort((a, b) => a + b)[0]

  let max = maxArr.map(x => x == minVal || x == 0 ? x = 9 : x)
  let min = minArr.map(x => x == minVal ? x = 0 : x)

  return Number(max.join("")) - Number(min.join(""))
};