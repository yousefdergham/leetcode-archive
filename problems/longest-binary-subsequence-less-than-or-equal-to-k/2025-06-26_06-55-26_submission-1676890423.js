/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function (s, k) {
  let n = s.length;
  let dp = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    dp[i] = dp[i + 1];
    let num = 0;
    let pow = 1;

    for (let j = i; j < n && j < i + 32; j++) {
      if (s[j] === '1') {
        num += pow;
        if (num > k) break;
        dp[i] = Math.max(dp[i], j - i + 1 + dp[j + 1]);
      }
      pow *= 2;
    }
  }

  return dp[1]
};