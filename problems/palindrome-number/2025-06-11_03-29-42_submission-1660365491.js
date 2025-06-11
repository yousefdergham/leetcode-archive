/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  let arr = x.toString().split("")
  if ((arr.length == 3 && arr[0] == arr[2]) || arr.length == 1) {
    return true
  }
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(arr.length % 2 ? mid + 1 : mid).reverse()

  return left.join("") === right.join("")
};