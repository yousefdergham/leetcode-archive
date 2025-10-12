/*
Find Sum of Array Product of Magical Sequences
Difficulty: Hard
Language: JavaScript
Runtime: 185 ms
Memory: 67.5 MB
Submitted: 2025-10-12T17:54:00.857Z
Link: https://leetcode.com/problems/find-sum-of-array-product-of-magical-sequences/submissions/1799598930/?envType=daily-question&envId=2025-10-12
*/

/**
 * @param {number} m
 * @param {number} k
 * @param {number[]} nums
 * @return {number}
 */
var magicalSum = function (m, k, nums) {
    const MOD = 1000000007n;
    const n = nums.length;

    // factorials and inverse factorials (BigInt)
    const fact = Array(m + 1).fill(0n);
    fact[0] = 1n;
    for (let i = 1; i <= m; i++) fact[i] = (fact[i - 1] * BigInt(i)) % MOD;

    function modPow(base, exp) {
        let b = base % MOD, e = BigInt(exp), r = 1n;
        while (e > 0n) {
            if (e & 1n) r = (r * b) % MOD;
            b = (b * b) % MOD;
            e >>= 1n;
        }
        return r;
    }
    const invFact = Array(m + 1).fill(0n);
    invFact[m] = modPow(fact[m], Number(MOD - 2n));
    for (let i = m; i > 0; i--) invFact[i - 1] = (invFact[i] * BigInt(i)) % MOD;

    // we precompute nums[i]^c (BigInt)
    const powNum = nums.map(v => {
        const b = BigInt(v);
        const row = Array(m + 1).fill(0n);
        row[0] = 1n;
        for (let c = 1; c <= m; c++) row[c] = (row[c - 1] * b) % MOD;
        return row;
    });

    // dp[used][j][carry] rolled over indices
    let dp = Array.from({ length: m + 1 }, () =>
        Array.from({ length: k + 1 }, () =>
            Array(m + 1).fill(0n)
        )
    );
    dp[0][0][0] = 1n;

    for (let idx = 0; idx < n; idx++) {
        const ndp = Array.from({ length: m + 1 }, () =>
            Array.from({ length: k + 1 }, () =>
                Array(m + 1).fill(0n)
            )
        );

        for (let used = 0; used <= m; used++) {
            for (let j = 0; j <= k; j++) {
                for (let carry = 0; carry <= m; carry++) {
                    const base = dp[used][j][carry];
                    if (base === 0n) continue;

                    const maxPick = m - used;
                    for (let c = 0; c <= maxPick; c++) {
                        const s = carry + c;
                        const bit = s & 1;
                        const nj = j + bit;
                        if (nj > k) continue;
                        const ncarry = s >>> 1;

                        let contrib = base;
                        contrib = (contrib * powNum[idx][c]) % MOD;
                        contrib = (contrib * invFact[c]) % MOD;

                        ndp[used + c][nj][ncarry] =
                            (ndp[used + c][nj][ncarry] + contrib) % MOD;
                    }
                }
            }
        }

        dp = ndp;
    }

    // finalize: we add popcount of remaining carry
    function popcountInt32(x) {
        let cnt = 0;
        let v = x;
        while (v) { cnt += (v & 1); v >>>= 1; }
        return cnt;
    }

    let ans = 0n;
    for (let j = 0; j <= k; j++) {
        const rowUsedM = dp[m][j];
        for (let carry = 0; carry <= m; carry++) {
            const v = rowUsedM[carry];
            if (v === 0n) continue;
            if (j + popcountInt32(carry) === k) {
                ans = (ans + v) % MOD;
            }
        }
    }

    // we convert from counts to ordered sequences
    ans = (ans * fact[m]) % MOD;
    return Number(ans);
};
