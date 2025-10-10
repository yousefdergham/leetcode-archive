/*
Find the Minimum Amount of Time to Brew Potions
Difficulty: Medium
Language: JavaScript
Runtime: 498 ms
Memory: 58.3 MB
Submitted: 2025-10-10T10:47:32.372Z
Link: https://leetcode.com/problems/find-the-minimum-amount-of-time-to-brew-potions/submissions/1797246912/?envType=daily-question&envId=2025-10-09
*/

/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function(skill, mana) {
    const n = skill.length, m = mana.length;
    const done = new Array(n + 1).fill(0);

    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            done[i + 1] = Math.max(done[i + 1], done[i]) + mana[j] * skill[i];
        }
        for (let i = n - 1; i > 0; i--) {
            done[i] = done[i + 1] - mana[j] * skill[i];
        }
    }

    return done[n];
};