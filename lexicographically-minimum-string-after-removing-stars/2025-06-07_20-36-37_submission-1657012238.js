/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
  let result = "";
  for (let str of s) {
    if (str === "*") {
      result = result.slice(0, -1);
    } else {
      result = result + str;
    }
  }
  return result;
};