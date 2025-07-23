/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  let countAB = 0, countBA = 0;
  let arr = s.split('');
  if (x > y) {
    countAB = processPattern(arr, 'a', 'b');
    countBA = processPattern(arr, 'b', 'a');
  } else {
    countBA = processPattern(arr, 'b', 'a');
    countAB = processPattern(arr, 'a', 'b');
  }

  return countAB * x + countBA * y;
}

function processPattern(arr, first, second) {
  let count = 0;
  let stack = [];

  for (let char of arr) {
    if (char === second && stack[stack.length - 1] === first) {
      stack.pop();
      count++;
    } else {
      stack.push(char);
    }
  }

  arr.length = 0;
  arr.push(...stack);

  return count;
}