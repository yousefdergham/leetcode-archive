/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
  let result = ""
  for (const char of s) {
    if (char === '#') {
      result = result + result;
    } else if (char === '*') {
      let tmp = [...result];
      tmp.pop();
      result = tmp.join('');
    } else if (char === '%') {
      result = result.split('').reverse().join('');
    } else {
      result = result + char
    }

  }
  return result
};