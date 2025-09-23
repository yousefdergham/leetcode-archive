/*
Compare Version Numbers
Difficulty: Medium
Language: JavaScript
Runtime: 0 ms
Memory: 55 MB
Submitted: 2025-09-23T01:17:59.735Z
Link: https://leetcode.com/problems/compare-version-numbers/submissions/1779646160/?envType=daily-question&envId=2025-09-23
*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);

    const maxLength = Math.max(v1.length, v2.length);
    while (v1.length < maxLength) v1.push(0);
    while (v2.length < maxLength) v2.push(0);

    for (let i = 0; i < maxLength; i++) {
        if (v1[i] < v2[i]) return -1;
        if (v1[i] > v2[i]) return 1;
    }

    return 0;
};