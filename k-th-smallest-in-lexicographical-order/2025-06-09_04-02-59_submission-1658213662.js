/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
  let curr = 1;
  k--; 

  while (k > 0) {
    let steps = countSteps(n, curr, curr + 1);
    if (steps <= k) {
      curr += 1;
      k -= steps;
    } else {
      curr *= 10;
      k -= 1;
    }
  }

  return curr;
};

function countSteps(n, n1, n2) {
  let steps = 0;
  while (n1 <= n) {
    steps += Math.min(n + 1, n2) - n1;
    n1 *= 10;
    n2 *= 10;
  }
  return steps;
}