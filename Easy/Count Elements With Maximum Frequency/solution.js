/*
Count Elements With Maximum Frequency
Difficulty: Easy
Language: JavaScript
Runtime: 1 ms
Memory: 57.4 MB
Submitted: 2025-09-23T01:15:19.027Z
Link: https://leetcode.com/problems/count-elements-with-maximum-frequency/submissions/1779644992/?envType=daily-question&envId=2025-09-22
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let freq = {}
    let maxFreq = 0
    for (let i = 0; i < nums.length; i++) {
        let tmp = nums[i]
        freq[tmp] = (freq[tmp] || 0) + 1
        maxFreq = Math.max(maxFreq, freq[tmp])
    }
    let res = 0
    for ([key, value] of Object.entries(freq)) {
        value == maxFreq ? res = res + value : 0
    }

    return res
};