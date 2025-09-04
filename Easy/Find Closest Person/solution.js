/*
Find Closest Person
Difficulty: Easy
Language: JavaScript
Runtime: 1 ms
Memory: 55.5 MB
Submitted: 2025-09-04T04:44:43.666Z
Link: https://leetcode.com/problems/find-closest-person/submissions/1758940059/?envType=daily-question&envId=2025-09-04
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
  let xSteps = Math.abs(z - x)
  let ySteps = Math.abs(z - y)

  if (xSteps == ySteps) {
    return 0
  } else {
    return xSteps > ySteps ? 2 : 1
  }

};