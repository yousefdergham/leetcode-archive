/*
Taking Maximum Energy From the Mystic Dungeon
Difficulty: Medium
Language: JavaScript
Runtime: 67 ms
Memory: 68.4 MB
Submitted: 2025-10-10T10:45:35.924Z
Link: https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/submissions/1797245725/?envType=daily-question&envId=2025-10-10
*/

/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    const n = energy.length;
    let ans = -Infinity;
    for (let r = 0; r < k; ++r) {
        let cur = 0;
        const last = r + Math.floor((n - 1 - r) / k) * k;
        for (let i = last; i >= r; i -= k) {
            cur += energy[i];
            if (cur > ans) ans = cur;
        }
    }
    return ans;
};