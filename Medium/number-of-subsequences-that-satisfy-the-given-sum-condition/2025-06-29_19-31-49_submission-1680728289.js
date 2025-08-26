/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  filterdArr = nums.filter(x => x <= target)
  const subsequences = filterdArr.reduce(
    (subs, num) =>
      subs.concat(subs.map(seq => [...seq, num])),
    [[]]
  );
  let satisfy = 0
  for (let i = 0; i < subsequences.length; i++) {
    if (subsequences[i][0] + subsequences[i][subsequences[i].length - 1] <= target) {
      satisfy++
    }

  }
  return satisfy
};