/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
  let result = [];
  let minIndex = 122
  let leftElement
  let starIndex = null;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      starIndex = i;
      continue;
    }
    result.push(s[i]);
    minIndex = Math.min(s[i].charCodeAt(0), minIndex)
  }
  if (starIndex === null) return s
  leftElement = s.lastIndexOf(String.fromCharCode(minIndex))
  result.splice(leftElement, 1)
  return result.join("")
};