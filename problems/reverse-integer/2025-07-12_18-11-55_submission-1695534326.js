/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    let rev = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while (x !== 0) {
        let pop = x % 10;
        x = (x / 10) | 0; 
        rev = rev * 10 + pop;
    }

    if (rev > 0x7FFFFFFF) return 0;

    return rev * sign;
}