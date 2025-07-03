/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
  let word = "a"
  let steps = 0
  while (word.length < k) {
    let tmp = ""
    for (let i = 0; i < word.length; i++) {
      let newChar = word[i].charCodeAt(0) + 1
      tmp += String.fromCharCode(newChar)
    }
    word = word + tmp
    steps++
  }

  return String.fromCharCode((steps - 2) + 97)
};