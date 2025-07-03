/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
  let word = "a"
  while (word.length < k) {
    let tmp = ""
    for (let i = 0; i < word.length; i++) {
      let newChar = word[i].charCodeAt(0) + 1
      if (newChar - 1 == 122) {
        tmp += "a"
      } else {
        tmp += String.fromCharCode(newChar)
      }
    }
    word = word + tmp

  }
  console.log(word)
  return word[k - 1]
};