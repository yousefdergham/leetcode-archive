/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
  let count = 1
  let obj = {}
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i + 1]) {
      obj[word[i]] = (obj[word[i]] || 0) + 1
    }
  }
  arrObj = Object.entries(obj)
  for (const [key, value] of arrObj) {
      count += value
  }
  return count
};