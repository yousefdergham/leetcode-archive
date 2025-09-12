/*
Vowels Game in a String
Difficulty: Medium
Language: JavaScript
Runtime: 36 ms
Memory: 64.3 MB
Submitted: 2025-09-12T06:26:49.254Z
Link: https://leetcode.com/problems/vowels-game-in-a-string/submissions/1767958793/?envType=daily-question&envId=2025-09-12
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function (s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let even = 1;  
    let odd = 0;
    let parity = 0;

    for (let ch of s) {
        if (vowels.has(ch)) {
            parity ^= 1;  
        }
        if (parity === 0) {
            even++;
        } else {
            odd++;
        }
    }

    return even * odd > 0;
};