/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function (k, operations) {
  let word = "a";

  for (const op of operations) {
    if (op === 0) {
      word += word;
    } else if (op === 1) {
      let nextChars = "";
      for (const char of word) {
        if (char === 'z') {
          nextChars += 'a';
        } else {
          nextChars += String.fromCharCode(char.charCodeAt(0) + 1);
        }
      }
      word += nextChars;
    }
  }

  return word[k - 1];
};