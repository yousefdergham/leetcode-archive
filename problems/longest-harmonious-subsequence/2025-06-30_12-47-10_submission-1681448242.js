/**
 * @param {number[]} nums
 * @return {number}
 */

var findLHS = function (nums) {
    let newArr = nums.sort((a, b) => a - b)
    let left = 0
    let right = newArr.length - 1

    while (left <= right) {
        if (newArr[right] - newArr[left] == 1) {
            return right
        }
        right--
        left++
    }
    return 0

};