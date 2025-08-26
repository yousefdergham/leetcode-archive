/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var possibleStringCount = function (word, k) {
    const MOD = 1e9 + 7;
    const n = word.length;

    let groups = [];
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && word[j] === word[i]) {
            j++;
        }
        groups.push(j - i);
        i = j;
    }

    let m = groups.length;


    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let g = 0; g < m; g++) {
        let count = groups[g];
        let ndp = new Array(n + 1).fill(0);

        for (let len = 0; len <= n; len++) {
            if (dp[len] === 0) continue;


            for (let pick = 1; pick <= count; pick++) {
                ndp[len + pick] = (ndp[len + pick] + dp[len]) % MOD;
            }
        }
        dp = ndp;
    }


    let ans = 0;
    for (let len = k; len <= n; len++) {
        ans = (ans + dp[len]) % MOD;
    }
    return ans;
};