/*
Water Bottles II
Difficulty: Medium
Language: JavaScript
Runtime: 64 ms
Memory: 53.7 MB
Submitted: 2025-10-02T05:00:19.702Z
Link: https://leetcode.com/problems/water-bottles-ii/submissions/1788847398/?envType=daily-question&envId=2025-10-02
*/

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let full = numBottles;
    let empty = 0;
    let ans = 0;
    let curEx = numExchange;

    while (full > 0) {
        ans += full;
        empty += full;
        full = 0;

        while (empty >= curEx) {
            empty -= curEx;
            full += 1;
            curEx += 1;
        }
    }
    return ans;
};