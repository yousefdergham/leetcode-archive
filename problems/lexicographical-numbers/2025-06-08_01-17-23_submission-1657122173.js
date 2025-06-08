/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  let result = []
  for (let index = 1; index < n; index++) {
    result.push(index)
  }
  return result.sort()
};