/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let freq = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1
    return acc
  }, {})
  let lucky = -1
  for (const [key, value] of Object.entries(freq)) {
    if (lucky < value && key == value) {
      lucky = key
    }
  }
  return Number(lucky)
};