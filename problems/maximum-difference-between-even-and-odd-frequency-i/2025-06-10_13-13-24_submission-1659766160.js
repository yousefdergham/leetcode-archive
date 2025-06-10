/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1
  }
  let arr = Object.values(obj)
  let odd = arr.filter(x => x % 2 != 0).sort((a, b) => a + b)
  let even = arr.filter(x => x % 2 == 0).sort((a, b) => a + b)
  return odd[0] - even[0]
};