/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var longestSubsequence = function (s, k) {
  let currentSum = 0;
  let maxLength = 0;
  let maxBits = Math.floor(Math.log2(k)) + 1;

  for (let position = 0; position < s.length; position++) {
    let currentDigit = s[s.length - 1 - position];
    if (currentDigit === "1") {
      let powerOfTwo = 1 << position;
      if (position < maxBits && currentSum + powerOfTwo <= k) {
        currentSum += powerOfTwo;
        maxLength++;
      }
    } else {
      maxLength++;
    }
  }

  return maxLength;
}