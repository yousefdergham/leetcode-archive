/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
const MOD = 1000000007n;

function modPow(base, exp, mod) {
    let result = 1n, b = BigInt(base), e = BigInt(exp);
    while (e > 0n) {
        if (e & 1n) {
            result = (result * b) % mod;
        }

        b = (b * b) % mod;
        e >>= 1n;
    }

    return result;
}

function getPowers(n) {
    let powers = [], bit = 0;

    while (n > 0) {
        if (n & 1) {
            powers.push(1n << BigInt(bit));
        }

        n >>= 1;
        bit++;
    }

    return powers;
}

function getPrefixProducts(powers) {
    let prefix = [powers[0] % MOD];

    for (let i = 1; i < powers.length; i++) {
        prefix[i] = (prefix[i - 1] * powers[i]) % MOD;
    }

    return prefix;
}

let productQueries = function (n, queries) {
    let powers = getPowers(n);
    let prefix = getPrefixProducts(powers);
    let results = [];

    for (let [l, r] of queries) {
        if (l === 0) {
            results.push(Number(prefix[r]));
        } else {
            let inv = modPow(prefix[l - 1], MOD - 2n, MOD);
            results.push(Number((prefix[r] * inv) % MOD));
        }
    }

    return results;
}