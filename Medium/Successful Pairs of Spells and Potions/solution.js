/*
Successful Pairs of Spells and Potions
Difficulty: Medium
Language: JavaScript
Runtime: 110 ms
Memory: 84.2 MB
Submitted: 2025-10-08T13:40:50.527Z
Link: https://leetcode.com/problems/successful-pairs-of-spells-and-potions/submissions/1795340822/?envType=daily-question&envId=2025-10-08
*/

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b) => a - b);
    const m = potions.length;
    const res = new Array(spells.length);

    for (let i = 0; i < spells.length; ++i) {
        const s = spells[i];
        const need = Math.floor((success + s - 1) / s);
        let l = 0, r = m;
        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (potions[mid] < need) l = mid + 1;
            else r = mid;
        }
        res[i] = m - l;
    }
    return res;
};