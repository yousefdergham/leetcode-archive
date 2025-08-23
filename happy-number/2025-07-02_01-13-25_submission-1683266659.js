/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true;
  if (n < 1) return false;

  let seen = new Set();
  let current = n;

  while (!seen.has(current)) {
    seen.add(current);
    let sum = 0;
    while (current > 0) {
      let digit = current % 10;
      sum += digit * digit;
      current = Math.floor(current / 10);
    }
    if (sum === 1) return true;
    current = sum;
  }

  return false;
};