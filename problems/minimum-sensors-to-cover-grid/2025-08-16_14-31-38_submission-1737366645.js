/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minSensors = function (n, m, k) {
    const side = 2 * k + 1;
    const rows = Math.ceil(n / side);
    const cols = Math.ceil(m / side);
    return rows * cols;
};