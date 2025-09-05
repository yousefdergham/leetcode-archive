/*
Minimum Operations to Make the Integer Zero
Difficulty: Medium
Language: JavaScript
Runtime: 0 ms
Memory: 54.8 MB
Submitted: 2025-09-05T14:30:10.049Z
Link: https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/submissions/1760545485/?envType=daily-question&envId=2025-09-05
*/

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function (num1, num2) {
    const countOnes = n => n.toString(2).replace(/0/g, '').length;

    for (let k = 1; k <= 60; k++) {
        let d = num1 - num2 * k;
        if (d < k) {
            return -1;
        }
        if (k >= countOnes(d)) {
            return k;
        }
    }
    return -1;
};