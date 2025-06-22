/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  let n = Math.floor(s.length / k) + (s.length % k != 0 ? 1 : 0)
  let arr = Array(n).fill('').map(() => [])
  let tmp
  let i = 0
  for (let j = 0; j < s.length; j += k) {
    tmp = s.slice(j, j + k)
    while (tmp.length < k) {
      tmp += fill
    }
    arr[i] = tmp
    i++
  }
  return arr
};