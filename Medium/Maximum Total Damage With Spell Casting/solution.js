/*
Maximum Total Damage With Spell Casting
Difficulty: Medium
Language: JavaScript
Runtime: 373 ms
Memory: 94.9 MB
Submitted: 2025-10-11T12:05:01.840Z
Link: https://leetcode.com/problems/maximum-total-damage-with-spell-casting/submissions/1798208536/?envType=daily-question&envId=2025-10-11
*/

/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function (power) {
    const freq = new Map();
    for (const p of power) freq.set(p, (freq.get(p) || 0) + 1);
    const keys = Array.from(freq.keys()).sort((a, b) => a - b);
    const n = keys.length;
    const dp = Array(n).fill(0);
    dp[0] = freq.get(keys[0]) * keys[0];
    for (let i = 1; i < n; i++) {
        let take = freq.get(keys[i]) * keys[i];
        let l = 0, r = i - 1, ans = -1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (keys[mid] <= keys[i] - 3) {
                ans = mid;
                l = mid + 1;
            } else r = mid - 1;
        }
        if (ans >= 0) take += dp[ans];
        dp[i] = Math.max(dp[i - 1], take);
    }
    return dp[n - 1];
};
