/*
Sort Vowels in a String
Difficulty: Medium
Language: JavaScript
Runtime: 79 ms
Memory: 68.8 MB
Submitted: 2025-09-11T04:49:28.043Z
Link: https://leetcode.com/problems/sort-vowels-in-a-string/submissions/1766751698/?envType=daily-question&envId=2025-09-11
*/

/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    let vowelsStr = "aeiouAEIOU"
    let IsVowel = (char) => vowelsStr.includes(char)
    let vowels = []
    for (let i = 0; i < s.length; i++) {
        if (IsVowel(s[i])) {
            vowels.push(s[i])
        }
    }
    vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    let p = 0
    let result = ""
    for (let i = 0; i < s.length; i++) {
        if (IsVowel(s[i])) {
            result += vowels[p++]
        } else {
            result += s[i]
        }
    }
    return result
};