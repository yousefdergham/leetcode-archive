/*
Avoid Flood in The City
Difficulty: Medium
Language: JavaScript
Runtime: 227 ms
Memory: 86.4 MB
Submitted: 2025-10-07T14:58:33.669Z
Link: https://leetcode.com/problems/avoid-flood-in-the-city/submissions/1794308013/?envType=daily-question&envId=2025-10-07
*/

/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
    let n = rains.length;
    let res = new Array(n).fill(-1);

    let hash = new Map();
    let dryDays = [];

    for (let i = 0; i < n; i++) {
        if (rains[i] == 0) {
            dryDays.push(i);
        }
        else {
            let lake = rains[i];
            if (hash.has(lake)) {
                let j = 0;
                while (j < dryDays.length && dryDays[j] < hash.get(lake) - 1) {
                    j++;
                }
                if (j >= dryDays.length) return [];
                else {
                    res[dryDays[j]] = lake;
                    dryDays.splice(j, 1);
                    hash.set(lake, i + 1);
                }
            } else {
                hash.set(lake, i + 1);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (rains[i] == 0 && res[i] == -1) res[i] = 1;
    }
    return res;
};