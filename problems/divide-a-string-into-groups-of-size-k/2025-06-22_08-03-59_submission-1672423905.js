/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  let result = []
  for (let i = 0; i < s.length; i += k) {
    if (i + 1 >= s.length) {
      let tmp = Array.from([s[i], s[i + 1], s[i + 2]], x => x == undefined ? x = fill : x)
      result.push(tmp.join(""))
    } else {
      result.push([s[i], s[i + 1], s[i + 2]].join(""))

    }
  }
  return result
};