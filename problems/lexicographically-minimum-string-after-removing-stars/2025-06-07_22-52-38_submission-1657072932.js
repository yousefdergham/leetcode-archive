/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      let minChar = result.reduce((a, b) => a.charCodeAt(0) < b.charCodeAt(0) ? a : b)
      let leftElement = result.lastIndexOf(minChar)
      if (leftElement !== -1) {
        result.splice(leftElement, 1)
      }
    } else {
      result.push(s[i]);
    }
  }
  return result.join("")
};