/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
  let freq = [...word].reduce((acc, x) => {
    acc[x] = (acc[x] || 0) + 1;
    return acc;
  }, {});
  let count = 1
  for (const [key, value] of Object.entries(freq)) {
    count += value - 1
  }
  return count
};