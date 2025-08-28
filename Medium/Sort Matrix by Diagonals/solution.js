/*
Sort Matrix by Diagonals
Difficulty: Medium
Language: JavaScript
Runtime: 18 ms
Memory: 66.1 MB
Submitted: 2025-08-28T00:43:02.878Z
Link: https://leetcode.com/problems/sort-matrix-by-diagonals/submissions/1750745176/?envType=daily-question&envId=2025-08-28
*/

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function (grid) {
  let map = {}
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      let d = i - j
      map[d] = map[d] || [];
      map[d].push(grid[i][j]);
    }
  }
  for (const [i, element] of Object.entries(map)) {
    if (i >= 0) {
      element.sort((a, b) => b - a)
    } else {
      element.sort((a, b) => a - b)
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      let d = i - j;
      grid[i][j] = map[d].shift();
    }
  }
  return grid
}