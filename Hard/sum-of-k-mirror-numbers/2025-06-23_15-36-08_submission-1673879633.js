/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function (k, n) {
    const digit = new Array(100);
    let left = 1,
        count = 0,
        ans = 0n;
    while (count < n) {
        const right = left * 10;
        
        for (let op = 0; op < 2; ++op) {

            for (let i = left; i < right && count < n; ++i) {
                let combined = BigInt(i);
                let x = op === 0 ? Math.floor(i / 10) : i;
                while (x > 0) {
                    combined = combined * 10n + BigInt(x % 10);
                    x = Math.floor(x / 10);
                }
                if (isPalindrome(combined, k, digit)) {
                    ++count;
                    ans += combined;
                }
            }
        }
        left = right;
    }
    return Number(ans);
};

function isPalindrome(x, k, digit) {
    let length = -1;
    while (x > 0n) {
        ++length;
        digit[length] = Number(x % BigInt(k));
        x /= BigInt(k);
    }
    for (let i = 0, j = length; i < j; ++i, --j) {
        if (digit[i] !== digit[j]) {
            return false;
        }
    }
    return true;
}