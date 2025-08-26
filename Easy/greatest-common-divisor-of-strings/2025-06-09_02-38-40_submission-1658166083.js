/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1.length == str2.length & str1[0] != str2[0]) {
    return ""
  }
  let stringSet = new Set
  let check = false
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        stringSet.has(str1[i]) ? check = true : ""
        stringSet.add(str1[i])
      }
    }

  }
  let result = Array.from(stringSet)
  return check ? result.join("") : ""
};