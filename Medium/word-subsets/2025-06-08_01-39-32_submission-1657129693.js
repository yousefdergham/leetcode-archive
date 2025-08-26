/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  let result = []
  for (let index = 0; index < words1.length; index++) {
    let check = []
    for (const element of words2) {
      console.log(element)
      if (words1[index].includes(element)) {
        check.push(true)
      } else {
        check.push(false)
      }
    }
    if (check.includes(false)) {
      continue;
    } else {
      result.push(words1[index])
    }
  }
  return result
};