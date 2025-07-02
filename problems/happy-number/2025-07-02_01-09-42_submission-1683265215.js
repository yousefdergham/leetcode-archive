/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
     if (n <= 3) {
    return false
  }
  let arr = Array.from(n.toString())
  let sum = 0
  while (sum != 1) {
    let tmp = 0
    for (let i = 0; i < arr.length; i++) {
      tmp += Math.pow(Number(arr[i]), 2)
    }
    sum = tmp
    arr = Array.from(sum.toString())
  }
  return sum == 1
};