/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    let tmp = strs[i]
    console.log(tmp)
    for (let j = 0; j < tmp.length; j++) {
      if (prefix[j] == tmp[j]) {
        continue
      } else {
        prefix = prefix.slice(0, j)
      }

    }
  }
  return prefix
};