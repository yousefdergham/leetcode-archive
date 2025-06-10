/**
 * @param {number[]} nums
 * @return {number[]}
 */
const iterativeMultiply = (arr) => {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};
var productExceptSelf = function (nums) {
  let result = []

  let sum = 1
  for (let i = 0; i < nums.length; i++) {
    let tmp = [...nums]
    tmp.splice(i, 1)
    result.push(iterativeMultiply(tmp))
  }
  return result.sort((a, b) => a + b);
};