/*
Maximum Number of Words You Can Type
Difficulty: Easy
Language: JavaScript
Runtime: 5 ms
Memory: 54.8 MB
Submitted: 2025-09-15T05:51:12.094Z
Link: https://leetcode.com/problems/maximum-number-of-words-you-can-type/submissions/1771222519/?envType=daily-question&envId=2025-09-15
*/

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    let mask = 0;
    for (let i = 0; i < brokenLetters.length; i++) {
        mask |= 1 << (brokenLetters.charCodeAt(i) - 97);
    }

    let count = 0, brokenWord = false;
    for (let i = 0; i <= text.length; i++) {
        if (i < text.length && (mask & (1 << (text.charCodeAt(i) - 97))) !== 0) brokenWord = true;
        if (i === text.length || text[i] === ' ') {
            if (!brokenWord) count++;
            brokenWord = false;
        }
    }
    return count;
};