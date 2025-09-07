/*
Find N Unique Integers Sum up to Zero
Difficulty: Easy
Language: JavaScript
Runtime: 0 ms
Memory: 56.7 MB
Submitted: 2025-09-07T04:16:17.196Z
Link: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/submissions/1762214145/?envType=daily-question&envId=2025-09-07
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let arr = []
  arr[0] = n * (1 - n) / 2
  for (let i = 1; i < n; ++i) {
    arr[i] = i
  }
  return arr
};