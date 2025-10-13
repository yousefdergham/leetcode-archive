/*
Find Resultant Array After Removing Anagrams
Difficulty: Easy
Language: JavaScript
Runtime: 2 ms
Memory: 62 MB
Submitted: 2025-10-13T12:30:12.656Z
Link: https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/submissions/1800283258/?envType=daily-question&envId=2025-10-13
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
    const result = [];
    let prev = "";

    for (const w of words) {
        const i = w.split('').sort().join('');
        if (i !== prev) {
            result.push(w);
            prev = i;
        }
    }
    return result;
};