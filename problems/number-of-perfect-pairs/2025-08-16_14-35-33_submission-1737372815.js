/**
 * @param {number[]} nums
 * @return {number}
 */
var perfectPairs = function (nums) {
    const jurnavalic = nums.slice();
    const absVals = jurnavalic.map(Math.abs);
    let zeroCount = 0;
    const pos = [];
    for (const x of absVals) {
        if (x === 0) zeroCount++;
        else pos.push(x);
    }
    let result = (zeroCount * (zeroCount - 1)) >> 1;
    pos.sort((a, b) => a - b);
    let r = 0;
    for (let l = 0; l < pos.length; l++) {
        if (r < l + 1) r = l + 1;
        while (r < pos.length && pos[r] <= 2 * pos[l]) r++;
        result += r - l - 1;
    }
    return result;
};