/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    const subsequences = nums.reduce(
        (subs, num) =>
            subs.concat(subs.map(seq => [...seq, num])),
        [[]]
    ).filter(seq => seq.length > 0).sort((a, b) => a.length - b.length).reverse()
    for (let i = 0; i < subsequences.length; i++) {
        let tmp = subsequences[i].sort((a, b) => a - b)
        if (tmp[tmp.length - 1] - tmp[0] == 1) {
            return tmp.length
        }
    }
    return 0
};