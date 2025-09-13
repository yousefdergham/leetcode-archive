/*
Find Most Frequent Vowel and Consonant
Difficulty: Easy
Language: JavaScript
Runtime: 13 ms
Memory: 57 MB
Submitted: 2025-09-13T14:15:32.150Z
Link: https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/submissions/1769338262/?envType=daily-question&envId=2025-09-13
*/

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let freq = {}
    for (let i = 0; i < s.length; i++) {
        let ch = s[i]
        freq[ch] = (freq[ch] || 0) + 1
    }
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let maxV = 0
    let maxC = 0
    for ([key, value] of Object.entries(freq)) {
        if (vowel.includes(key)) {
            maxV = Math.max(maxV, value)
        } else {
            maxC = Math.max(maxC, value)
        }
    }

    return maxV + maxC
};