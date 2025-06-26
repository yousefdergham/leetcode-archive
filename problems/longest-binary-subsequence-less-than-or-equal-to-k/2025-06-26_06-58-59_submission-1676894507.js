/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function (s, k) {
    let sm = 0;
    let cnt = 0;
    let bits = Math.log2(k) + 1;
    for (let i = 0; i < s.length; i++) {
        const ch = s[s.length - 1 - i];
        if (ch === "1") {
            if (i < bits && sm + (1 << i) <= k) {
                sm += 1 << i;
                cnt++;
            }
        } else {
            cnt++;
        }
    }
    return cnt;
};;