/**
 * @param {xumber} x
 * @return {number}
 */
var mySqrt = function (x) {
    let res = 0;
    let bit = 1 << 30;
    while (bit > x) bit >>= 2;
    while (bit !== 0) {
        if (x >= res + bit) {
            x -= res + bit;
            res = (res >> 1) + bit;
        } else {
            res = res >> 1;
        }
        bit >>= 2;
    }
    return res;
};