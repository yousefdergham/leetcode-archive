/*
Convert Integer to the Sum of Two No-Zero Integers
Difficulty: Easy
Language: JavaScript
Runtime: 0 ms
Memory: 54.7 MB
Submitted: 2025-09-08T18:05:56.554Z
Link: https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/submissions/1764138420/?envType=daily-question&envId=2025-09-08
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    function containsZero(num) {
        while (num > 0) {
            if (num % 10 === 0) return true;
            num = Math.floor(num / 10);
        }
        return false;
    }

    for (let i = 1; i < n; i++) {
        let j = n - i;
        if (!containsZero(i) && !containsZero(j)) {
            return [i, j];
        }
    }
    return [];
};