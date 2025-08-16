/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let arr = Array.from(String(num))
  let max = Number(arr.join(""))
  for (let i = 0; i < arr.length; i++) {
    let tmp = [...arr]
    if (arr[i] == "6") {
      tmp[i] = "9"
      max = Math.max(max, Number(tmp.join("")))
    }
    if (arr[i] == "9") {
      tmp[i] = "6"
      max = Math.max(max, Number(tmp.join("")))
    }
  }
  return max
};