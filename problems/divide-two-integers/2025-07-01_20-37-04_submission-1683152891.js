/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 0) throw new Error("Divide by zero");
    let quotient = 0;
    let remainder = dividend;
    let shift = 0;
    while ((divisor << shift) <= remainder) {
        shift++;
    }
    shift--;

    while (shift >= 0) {
        if (remainder >= (divisor << shift)) {
            remainder -= (divisor << shift);    // subtract the chunk
            quotient += (1 << shift);           // set the quotient bit
        }
        shift--;
    }

    return quotient;
};