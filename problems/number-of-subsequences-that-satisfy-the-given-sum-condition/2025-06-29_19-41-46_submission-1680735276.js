/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  const subsequences = nums.reduce(
    (subs, num) =>
      subs.concat(subs.map(seq => [...seq, num])),
    [[]]
  ).filter(seq => seq.length > 0);
  let satisfy = 0
  for (let i = 0; i < subsequences.length; i++) {
    let tmp = subsequences[i].sort((a, b) => a - b)
    if (tmp[0] + tmp[tmp.length - 1] <= target) {
      satisfy++
      continue;
    }
  }
  return satisfy
};