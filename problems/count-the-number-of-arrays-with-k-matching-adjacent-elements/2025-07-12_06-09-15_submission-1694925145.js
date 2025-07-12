/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var countGoodArrays = function(n, m, k) {
    const MOD = 1e9 + 7;

    const modPow = (a, b) => {
        let res = 1n, base = BigInt(a);
        b = BigInt(b);
        while (b > 0) {
            if (b % 2n === 1n)
                res = (res * base) % BigInt(MOD);
            base = (base * base) % BigInt(MOD);
            b >>= 1n;
        }
        return res;
    };

    const modInv = (x) => modPow(x, MOD - 2);

    let fact = Array(n).fill(1n);
    for (let i = 1; i < n; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % BigInt(MOD);
    }

    const comb = (fact[n - 1] * modInv(fact[k]) % BigInt(MOD)) * modInv(fact[n - 1 - k]) % BigInt(MOD);
    const result = comb * BigInt(m) % BigInt(MOD) * modPow(m - 1, n - 1 - k) % BigInt(MOD);

    return Number(result);
};