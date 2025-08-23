/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return String(Number(digits.join("")) + 1).split("").map(Number);
};