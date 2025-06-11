/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  let arr = x.toString().split("")
  if ((arr.length == 3 && arr[0] == arr[2])|| arr.length==1) {
    return true
  }
  let mid = Math.ceil(arr.length / 2)

  let right = arr.slice(0, mid)
  let left = arr.slice(mid)
  if (right.sort().join("") === left.sort().join("")|| right.join("") === left.join("")) {
    return true
  }else{
    return false
  }
};