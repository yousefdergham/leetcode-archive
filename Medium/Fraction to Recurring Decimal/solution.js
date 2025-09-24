/*
Fraction to Recurring Decimal
Difficulty: Medium
Language: JavaScript
Runtime: 0 ms
Memory: 53.6 MB
Submitted: 2025-09-24T03:48:23.921Z
Link: https://leetcode.com/problems/fraction-to-recurring-decimal/submissions/1780820985/?envType=daily-question&envId=2025-09-24
*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";

    let n = BigInt(numerator);
    let d = BigInt(denominator);

    let res = "";
    if ((n < 0n) !== (d < 0n)) res += "-";

    if (n < 0n) n = -n;
    if (d < 0n) d = -d;

    res += (n / d).toString();
    let rem = n % d;
    if (rem === 0n) return res;

    res += ".";
    const seen = new Map();

    while (rem !== 0n) {
        if (seen.has(rem)) {
            const pos = seen.get(rem);
            res = res.slice(0, pos) + "(" + res.slice(pos) + ")";
            break;
        }
        seen.set(rem, res.length);
        rem *= 10n;
        res += (rem / d).toString();
        rem = rem % d;
    }
    return res;
};