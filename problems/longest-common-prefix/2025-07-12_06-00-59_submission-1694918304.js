/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let tmp = strs[i];
    if (tmp.length < prefix.length) {
      prefix = prefix.slice(0, tmp.length);
    }
    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] !== tmp[j]) {
        prefix = prefix.slice(0, j);
        break;
      }
    }
  }
  return prefix;
};