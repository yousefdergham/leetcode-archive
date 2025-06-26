/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function (s, k) {
  let sub = []
  function generateSubsequence(input, output) {
    if (input.length == 0) {
      sub.push(output)
      return;
    }
    generateSubsequence(
      input.substring(1), output + input[0]);

    // Exclude
    generateSubsequence(
      input.substring(1), output);
  }
  generateSubsequence(s, "");
  sub.sort((a, b) => a + b)
  console.log(sub)
  let result = ""
  for (let i = 0; i < sub.length; i++) {
    if (Number("0b" + sub[i]) <= k) {
      let tmp =
        result = sub[i].length > result.length ? sub[i] : result
    }

  }
  return result.length
};